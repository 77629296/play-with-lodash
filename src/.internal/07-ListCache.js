/**
 * 上一篇分析了Hash的实现，核心是用对象做缓存
 * 它的key只能是字符串或者Symbol类型
 * 当需要缓存的key为对象、数组等类型时，就用到了ListCache
 */

// 调用
// new ListCache([
//   [{key: 'An Object Key'}, 1],
//   [['An Array Key'],2],
//   [function(){console.log('A Function Key')},3]
// ])

// 结果
// {
//   size: 3,
//   __data__: [
//     [{key: 'An Object Key'}, 1],
//     [['An Array Key'],2],
//     [function(){console.log('A Function Key')},3]
//   ]
// }

import assocIndexOf from './05-assocIndexOf'

/**
 * 调用方式同Hash 利用二维数组实现
 * @param {Array} array 
 */
class ListCache {
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    // 初始化
    this.clear()

    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])     
    }
  }

  clear() {
    this.__data__ = []
    this.size = 0
  }

  delete(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)

    // 不存在直接返回
    if (index < 0) {
      return false
    }

    // 存在 删除、size-1

    // 优化 如果是最后一个 直接pop
    if (index === data.length -1) {
      data.pop()
    } else {
      data.splice(index, 1)
    }
    --this.size
    return true
  }

  get(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    return index < 0 ? undefined : data[index][1]
  }

  has(key) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    return index > -1
  }

  set(key, value) {
    const data = this.__data__
    const index = assocIndexOf(data, key)
    
    if (index < 0) {
      // 不存在 新增 size+1
      data.push([key, value])
      ++this.size
    } else {
      // 存在 覆写 size不变
      data[index][1] = value
    }
  }
}

export default ListCache