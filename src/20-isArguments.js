import isObjectLike from './19-isObjectLike'
import getTag from './.internal/18-getTag'

function isArguments(value) {
  return isObjectLike(value) && getTag(value) === '[object Arguments]'
}
export default isArguments