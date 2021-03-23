const PENDING = 'pending'
const RESOLVED = "resolved"
const REJECT = "reject"

//因为所有的promise都遵循这个规范，所以
const resolvePromise = (promise2, x, resolve, reject) => {
   //判断X的值
   if(promise2 === x){ //此时会出现死循环，promise2不能return promise2
       return reject(new TypeError('promise2不能返回promise2'))
   }
   //判断数据类型 typeof contructor instanceof toString
   if(typeof x === 'object' && typeof x !== null || typeof x === 'function'){
        let called = false;
        try {
            let then = x.then
            if(typeof then === 'function'){ //认为它是promise
                then.call(x, yes=>{
                    if(called){
                        return
                    }
                    called = true
                    // resolve(yes) //如果yes还是一个promise
                    resolvePromise(promise2, yes, resolve, reject)
                }, no =>{
                    if(called){
                        return
                    }
                    called = true
                    reject(no)
                })
            }else{ 
                resolve(x)
            }
        }catch (e){
            if(called){
                return
            }
            called = true
            reject(e)
        }
   }else{
       // x是一个普通值
       resolve(x)
   }
}
class Promise{
    constructor(executor){
        this.status = PENDING;
        this.value = undefined;
        this.error = undefined;
        this.onfulfilledcallback = []
        this.onrejectedcallback = []

        let resolve = (value) =>{
            if(this.status == PENDING){
                this.status = RESOLVED
                this.value = value
                this.onfulfilledcallback.forEach(fn=>{
                    fn()
                })
            }
        }

        let reject = (error) => {
            this.status = REJECT
            this.error = error
            this.onrejectedcallback.forEach(fn=>{
                fn()
            })
        }

       try {
            executor(resolve, reject);
       } catch (error) {
           reject(error)
       }
    }

    then(onfulfilled, onrejected){
      
       //同步的情况
       //同步时resolve在then前面执行
        if(this.status == RESOLVED){
            onfulfilled(this.value)
        }
        if(this.status == REJECT){
            onrejected(this.error)
        }
        //异步的情况
        //异步时then在resolve前面执行
        if(this.status == PENDING){
            this.onfulfilledcallback.push(()=>{
                onfulfilled(this.value)
            })
            this.onrejectedcallback.push(()=>{
                onrejected(this.error)
            })
        }
    }

    //链式
    // 1、判断成功和失败函数的返回结果
    // 2、判断是不是promise，就采用他的状态
    // 3、如果不是promise
    then2(onfulfilled, onrejected){
        //onfulfilled, onrejected是可选参数
       onfulfilled = typeof onfulfilled === 'function'? onfulfilled: data => {
           return data
       }
       onrejected = typeof onrejected === 'function'?onrejected : err => {
           throw err
       }
        //同步的情况
       //同步时resolve在then前面执行
       let promise2 = new Promise((resolve, reject)=>{
            if(this.status === RESOLVED){
                setTimeout(() => {
                    try {
                        let x = onfulfilled(this.value)
                        // x可能是普通值，也可能是promise
                        // 此处使用promise2，需要使用异步的方式
                        // 加定时器后，异步代码没办法被外部try-catch捕获

                        resolvePromise( promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                },  0)
               
            }
            if(this.status === REJECT){
                setTimeout(() => {
                   try {
                        let x = onrejected(this.error)
                   } catch (error) {
                       reject(error)
                   }
                }, 0);
            }
            //异步的情况
            //异步时then在resolve前面执行
            if(this.status === PENDING){
                this.onfulfilledcallback.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise( promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
                this.onrejectedcallback.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.error)
                            resolvePromise( promise2, x, resolve, reject)
                        } catch (error) {
                            console.log("异步出错")
                            reject(error)
                        }
                    }, 0);
                })
            }
       })
       
        return promise2
    }
}

const isPromise = (value) => {
    if((typeof value === 'object' && value !== null) || typeof value === 'function' ){
        if(typeof value.then === 'function'){
            return true
        }
    }
    return false
}

Promise.prototype.finally = function(cb){
    return p.then(data => {
        Promise.resolve(cb()).then(()=>data)
    }, err => {
       Promise.resolve(cb()).then(()=> {
           throw err
       })
       throw err
    })
}

Promise.all = function(values){
    return new Promise((resolve, reject)=>{
        let arr = []
        let index = 0 
        function processData(key, value){
            arr[key] = value
            if(++index === values.length){
                resolve(arr)
            }
        }
        
        for(let i=0; i<values.length;i++){
            let current = values[i]
            if(isPromise(current)){
                current.then((data)=>{
                    processData(i,data)
                }, reject);
            }else{
                processData(i,current)
            }
        }
    })
}

Promise.all([1,2]).then((data)=>{
    console.log(data)
})


let p = new Promise(function(resolved, reject){
    setTimeout(() => {
        resolved('成功')
    }, 1000);
})

p.then2((data) =>{
    console.log('1是一个字符串：', data)
    return new Promise((resolve, reject) =>{
        resolve(123)
    });
}).then2((data)=>{  //订阅，先订阅再发布
   console.log('2是一个promise',data)
   return ()=>{
       console.log("函数输出")
   }
}, (error) => {
    console.log('---', error)
}).then2(data => {
    console.log('3是一个函数', data)
}).then2(data => {
    console.log(4, data)
})