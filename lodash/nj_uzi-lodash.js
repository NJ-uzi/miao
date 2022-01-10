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
    
  },
};

// chunk xx
// compact xx
// drop
// dropRight
// dropRightWhile
// dropWhile
// fill
// findIndex
// findLastIndex
// flatten
// flattenDeep
// flattenDepth
// fromPairs
// head
// indexOf
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
