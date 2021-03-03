import isLength from './23-isLength'

function isArrayLike(value) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike
