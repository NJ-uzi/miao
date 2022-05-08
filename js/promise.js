const { readFile } = require("fs")

//简单实现promise里的静态函数
function resolve(value) {
  return new Promise(resolve => {
    resolve(value)
  })
}

function reject(reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

function all(promises) {
  return new Promise((resolve, reject) => {
    var result = []
    var success = 0
    if (promises.length) {
      for (let i = 0; i < promises.length; i++) {
        var promise = promises[i]
        Promise.resolve(promise).then(val => {
          // Promise.resolve(promise) 如果promise是一个非promsie对象，可以强行转换过来
          result[i] = val
          success++
          if (success == promises.length) {
            resolve(result)
          }
        }, reason => {
          reject(reason)
        })
      }
    } else {
      resolve([])
    }
  })
}

function race(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      p.then(resolve, reject)
    }
  })
}

function any(promises) {
  return new Promise((resolve, reject) => {
    var result = []
    var completet = 0
    if (promises.length) {
      for (let i = 0; i < promises.length; i++) {
        var promise = promises[i]
        Promise.resolve(promise).then(val => {
          // Promise.resolve(promise) 如果promise是一个非promsie对象，可以强行转换过来
          resolve(val)
        }, reason => {
          result[i] = reason
          completet++
          if (completet == promises.length) {
            resolve(result)
          }
        })
      }
    } else {
      resolve([])
    }
  })
}

function allSettled(promises) {
  return new Promise((resolve, reject) => {
    var result = []
    var num = 0
    if (promises.length) {
      resolve(result)
    }
    for (let i = 0; i < promises.length; i++) {
      var promise = promises[i]
      Promise.resolve(promise).then(value => {
        result[i] = {
          status: 'fulfilled',
          value,
        }
        num++
        if (num == promises.length) {
          resolve(result)
        }
      }, reason => {
        result[i] = {
          status: 'rejected',
          reason,
        }
        num++
        if (num == promises.length) {
          resolve(result)
        }
      })
    }
  })
}

Promise.prototype.finally = function (onFinally) {
  let p = this.constructor
  return this.then(
    value => {
      return p.resolve(onFinally()).then(() => value)
    },
    reason => {
      return p.resolve(onFinally()).then(() => { throw reason })
    }
  )
}

Promise.prototype.finally2 = function (onFinally) {
  return this.then(
    value => {
      return Promise.resolve(onFinally()).then(() => value)
    },
    reason => {
      return Promise.resolve(onFinally()).then(() => { throw reason })
    }
  )
}

//---------------------------------//
function getNumber() {
  return new Promise((resolve, reject) => {
    var num = Math.ceil(Math.random() * 10)
    setTimeout(function () {
      if (num > 5) {
        reject('数字太大了')
      } else {
        resolve(num)
      }
    }, 2000)
  })

}

getNumber().then(function (data) {
  console.log('resolved')
  console.log(data)
}, function (reason, data) {
  console.log('reject')
  console.log(reason)
})

//---------------------------------//
function requestImg() {
  return new Promise((resolve, reject) => {
    var img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.src = 'xxxxxx'
  })
  //return p
}
function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject('图片请求超时')
    }, 5000)
  })
  //return p
}

Promise
  .race([requestImg(), timeout()])
  .then(function (results) {
    console.log(results)
  })
  .catch(function (reason) {
    console.log(reason)
  })
//---------------------------------//




Promise.resolve()
  .then(() => {
    return promise1
  })
  .then(c1 => {
    showHTML(c1)
  })
  .then(() => {
    return promise2
  })
  .then(c2 => {
    showHTML(c2)
  })
  .then(() => {
    return promise3
  })
  .then(c3 => {
    showHTML(c3)
  })
  .then(() => {
    return promise4
  })
  .then(c4 => {
    showHTML(c4)
  })


function run(generatorFunc) {
  var generator = generatorFunc()
  var generated = generator.next()

  step()

  function step() {
    if (!generated.done) {
      generated.value.then(val => {
        generated = generator.next(val)
        step()
      }, reason => {
        generated = generator.throw(reason)
        step()
      })
    }
  }
}


function run(generatorFunc) {
  return new Promise((resolve, reject) => {
    var generator = generatorFunc()
    var generated = generator.next()

    step()

    function step() {
      if (!generated.done) {
        generated.value.then(val => {
          try {
            generated = generator.next(val)
          } catch (e) {
            reject(e)
          }
          step()
        }, reason => {
          try {
            generated = generator.throw(reason)
          } catch (e) {
            reject(e)
          }
          step()
        })
      } else {
        resolve(generated.value)
      }
    }
  })
}


function run(generatorFunc) {
  return new Promise((resolve, reject) => {
    var generator = generatorFunc()
    var generated = generator.next()

    step()

    function step() {
      if (!generated.done) {
        generated.value.then(val => {
          generated = generator.next(val)
          step()
        }, reason => {
          generated = generator.throw(reason)
          step()
        }).catch(e => {
          reject(e)
        })
      } else {
        resolve(generated.value)
      }
    }
  })
}

