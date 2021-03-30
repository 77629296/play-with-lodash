# baseFindIndex

根据条件返回索引值

## 1.要点

优先级？加个括号不好吗？[运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```js
// while循环中，源码如下，阅读不太友好，根据优先级加了括号
// 比较运算符的优先级为11，而三元表达式（条件运算符）的优化级为4
fromRight ? index-- : ++index < length
// fromRight ? index-- : (++index < length)
```

## 2. 代码实现

```js
/**
 * 默认从0开始
 * baseFindIndex([1, 4, 3, 2], val => val > 1) // 1
 * baseFindIndex([1, 4, 3, 2], val => val > 1, true, 3) // 3
 */
function baseFindIndex(array, predicate, fromIndex = 0, fromRight = false) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
```
