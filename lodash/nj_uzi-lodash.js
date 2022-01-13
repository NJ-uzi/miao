var nj_uzi = {
  chunk: function (array, size) {
    let leng = array.length
    var res = []
    var temp = Math.ceil(leng / size)
    var x = 0
    var y = size
    for (var i = 0; i < temp; i++) {
      res[i] = new Array()
      for (var j = x; j < y && j < leng; j++) {
        res[i].push(array[j])
      }
      x += size
      y += size
    }
    return res
  },

  compact: function (array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  drop: function (array, num) {
    var res = []
    if (!num) {
      return array
    }
    for (let i = num; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  },

  dropRight: function (array, num) {
    var res = []
    var leng = array.length
    if (!num) {
      num = num == 0 ? 0 : 1
    }
    for (let i = 0; i < leng - num; i++) {
      res.push(array[i])
    }
    return res
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  // flatten: function (array) {
  //   var res = []
  //   for (let i = 0; i < array.length; i++) {
  //     if (!array[i].length) { //通过判断是否存在长度，是否是数组
  //       res.push(array[i])
  //     }
  //     for (let j = 0; j < array[i].length; j++) {
  //       res.push(array[i][j])
  //     }
  //   }
  //   return res
  // },
  flatten: function (ary) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
      if (Array.isArray(item)) { //直接判断是否是数组
        for (var j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(item)
      }
    }
    return res
  },

  // flattenDeep: function (array) {
  //   let res = []
  //   array.forEach(item => {
  //     if (Array.isArray(item)) {
  //       res = res.concat(flattenDeep(item))
  //     } else {
  //       res.push(item)
  //     }
  //   })
  //   return res;
  // },

  flattenDeep: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      if (Array.isArray(item)) {
        item = flattenDeep(item)
        for (var j = 0; j < item.length; j++) {
          result.push(item[j])
        }
      } else {
        result.push(item)
      }
    }
    return result
  },

  flattenDepth: function (array, depth = 1) {
    for (var i = 0; i < depth; i++) {
      array = flatten(array)
    }
    return array
  },

  fromPairs: function (pairs) {
    var res = {}
    for (let i = 0; i < pairs.length; i++) {
      let x = pairs[i][0]
      let y = pairs[i][1]
      res[x] = y
    }
    return res
  },

  head: function (array) {
    if (!array) {
      return undefined
    }
    return array[0]
  },

  indexOf: function (array, value, fromIndex = 0) {
    var sum = 0
    for (let i = 0; i < array.length; i++) {
      if (!fromIndex) {
        if (array[i] == value) {
          return i
        }
      } else {
        if (array[i] == value) {
          sum++
        }
        if (sum == fromIndex) {
          return i
        }
      }
    }
  },

  initial: function (array) {
    var res = []
    for (let i = 0; i < array.length - 1; i++) {
      res.push(array[i])
    }
    return res
  },

  join: function (array, separator = ',') {
    var str = ''
    for (let i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        str += array[i]
      } else {
        str += array[i] + '' + separator
      }
    }
    return str
  },

  last: function (array) {
    if (!array) {
      return undefined
    }
    return array[array.length - 1]
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    var sum = 0
    var temp = 0
    for (let i = array.length - 1; i >= 0; i--) {
      if (!(fromIndex == array.length - 1)) {
        if (array[i] == value) {
          sum++
        }
        if (sum == fromIndex) {
          return i
        }
      } else {
        if (array[i] == value) {
          temp = i
        }
      }
    }
    return temp
  },

  reverse: function (array) {
    var leng = array.length
    var right = leng - 1
    var mid = 0
    for (let left = 0; left < right; left++) {
      mid = array[left]
      array[left] = array[right]
      array[right] = mid
      right--
    }
    return array
  },

  uniq: function (array) {
    var res = []
    var map = {}
    for (let i = 0; i < array.length; i++) {
      if (array[i] in map) {  //利用对象的key来判断元素是否出现过，出现过的跳过，没出现过的push进res
        continue
      } else {
        map[array[i]] = 1
        res.push(array[i])
      }
    }
    return res
  },

  withOut: function (array, values) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (!(array[i] == values)) {
        res.push(array[i])
      }
    }
    return res
  },

  zip: function (...array) {
    var res = []
    for (let i = 0; i < array[0].length; i++) {
      var ary = []
      for (let j = 0; j < array.length; j++) {
        ary.push(array[j][i])
      }
      res.push(ary)
    }
    return res
  },

  size: function (collection) {
    var leng = 0
    for (var key in collection) {
      leng++
    }
    return leng
  },

  isBoolean: function (value) {
    value === false || value === true ? true : false
  },

  isEmpty: function (value) {
    for (var key in value) {
      return false
    }
    return true
  },

  isEqual: function (a, b) {
    if (a === b) {
      return true
    }
    if (a !== a && b !== b) {
      return true
    }
    // 两个都是数组
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return false
      } else {
        for (var i = 0; i < a.length; i++) {
          if (!deepEqual(a[i], b[i])) {
            return false
          }
        }
        return true
      }
    }
    // 两个都是对象
    if (!Array.isArray(a) && !Array.isArray(b) && typeof a === 'object' && typeof b === 'object') {
      for (var key in a) {
        // a的每个属性都要在b里
        // 一旦不在，就返回false
        if (!(key in b)) {
          return false
        }
      }
      for (var key in b) {
        // b的每个属性都要在a里
        // 一旦不在，就返回false
        if (!(key in a)) {
          return false
        }
      }
      for (var key in a) {
        if (!deepEqual(a[key], b[key])) {
          return false
        }
      }
      return true
    }
    return false
  },

  isNull: function (value) {
    return value === null
  },

  isNumber: function (value) {
    return typeof (value) === typeof (0)
  },

  toArray: function (value) {
    if (typeof (value) === 'number' || !value) {
      return []
    }

    var res = []
    if (typeof (value) === 'string' || Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        res.push(array[i])
      }
      return res
    }

    for (let key of value) {
      res.push(value[key])
    }
    return res
  },

  add: function (augend, addend) {
    return augend + addend
  },

  max: function (array) {
    if (!array.length) {
      return undefined
    }
    var M = -Infinity
    for (let key of array) {
      key > M ? M = key : M
    }
    return M
  },

  min: function (array) {
    if (!array.length) {
      return undefined
    }
    var M = Infinity
    for (let key of array) {
      key < M ? M = key : M
    }
    return M
  },

  sum: function (array) {
    // var res = 0
    // for (let key of array) {
    //   res += key
    // }
    // return res
    return array.reduce((a, b) => a + b)
  },


};

// dropRightWhile
// dropWhile
// findIndex
// findLastIndex
// indexOf        x
// lastIndexOf    x
// uniqBy
// countBy
// every
// some
// filter
// find
// forEach
// groupBy
// keyBy
// isNaN
// isNil

// map
// partition
// reduce
// reduceRight
// reject
// sample
// shuffle
// ceil
// maxBy
// sumBy
// sum
// repeat
// range
// cloneDeep
