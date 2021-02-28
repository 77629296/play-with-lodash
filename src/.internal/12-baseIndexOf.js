import baseFindIndex from './10-baseFindIndex'
import strictIndexOf from './11-strictIndexOf'

// 不处理 `fromIndex` 为负数时的情况
// 可以查找 `NaN`
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(
        array,
        (value) => {
          return value !== value
        },
        fromIndex
      )
}

export default baseIndexOf
