/**
 * map方法实现
 * @param {Array} array 待处理数组
 * @param {Function} interatee 自定义处理函数
 */
function map(array, iteratee) {
  // 设置为-1 为了后续使用++index
  let index = -1
  const length = array == null ? 0 : array.length
  // 按照原数组长度 创建一个新数组 用于返回结果
  const result = new Array(length)

  /**
   * ++index ? 
   * 此时++index=0 index=0
   * 方便条件判断后使用index
   */
  while(++index < length) {
    result[index] = iteratee(array[index], index, array)
  }

  /**
   * 能不能换成index++
   * 修改let index = 0
   * 此时index++=0 index=1 首次就是赋值result[1] 丢失result[0]
   */
  // while(index++ < length) {
  //   result[index] = iteratee(array[index], index, array)
  // }

  return result
}