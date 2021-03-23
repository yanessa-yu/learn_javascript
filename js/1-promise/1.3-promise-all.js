Promise.all2 = function(promises){
    return new Promise((resolve, reject)=>{
        var len = promises.length
        var results = new Array(len)
        var i = 0
        promises.forEach(promise => {
            promise.then((data)=>{
                results[i] = data
                i = i + 1
                if(i == len){
                    resolve(results)
                }
            },(reason)=>{
                return reject(reason)
            })
        });
    })
}

var p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve('promise 1')
    } , 1000)
})

var p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('promise 2')
    }, 2000)
})

console.time('cost')
Promise.all2([p1, p2]).then((res)=>{
    console.log(res)
    console.timeEnd('cost')
})


