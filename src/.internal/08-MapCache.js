import Hash from './06-Hash'
import ListCache from './07-ListCache'

/**
 * Hash
 * 类型是string/nunber/symbol/boolean
 *  是否等于__proto__
 *    不是则--使用Hash
 *  是否等于null
 *    是null--使用Hash
 *  string单独使用一个Hash空间
 *
 * 其余使用Map或ListCache
 *
 */

// new MapCache([
//   ['key', 'value'],
//   [{key: 'An Object Key'}, 1],
//   [Symbol(),2]
// ])

// {
//   size: 3,
//   __data__: {
//     string: {
//       ...
//     },
//     hash: {
//       ...
//     },
//     map: {
//       ...
//     }
//   }
// }

function getMapData({ __data__ }, key) {
  const data = __data__
  return isKeyable(key)
    ? data[typeof key === 'string' ? 'string' : 'hash']
    : data.map
}

function isKeyable(value) {
  const type = typeof value
  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean'
    ? value !== '__proto__'
    : value === null
}

class MapCache {
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }

  clear() {
    this.size = 0
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash(),
    }
  }

  delete(key) {
    const result = getMapData(this, key)['delete'](key)
    this.size -= result ? 1 : 0
    return result
  }

  get(key) {
    return getMapData(this, key).get(key)
  }

  has(key) {
    return getMapData(this, key).has(key)
  }

  set(key, value) {
    const data = getMapData(this, key)
    const size = data.size
    data.set(key, value)
    this.size += data.size == size ? 0 : 1
    return this
  }
}

export default MapCache
