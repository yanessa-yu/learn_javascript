function Bromise(executor) {
    // 成功队列
    var resolveQueue = []
    // 失败队列
    var rejectQueue = []
    this.then = function(onResolve) {
      resolveQueue.push(onResolve)
    }
    this.catch = function(onReject) {
      rejectQueue.push(onReject)
    }
    function resolve(value) {
      console.log(resolveQueue.length)
      // 循环执行成功队列里面的回调函数
      while(true) {
        let resolve = resolveQueue.shift()
        if(resolve) {
          // 直接执行不使用微任务时
          resolve(value)
          return true
        } else {
          return false
        }
      }
    }
    function reject(value) {
      while(true) {
        let reject = rejectQueue.shift()
        if(reject) {
          reject(value)
          return true
        } else {
          return false
        }
      }
    }
    executor(resolve, reject)
  }
  let promise = new Bromise((resolve, reject) => {
    resolve(100)
  })
  promise.then((value) => {
    console.log(value)
  })