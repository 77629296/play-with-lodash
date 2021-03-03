import isArrayLikeObject from './25-isArrayLikeObject'
import last from './25-last'
import baseFlatten from './.internal/22-baseFlatten'
import baseDifference from './.internal/17-baseDifference'

function differenceBy(array, ...values) {
  let iteratee = last(values)
  if (isArrayLikeObject) {
    iteratee = undefined
  }
  return isArrayLikeObject(array)
    ? baseDifference(
        array,
        baseFlatten(values, 1, isArrayLikeObject, true),
        iteratee
      )
    : []
}

export default differenceBy
