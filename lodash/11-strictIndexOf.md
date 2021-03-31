# strictIndexOf

和原生indexOf一致，采用严格比较查找，区别是这里没有处理fromIndex为负数的情况

## 1.要点

刚看这个方法是怀疑它的必要性，原生indexOf不能用吗？  
当然，这也是lodash比较细节的一点，作为内部方法使用

## 2. 代码实现

```js
/**
 * strictIndexOf([1, 4, 3, 2], 4) // 1
 * strictIndexOf([1, 4, 3, 2], 3) // 2
 */
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf
```
