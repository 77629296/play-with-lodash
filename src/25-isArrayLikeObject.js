import isObjectLike from './19-isObjectLike'
import isArrayLike from './24-isArrayLike'

function isArrayLikeObject(value) {
  return isArrayLike(value) && isObjectLike(value)
}

export default isArrayLikeObject
