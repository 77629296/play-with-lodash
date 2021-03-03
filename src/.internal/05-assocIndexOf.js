import eq from '../04-eq'

// var caches = [['test1', 1],['test2',2],['test3',3]]

/**
 * 找出指定key 在二维数组中的索引
 * @param {Array} array 
 * @param {String} key 
 */
function assocIndexOf(array, key) {
  let { length } = array
  // length=10 length--=10 length=9
  // length=1 legnth--=1 length=0

  // 如果换成--length
  // length=10 --length=9 length=9
  // length=1 --length=0 length=0 不会进入循环 导致第一个元素不会判断
  while (length--) {
    console.log(array[length][0], key)
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}

export default assocIndexOf