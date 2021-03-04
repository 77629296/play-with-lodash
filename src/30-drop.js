import slice from './01-slice'

// 删除指定数组 前n个元素 也就是从n截取到length
function drop(array, n = 1) {
  let length = array == null ? 0 : array.length
  return length ? slice(array, n < 0 ? 0 : n, length) : []
}

export default drop