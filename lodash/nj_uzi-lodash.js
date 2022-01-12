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

  dorp: function (array, num) {
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

  flattenDeep: function (ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      var item = ary[i]
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

  flattenDepth: function (ary, n = 1) {
    for (var i = 0; i < n; i++) {
      ary = flatten(ary)
    }
    return ary
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
    var k = new Object()
    for (let i = 0; i < array.length; i++) {

    }

  },
};
// chunk          xx
// compact        xx
// drop           xx
// dropRight      xx
// dropRightWhile
// dropWhile
// fill           xx
// findIndex
// findLastIndex
// flatten        xx
// flattenDeep    yy
// flattenDepth
// fromPairs      xx
// head           xx
// indexOf        xx
// initial        xx
// join           xx
// last           xx
// lastIndexOf    xx
// reverse        xx
// uniq
// uniqBy
// without
// zip
// countBy
// every
// filter
// find
// forEach
// groupBy
// keyBy
// map
// partition
// reduce
// reduceRight
// reject
// sample
// shuffle
// size
// some
// isBoolean
// isEmpty
// isEqual
// isNaN
// isNil
// isNull
// isNumber
// toArray
// ceil
// max
// maxBy
// sumBy
// sum
// repeat
// range
// cloneDeep
