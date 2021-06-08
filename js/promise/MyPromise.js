function MyPromise(executor){
    var onResolve_ = null
    var onReject_ = null
    this.then = function(onResolve, onReject){
        onResolve_ = onResolve
    }
    function resolve(value){
        // 异步调用回调函数
        queueMicrotask(function(){
            onResolve_(value)
        })
    }
    executor(resolve, null)
}

var p = new MyPromise(function(resolve,reject){
    resolve(100)
})
p.then(function(value){
    //console.log(value)
})


async function asyncFun1(){  
    console.log('async start'); 
    let resultFun1 =  await asyncFun2()
    console.log(resultFun1)
    let resultFun2 = await asyncFun3()
    console.log(resultFun2)
    console.log('async end')
 }
 
 async function  asyncFun2(){ 
     console.log('async await1');  
     queueMicrotask(()=>{
         console.log(123)
     })
     return (function(){
        console.log(345)
        return 11
    })()
 }
 
 async function asyncFun3(){ 
     console.log('async await2')
 }
 
 
 new Promise((reslove)=>{ 
     console.log('promise start') 
     reslove() 
 }).then(()=>{
     console.log('promise then1')
 }).then(()=>{
     console.log('promise then2')
 }).then(()=>{
     console.log('promise then3')
 })
 
 asyncFun1()  