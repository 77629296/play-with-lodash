# MapCache

之前介绍了 Hash 和 MapCache 方法，Hash 利用了 js 对象的 key，value 作为缓存，MapCache 则处理了 js 对象不支持的 key 时的情况。
如果让用户自行来区分使用，成本比较高，如果提供一个通用的方法，根据用户要缓存的数据，自行决定使用哪种方案不是更友好吗？它来了，MapCache 的工作就是这个

## 1.要点
代码实现和之前的Hash/MapCache类似，第一次看时，比较迷惑的一点是，当可作为对象key时，又单独区分了key类型为string的情况，其他则存到了hash下，这是为什么呢？经过查阅资料，得出以下结论
1. 对象的key，如果不是Symbol类型时，会转为字符串形式
2. 如果缓存的数据中存在数字1和字符串'1'，那么只会存储为字符串1，这就是问题所在了

## 2. 代码实现

```js
import Hash from './4-Hash'
import ListCache from './7-ListCache'
/**
 * new MapCache([
 *   ['key', 'value'],
 *   [{key: 'An Object Key'}, 1],
 *   [Symbol(),2]
 * ])
 * 返回结果：{
 *   size: 3,
 *   __data__: {Ï
 *     string: {...},
 *     hash: {...},
 *     map: {...}
 *   }
 * }
 */

// 是否可作为对象的key
function isKeyable(value) {
  const type = typeof value
  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean'
    ? value !== '__proto__'
    : value === null
}

function getMapData({ __data__ }, key) {
  const data = __data__
  // 根据是否可用作key 区分使用map
  return isKeyable(key)
    ? // 可用作key时 string单独分为1类
      data[typeof key == 'string' ? 'string' : 'hash']
    : data.map
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
```
