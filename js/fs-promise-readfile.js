const fs = require('fs')
const fsp = fs.promises


function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function writeFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.writeFile(...args, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(err)
      }
    })
  })
}

//将一个回调风格的函数转换为一个返回 Promise 的函数
// readFileP = Promisefy(fs.readFile)

function Promisefy(callBackBased) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      callBackBased(...agrs, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

try {
  var data = await readFilePromise('')
  console.log(data)
} catch (e) {
  console.error(e)
}


//将一个Promise风格的函数转成 回调风格的函数
function callbackify(promiseStyleFunc) {
  return function (...args) {
    var callback = args.pop()
    promiseStyleFunc(args).then(result => {
      callback(null, result)
    }, err => {
      callback(err)
    })
  }
}