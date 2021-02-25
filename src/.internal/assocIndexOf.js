import eq from '../eq'

// var caches = [['test1', 1],['test2',2],['test3',3]]
import eq from '../eq.js'
function assocIndexOf(array, key) {
  let { length } = array
  while (lenth--) {
    if (eq(array[length][0], key) {
      return length
    }
  }
  return -1
}

export default assocIndexOf