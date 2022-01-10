"use strict";

var nj_uzi = {
  chunk: function chunk(array, size) {
    var leng = array.length;
    var res = [];
    var temp = Math.ceil(leng / size);
    var x = 0;
    var y = size;

    for (var i = 0; i < temp; i++) {
      res[i] = new Array();

      for (var j = x; j < y && j < leng; j++) {
        res[i].push(array[j]);
      }

      x += size;
      y += size;
    }

    return res;
  },
  compact: function compact(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i]);
      }
    }

    return res;
  },
  dorp: function dorp(array, num) {
    var res = [];

    if (!num) {
      return array;
    }

    for (var i = num; i < array.length; i++) {
      res.push(array[i]);
    }

    return res;
  },
  dropRight: function dropRight(array, num) {
    var res = [];
    var leng = array.length;

    if (!num) {
      num = num == 0 ? 0 : 1;
    }

    for (var i = 0; i < leng - num; i++) {
      res.push(array[i]);
    }

    return res;
  },
  fill: function fill(array, value) {
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array.length;

    for (var i = start; i < end; i++) {
      array[i] = value;
    }

    return array;
  },
  flatten: function flatten(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
      if (!array[i].length) {
        res.push(array[i]);
      }

      for (var j = 0; j < array[i].length; j++) {
        res.push(array[i][j]);
      }
    }

    return res;
  },
  flattenDeep: function (_flattenDeep) {
    function flattenDeep(_x) {
      return _flattenDeep.apply(this, arguments);
    }

    flattenDeep.toString = function () {
      return _flattenDeep.toString();
    };

    return flattenDeep;
  }(function (array) {
    var res = [];
    array.forEach(function (item) {
      if (Array.isArray(item)) {
        res = res.concat(flattenDeep(item));
      } else {
        res.push(item);
      }
    });
    return res;
  }),
  fromPairs: function fromPairs(pairs) {
    var res = {};

    for (var i = 0; i < pairs.length; i++) {
      var x = pairs[i][0];
      var y = pairs[i][1];
      res[x] = y;
    }

    return res;
  },
  head: function head(array) {
    if (!array) {
      return undefined;
    }

    return [array[0]];
  },
  indexOf: function indexOf(array, value) {
    var fromIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
      if (!fromIndex) {
        if (array[i] == value) {
          return i;
        }
      } else {
        if (array[i] == value) {
          sum++;
        }

        if (sum == fromIndex) {
          return i;
        }
      }
    }
  },
  initial: function initial(array) {
    var res = [];

    for (var i = 0; i < array.length - 1; i++) {
      res.push(array[i]);
    }

    return res;
  },
  join: function join(array) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
    var str = '';

    for (var i = 0; i < array.length; i++) {
      if (i == array.length - 1) {
        str += array[i];
      } else {
        str += array[i] + separator;
      }
    }

    return str;
  }
}; // chunk    xx
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
// initial    xx
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