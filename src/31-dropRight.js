import { slice } from 'lodash'

// 从右侧删除 倒叙
// abcde 2 删除后n个
function dropRight(array, n = 1) {
  let length = array == null ? 0 : array.length
  return length ? slice(array, 0, n < 0 ? 0 : -n) : []
}

export default dropRight
