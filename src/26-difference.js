import isArrayLikeObject from './25-isArrayLikeObject'
import baseDifference from './.internal/17-baseDifference'
import baseFlatten from './.internal/22-baseFlatten'

function difference(array, ...values) {
  return isArrayLikeObject
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : []
}

export default difference
