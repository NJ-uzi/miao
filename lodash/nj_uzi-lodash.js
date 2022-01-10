var nj_uzi = {
  chunk: function (array, size) {
    let leng = array.length
    var res = []
    var temp = Math.ceil(leng/size)
    var x = 0
    var y=size
    for (var i = 0; i < temp; i++) {
      res[i] = new Array()
      for (var j = x; j < y&&j<leng; j++) { 
        res[i].push(array[j])
      }
      x += size
      y += size
    }
    return res
  },

  compact: function (array) {
    var res=[]
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
      num=num==0?0:1 
    }
    for (let i = 0; i < leng-num; i++) { 
      res.push(array[i])
    }
    return res
  },

  fill: function (array, value, start=0, end=array.length) {
    for (let i = start; i < end; i++) {
      array[i]=value
    }
    return array
  },

  flatten: function (array) {
    var res = []
    for (let i = 0; i < array.length; i++) { 
      if (!array[i].length) { 
        res.push(array[i])
      }
      for (let j = 0; j < array[i].length;j++) { 
        res.push(array[i][j])
      }
    }
    return res
  },

  flattenDeep :function (array) {
  let res = []
  array.forEach(item => {
    if(Array.isArray(item)){
      res = res.concat(flattenDeep(item))
    } else {
      res.push(item)
    }
  })
  return res;
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
    return [array[0]]
  },

  indexOf: function (array, value, fromIndex = 0) {
    var sum=0
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

  initial: function () { 
    
  }
};
// chunk    xx
// compact    xx
// drop    xx
// dropRight    xx
// dropRightWhile    
// dropWhile    
// fill    xx
// findIndex    
// findLastIndex    
// flatten    xx
// flattenDeep    yy
// flattenDepth    
// fromPairs    xx
// head    xx
// indexOf    xx
// initial
// join
// last
// lastIndexOf
// reverse
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
