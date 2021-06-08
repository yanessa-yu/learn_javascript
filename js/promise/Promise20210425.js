const promise = new Promise((resolve, reject) => {
    resolve( 'success' )
    reject ( 'err' )
})

promise.then( value => {
    console.log( 'resolve', value)
}, reason => {
    console.log( 'reject', reason)
})

// 3.1 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
 
// 1. 新建MyPromise类，传入执行器executor
class MyPromise {
    constructor(executor){
        // executor 是一个执行器，进入会立即执行
        // 2. executor 传入resolve 和reject方法
        // 9.1 捕获执行器错误
        try {
            executor(this.resolve , this.reject);
        } catch (error) {
            this.reject(error)
        }
    }
    // 3.2 存储状态的变量，初始化值是pending
    status = PENDING;
    
    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数的this指向的是window
    // 用箭头函数可以让this指向当前实例对象
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;
    // 更改成功后的状态
    // 5 在Promise类中加入异步逻辑
    // 5.1 缓存完成和失败的回调
  //  onFullfilledCallback = null;
  //  onRejectedCallback = null;
    // 6 实现then方法多次调用添加多个处理函数
    /**
     * Promise的then方法是可以被多次调用。
     * 这里如果有三个then的调用，
     * 如果是同步回调，那么直接返回当前的值就行；
     * 如果是异步回调，那么保存的成功失败的回到，需要用不同的值保存，因为都互不相同，
     * 所有要将上面的两个缓存回调函数的变量改为数组
     * **/
    // 6.1 新增两个存储回调函数的数组
    onFullfilledCallbacks = [];
    onRejectedCallbacks = [];
    
    resolve = (value) => {
        if(this.status === PENDING){
            this.status = FULFILLED;
            this.value = value;
            // 5.3.1 判断成功回调是否存在，如果存在就调用
            // this.onFullfilledCallback && this.onFullfilledCallback(value)
            // 5.3.1 循环调用成功的回调
            this.onFullfilledCallbacks.forEach( ( fn) => {
                fn(value)
            })
        }
    }

    //更改失败后的状态
    reject = (reason) => {
        if(this.status === PENDING){
            this.status = REJECTED;
            this.reason = reason;
            // 5.3.2 判断失败回调是否存在，如果存在就调用
           // this.onRejectedCallback && this.onRejectedCallback(reason)
           // 6.3.2 循环调用失败的回调函数
           this.onRejectedCallbacks.forEach( (fn) => {
                fn(reason)
           })
        }
    }

    // 4. then的实现
    then = (onFulfilled, onRejected) => {
        // 10 then的参数可选
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function'? onRejected : reason => {throw reason}
        /**
         * 7. 实现then函数的链式调用
         * then方法要链式调用那么就需要返回一个Promise对象
         * then方法里面return一个返回值作为下一个then方法的参数，那么就需要判断他的状态
         * 
        */
    
        // 7.1 为了链式调用这里直接创建一个MyPromise，并在后面return出去
        const promise2 = new MyPromise((resolve, reject) => {
                // 4.1 判断状态
            if(this.status === FULFILLED){
                
                /** 8.1 我们在此处同步使用promise2会报错
                 * 我们必须要等promise2完成初始化。
                 * 此时需要要上宏微任务和事件循环的知识了
                 * 这里需要创建一个异步函数去等待promise2完成初始化
                 * 使用创建微任务的技术方案 queueMicrotask
                 */
                queueMicrotask( () => {
                    // 9.2 then执行的错误捕获
                    try {
                        // 4.2.1 调用成功回调，并且把值返回
                        // 7.2.1 获取成功回调函数的执行结果
                        const x = onFulfilled(this.value);
                        // 7.3 将执行结果传入resolvePromise 集中处理
                        resolvePromise( promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
                
                
            }
            if(this.status === REJECTED){
                try {
                    // 4.2.2 调用失败回调，并且把原因返回
                    const x = onRejected(this.reason);
                    resolvePromise( promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            }
            // 5.2 then方法中的pending的处理
            if(this.status === PENDING){
                // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
                // 等到执行成功失败函数的时候再传递
                // this.onFullfilledCallback = onFulfilled;
                // this.onRejectedCallback = onRejected;
                // 6.2 回调函数存入数组中
                onFullfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value)
                            resolvePromise( promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
                onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason)
                            resolvePromise( promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
            }
        })
        return promise2;
    }

    // 11 实现resolve和reject的静态调用
    // Promise.resolve
    static resolve (parameter) {
        if(parameter instanceof MyPromise){
            return parameter
        }
        //转成常规方式
        return new MyPromise(resolve => {
            resolve(parameter)
        })
    }

    static reject (reason) {
        if(parameter instanceof MyPromise){
            return parameter
        }
        //转成常规方式
        return new MyPromise(resolve => {
            reject(reason)
        })
    }
}




function resolvePromise(promise2, x, resolve, reject){
    /*** 8 then方法链式调用识别Promise返回的是不是自己
     * 如果then方法返回的是自己的Promise对象，则会发生循环调用，这个时候程序会报错
     *  */
    if(promise2 === x){
        return reject(new TypeError('chaining cycle detected for promise #<Promise>'))
    }
    // 7.4 判断 x 是不是 MyPromise 实例对象
    if(x instanceof MyPromise){
        // 7.5.2 如果x是MyPromise实例对象，则执行x，调用then方法；
        // 目的是将其状态变为fulfilled或者rejected
        x.then(resolve, reject)
    }else{
        resolve(x)
    }
}
// 使用module.exports对外暴露MyPromise类
// module.exports = MyPromise;


new MyPromise((resolve, reject) => {
    console.log(111)
    setTimeout(resolve(12), 1000)
}).then((value) => {
    console.log('异步处理完成，并返回结果', value)
}, (reason) => {
    console.log('异步处理失败，并返回失败原因', reason)
})