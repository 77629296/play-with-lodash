import { entriesIn } from 'lodash'

const HASH_UNDEFINED = '__lodash_hash_undefined__'

// new Hash([['test1', 1],['test2',2],['test3',3]])
// {
//   size: 3,
//   __data__: {
//     test1: 1,
//     test2: 2,
//     test3: 3
//   }
// }

class Hash {
  constructor(entries) {
    let index = -1
    const length = entries === null ? 0 : entries.length
    this.clear()
    while (++index < length) {
      this.set(entries[index], entries[index+1])
    }
  }
  clear() {
    this.__data__ = new Object(null)
    this.size = 0
  }
  delete(key) {
    const result = this.has(key) && delete this.__data__[key]
    this.size -= result ? 1 : 0
    return result
  }
  get(key) {
    const data = this.__data__
    const result = data[key]
    return result === HASH_UNDEFINED ? undefined : result
  }
  has(key) {
    const data = this.__data__
    return data[key] !== undefined
  }
  set(key, value) {
    const data = this.__data
    this.size += this.has(key) ? 0 : 1
    data[key] = value === undefined ? HASH_UNDEFINED : value
    return this
  }
}

export default Hash
