// await 后面的是
function awaitFun1(){
    console.log('awaitFun1 输出')
    return 222
}



async function asyncFun1(){
    console.log('async start')
    var returnFun1 = await new awaitFun1()
    console.log('awaitFun1 返回', returnFun1)
}

new Promise((resolve, reject) => {
    console.log('promise start')
    resolve()
}).then(()=>{
    console.log('promise then1 输出')
})

asyncFun1()