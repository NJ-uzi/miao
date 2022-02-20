var nj_uzi = {
  //*************************************************************** */
  chunk: function chunk(array, size) {
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

  compact: function compact(array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  //未完待续
  //把第一个数组里的元素和后续数组中的元素对比，没有出现过的元素放进新数组
  difference: function difference(ary, ...values) {
    var result = []
    var valuesAry = flattenDeep(values) //把后续的数组放在一个大数组valus里 然后在数组里展开，变成一个一维数组
    for (let i = 0; i < ary.length; i++) {
      if (!valuesAry.includes(ary[i])) {//如果后续数组的元素没有被目标数组包含，则记录
        result.push(ary[i])
      }
    }
  },
  differenceBy: function () {

  },

  differenceWith: function () {

  },

  drop: function drop(array, n = 1) {
    var res = []
    if (!n) {
      return array
    }
    for (let i = n; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  },

  dropRight: function dropRight(array, num) {
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

  dropRightWhile: function () {

  },

  dropWhile: function () {

  },

  fill: function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  findIndex: function () {

  },

  indLastIndex: function () {

  },

  findLastIndex: function () {

  },

  flatten: function flatten(ary) {
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

  flattenDeep: function flattenDeep(array) {
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

  flattenDepth: function flattenDepth(array, depth = 1) {
    for (var i = 0; i < depth; i++) {
      array = flatten(array)
    }
    return array
  },

  fromPairs: function fromPairs(pairs) {
    var res = {}
    for (let i = 0; i < pairs.length; i++) {
      let x = pairs[i][0]
      let y = pairs[i][1]
      res[x] = y
    }
    return res
  },

  head: function head(array) {
    if (!array) {
      return undefined
    }
    return array[0]
  },

  indexOf: function indexOf(array, value, fromIndex = 0) {
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

  initial: function initial(array) {
    var res = []
    for (let i = 0; i < array.length - 1; i++) {
      res.push(array[i])
    }
    return res
  },

  intersection: function () {

  },

  intersectionBy: function () {

  },

  intersectionWith: function () {

  },

  join: function join(array, separator = ',') {
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

  last: function last(array) {
    if (!array) {
      return undefined
    }
    return array[array.length - 1]
  },

  lastIndexOf: function lastIndexOf(array, value, fromIndex = array.length - 1) {
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

  nth: function () {

  },

  pull: function () {

  },

  pullAll: function () {

  },

  pullAllBy: function () {

  },

  pullAllWith: function () {

  },

  remove: function () {

  },

  reverse: function reverse(array) {
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

  slice: function () {

  },

  sortedIndex: function () {

  },

  sortedIndexBy: function () {

  },

  sortedIndexOf: function () {

  },

  sortedLastIndex: function () {

  },

  sortedLastIndexBy: function () {

  },

  sortedLastIndexOf: function () {

  },

  sortedUniq: function () {

  },

  sortedUniqBy: function () {

  },

  tail: function () {

  },

  take: function () {

  },

  takeRight: function () {

  },

  takeRightWhile: function () {

  },

  takeWhile: function () {

  },

  union: function () {

  },

  unionBy: function () {

  },

  unionWith: function () {

  },

  uniqWith: function () {

  },

  uniq: function uniq(array) {
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

  uniqBy: function () {

  },
  unzip: function () {

  },
  unzipWith: function () {

  },

  without: function without(array, values) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (!(array[i] == values)) {
        res.push(array[i])
      }
    }
    return res
  },

  xor: function () {

  },
  xorBy: function () {

  },
  xorWith: function () {

  },
  zipObject: function () {

  },
  zipObjectDeep: function () {

  },
  zipWith: function () {

  },

  zip: function zip(...array) {
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

  countBy: function () {

  },
  every: function () {

  },
  filter: function () {

  },
  find: function () {

  },
  findLast: function () {

  },
  flatMap: function () {

  },
  flatMapDeep: function () {

  },
  flatMapDepth: function () {

  },
  forEach: function () {

  },
  forEachRight: function () {

  },
  groupBy: function () {

  },
  includes: function () {

  },
  invokeMap: function () {

  },
  keyBy: function () {

  },
  map: function () {

  },
  orderBy: function () {

  },
  partition: function () {

  },
  reduce: function () {

  },
  reduceRight: function () {

  },
  reject: function () {

  },
  sample: function () {

  },
  sampleSize: function () {

  },
  shuffle: function () {

  },

  size: function size(collection) {
    var leng = 0
    for (var key in collection) {
      leng++
    }
    return leng
  },

  some: function () {

  },
  sortBy: function () {

  },
  defer: function () {

  },
  delay: function () {

  },
  castArray: function () {

  },
  conformsTo: function () {

  },
  eq: function () {

  },
  gt: function () {

  },
  gte: function () {

  },
  isArguments: function () {

  },
  isArray: function () {

  },
  isArrayBuffer: function () {

  },

  isArrayLike: function () {

  },
  isArrayLikeObject: function () {

  },

  isBoolean: function isBoolean(value) {
    value === false || value === true ? true : false
  },

  isDate: function () {

  },
  isElement: function () {

  },

  isEmpty: function isEmpty(value) {
    for (var key in value) {
      return false
    }
    return true
  },

  isEqual: function isEqual(a, b) {
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

  isEqualWith: function () {

  },
  isError: function () {

  },
  isFunction: function () {

  },
  isInteger: function () {

  },
  isLength: function () {

  },
  isMap: function () {

  },
  isMatch: function () {

  },
  isMatchWith: function () {

  },
  isNaN: function () {

  },

  isNil: function () {

  },
  isNative: function () {

  },

  isNull: function isNull(value) {
    return value === null
  },

  isNumber: function isNumber(value) {
    return typeof (value) === typeof (0)
  },

  isObject: function () {

  },
  isObjectLike: function () {

  },
  isPlainObject: function () {

  },

  isRegExp: function () {

  },
  isSafeInteger: function () {

  },
  isSet: function () {

  },
  isString: function () {

  },
  isSymbol: function () {

  },
  isTypedArray: function () {

  },
  isUndefined: function () {

  },
  isWeakMap: function () {

  },
  isWeakSet: function () {

  },
  lt: function () {

  },
  lte: function () {

  },

  toArray: function toArray(value) {
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

  toFinite: function () {

  },

  toInteger: function () {

  },
  toLength: function () {

  },
  toNumber: function () {

  },
  assign: function () {

  },
  toSafeInteger: function () {

  },

  add: function add(augend, addend) {
    return augend + addend
  },

  ceil: function () {

  },
  divide: function () {

  },
  floor: function () {

  },

  max: function max(array) {
    if (!array.length) {
      return undefined
    }
    var M = -Infinity
    for (let key of array) {
      key > M ? M = key : M
    }
    return M
  },

  maxBy: function () {

  },
  mean: function () {

  },
  meanBy: function () {

  },

  min: function min(array) {
    if (!array.length) {
      return undefined
    }
    var M = Infinity
    for (let key of array) {
      key < M ? M = key : M
    }
    return M
  },

  minBy: function () {

  },
  multiply: function () {

  },
  round: function () {

  },
  subtract: function () {

  },


  sum: function sum(array) {
    // var res = 0
    // for (let key of array) {
    //   res += key
    // }
    // return res
    return array.reduce((a, b) => a + b)
  },

  sumBy: function () {

  },
  clamp: function () {

  },
  inRange: function () {

  },
  random: function () {

  },
  assignIn: function () {

  },
  at: function () {

  },
  defaults: function () {

  },
  defaultsDeep: function () {

  },
  findKey: function () {

  },
  findLastKey: function () {

  },
  forIn: function () {

  },
  forInRight: function () {

  },
  forOwn: function () {

  },
  forOwnRight: function () {

  },
  functions: function () {

  },
  functionsIn: function () {

  },
  get: function () {

  },
  has: function () {

  },
  hasIn: function () {

  },
  invert: function () {

  },
  invertBy: function () {

  },
  keys: function () {

  },
  keysIn: function () {

  },
  mapKeys: function () {

  },
  mapValues: function () {

  },
  merge: function () {

  },

  mergeWith: function () {

  },
  omit: function () {

  },
  omitBy: function () {

  },

  pick: function () {

  },
  pickBy: function () {

  },
  result: function () {

  },
  set: function () {

  },
  setWith: function () {

  },
  toPairs: function () {

  },
  toPairsIn: function () {

  },
  transform: function () {

  },
  unset: function () {

  },
  update: function () {

  },
  updateWith: function () {

  },
  values: function () {

  },
  valuesIn: function () {

  },
  camelCase: function () {

  },

  capitalize: function () {

  },
  deburr: function () {

  },
  endsWith: function () {

  },
  deburr: function () {

  },
  escape: function () {

  },
  escapeRegExp: function () {

  },
  kebabCase: function () {

  },
  lowerCase: function () {

  },
  pad: function () {

  },
  padEnd: function () {

  },
  padStart: function () {

  },

  repeat: function repeat(string = '', n = 1) {
    if (!n) {
      return ''
    }

    var res = ''
    for (let i = 0; i < n; i++) {
      res += string
    }
    return res
  },

  replace: function () {

  },
  snakeCase: function () {

  },
  split: function () {

  },
  startCase: function () {

  },
  startsWith: function () {

  },
  toLower: function () {

  },
  toUpper: function () {

  },
  trim: function () {

  },
  trimEnd: function () {

  },
  trimStart: function () {

  },
  truncate: function () {

  },
  unescape: function () {

  },
  upperCase: function () {

  },
  upperFirst: function () {

  },
  words: function () {

  },
  bindAll: function () {

  },
  defaultTo: function () {

  },

  range: function range(start = 0, end, step = 1) {
    var res = []
    if (arguments.length == 1) {
      end = start
      start = 0
    }
    while (start < end) {
      res.push(start)
      start += step
    }
    while (start > end) {
      res.push(start)
      start += -step
    }
    return res
  },

  rangeRight: function () {

  },
  mixin: function () {

  },
  times: function () {

  },
  toPath: function () {

  },
  uniqueId: function () {

  },
  cloneDeep: function () {

  },
  uniqueId: function () {

  },

  identity: function identity(it) {
    return it
  },

  concat: function () {

  },
  pullAt: function () {

  },
  matches: function () {

  },
  property: function () {

  },
  ary: function () {

  },
  unary: function () {

  },
  negate: function () {

  },
  once: function () {

  },
  spread: function () {

  },
  curry: function () {

  },
  memoize: function () {

  },
  flip: function () {

  },
  conforms: function () {

  },
  constant: function () {

  },
  flow: function () {

  },
  method: function () {

  },
  methodOf: function () {

  },
  nthArg: function () {

  },
  propertyOf: function () {

  },
  parseJson: function () {

  },
  stringifyJson: function () {

  },

};

