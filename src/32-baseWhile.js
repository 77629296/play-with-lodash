import { slice } from 'lodash'

// 基础函数
function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array
  let index = fromRight ? length : -1
  while (
    (fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)
  ) {}
  /**
   *
   * abcde 右侧开始 删除是指删除0到index+1
   * 不删除 是指 返回index+1到length
   *
   * slice(array, index, length)
   * right
   * slice(array, 0, index+1)
   *
   * slice(array, 0, index)
   * slice(array, index + 1, length)
   */
  return isDrop
    ? slice(array, fromRight ? 0 : index, fromRight ? index + 1 : length)
    : slice(array, fromRight ? index + 1 : 0, fromRight ? length : index)
}

export default baseWhile
