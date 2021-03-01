import SetCache from './09-SetCache'
import arrayIncludes from './13-arrayIncludes'
import arrayIncludesWith from './14-arrayIncludesWith'
import map from '../15-map'
import cacheHas from './16-cacheHas'

/**
 * 获取两个数组的差集
 * @param {Array} array 比较数组1
 * @param {Array} values 比较数组2
 * @param {Function} iteratee 包装比较数组2
 * @param {Function} comparator 自定义比较函数
 */
const LARGE_ARRAY_SIZE = 200
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length

  if(!array.length) {
    return []
  }

  if(iteratee) {
    values = map(values, value => iteratee(value))
  }
  if(comparator) {
    includes = arrayIncludesWith
    inCommon = false
  }else if(values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }

  outer:for (let value of array) {
    // 第一个数组待比较的值
    const computed = iteratee == null ? value : iteratee(value)

    value = (comparator || value !== 0) ? value : 0
    // 非NaN
    if(isCommon && computed === computed) {
      // 内层循环 遍历第二个数组的元素
      let valuesIndex = valuesLength
      while (valuesIndex--) {
        // 如果和外层循环当前值相等 退出外层循环 进入下一轮
        if (values[valuesIndex] === computed) {
          continue outer
        }
      }
      // 否则放入结果数组
      result.push(value)
    } else if (!includes(values, computed, comparator)) {
      // 第二个数组不包含当前循环值 说明是差集
      result.push(value)
    }
    return result
  }
}

export default baseDifference