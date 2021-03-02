import { isFlattenable } from './21-isFlattenable'

function baseFlatten(array, depth, predicate, isStrict, result) {
  // 默认值
  predicate || (predicate = isFlattenable)
  result || (result = [])

  if (array == null) {
    return result
  }

  for (const value of array) {
    // 严格模式下 第二级可以打平则继续
    if (depth > 0 && predicate(value)) {
      // 有第三级调用递归 否则存到result
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        result.push(...value)
      }
    } else {
      // 非严格模式或没有二级 直接存储到result
      resule[result.length] = value
    }
  }
}

export default baseFlatten
