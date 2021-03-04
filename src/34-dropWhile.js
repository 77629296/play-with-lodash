import baseWhile from './32-baseWhile'

function dropWhile(array, predicate) {
  return array != null && array.length ? baseWhile(array, predicate, true) : []
}

export default dropWhile
