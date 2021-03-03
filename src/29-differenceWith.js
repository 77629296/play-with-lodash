import baseDifference from './.internal/17-baseDifference'
import baseFlatten from './.internal/22-baseFlatten'
import isArrayLikeObject from './25-isArrayLikeObject'
import last from './27-last'

function differenceWith(array, ...values) {
  let comparator = last(values)
  // 最后一个元素是类数组对象 重置comparator
  if (isArrayLikeObject(comparator)) {
    comparator = undefined
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        undefined,
        comparator
      )
    : []
}

export default differenceWith
