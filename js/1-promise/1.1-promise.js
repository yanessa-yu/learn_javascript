/**
 * 解决异步编码风格
 * 异步回调
 * JavaScript单线程
 * 
 * 回调地狱
 * promise是一个类
 * 三个状态：
 * 等待态：padding
 * 成功态：
 * 失败态：
 * 状态不可转化：
 * 类传入一个函数作为参数，成为该函数为执行器
 * resolve、reject
 * 每个promise实例都要一个then方法， 
 * then方法两个参数 on
 * 如果new promise的时候报错了会变成失败态
 * **/

const PENDIND = 'pending'
const RESOLVED = "resolved"
const REJECT = 'reject'
class Promise {

    constructor(executor){
        this.status = PENDIND;
        //成功的值
        this.value = undefined;
        //失败的的原因
        this.reason = undefined;

        this.onresolvedcallback = [];
        this.onrejectedcallback = []

        let resolve = (value) => {
            if(this.status == PENDIND){
                this.value = value
                this.status = RESOLVED
                this.onresolvedcallback.forEach(fn=>{
                    fn()
                })
            }
        }

        let reject = (reason) =>{
            if(this.status == PENDIND){
                this.reason = reason
                this.status = REJECT
                this.onrejectedcallback.forEach(fn=>{
                    fn()
                })
            }
        }

        try{
            //默认执行器会立即执行
            executor(resolve, reject); 
        }catch(e){
            reject(e)
        }
        
    }

    then(onfulfilled, onrejected){
        if(this.status == RESOLVED){
            onfulfilled(this.value)
        }
        if(this.status == REJECT){
            onrejected(this.reason)
        }
        if(this.status == PENDIND){
            this.onresolvedcallback.push(()=>{
                onfulfilled(this.value)
            })
            this.onrejectedcallback.push(()=>{
                onrejected(this.reason)
            })
        }
    }
 }

 

 module.exports =  Promise

