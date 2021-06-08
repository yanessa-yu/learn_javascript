//一个Promise必然处于一下三种状态之一
const PENDING = 'PENDING'; //待定，初始状态
const FULLFILLED = 'FULLFILLED'; //已兑现，操作完成
const REJECTED = 'REJECTED'; //已拒绝，操作失败

//一个Promise方法接受一个函数作为参数，该函数称之为处理器函数
class Promise {
      //构造函数
    constructor(executor){
        //处理器函数接受两个参数，这两个参数都是函数
        //参数1
        
        this.status = PENDING;
        this.value = undefined;
        this.error = undefined;
        this.fullfillArr = []
        this.rejectArr = []


        //当异步任务执行完成，会调用resolve方法
        let resolve = (value) => {
            if(this.status == PENDING){
                this.status = FULLFILLED
                this.value = value
                this.fullfillArr.forEach(fn => {
                    fn(this.value)
                });
            }
        }

        //当异步任务执行失败，会调用reject方法
        let reject = ( error) => {
            if(this.status == PENDING){
                this.status = REJECTED;
                this.error = error
                this.rejectArr.forEach(fn => {
                    fn(this.error)
                })
            }
        }

        executor(resolve, reject)

    }

    then(fullfill, rejected){
        //then返回的是一个Promise
        let p2 = new Promise((resolve, reject)=>{
            //如果Promise封装的异步任务执行完成，则调用回调函数fullfill
            if(this.status == FULLFILLED){
                let result = fullfill(this.status)
                 resolvePromise(p2,result,resolve,reject)
            }

            //如果Promise封装的异步任务执行失败，则调用回调函数rejected
            if(this.status == REJECTED){
                let result = rejected(this.error)
                 resolvePromise(p2,result,resolve,reject)
            }

            //如果Promise封装的异步任务还在执行中，则将回调任务推入到延迟队列中
            if(this.status == PENDING){
                this.fullfillArr.push((value)=>{
                    let result = fullfill(value)
                     resolvePromise(p2,result,resolve,reject)
                })

                this.rejectArr.push((error)=>{
                    let result = rejected(error)
                     resolvePromise(p2,result,resolve,reject)
                })
            }
        })
        return p2;
        
    }
}


let  resolvePromise = (p2, result, resolve, reject) => {
    if(result === p2){
       return reject(TypeError('promise2不能返回promise2')
    }
}

let p = new Promise(function(resolve){
    setTimeout(function(){
        resolve(1)
    }, 1000)
})

p.then((value)=>{
    console.log(1,value)
}, (error)=>{
    console.log(2,error)
})