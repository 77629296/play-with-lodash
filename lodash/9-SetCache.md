# SetCache

MapCache缓存key/value形式的数据，SetCache提供了更便捷的方式，用于缓存数组中的值，把value作为key，固定标识作为value

## 1.要点
constructor中new MapCache没有加括号，new对象时，如果不需要传参时，加不加括号都一样，只是调用时需要注意下运算符的优先级
```js
new MapCache().add()
// 报错 先执行MapCache.add，因为new运算符的优先级高于.
new MapCache.add()
```

## 2. 代码实现

```js
import SetCache from './8-MapCache'
/**
 * new SetCache([
 *   'value',
 *   1,
 *   {test: 'Object'}
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
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class SetCache {

  constructor(values) {
    let index = -1
    const length = values == null ? 0 : values.length

    this.__data__ = new MapCache
    while (++index < length) {
      this.add(values[index])
    }
  }

  add(value) {
    this.__data__.set(value, HASH_UNDEFINED)
    return this
  }

  has(value) {
    return this.__data__.has(value)
  }
}

SetCache.prototype.push = SetCache.prototype.add

export default SetCache
```
