let fs = require('fs')

/**
 * 实现1
 * 缺点1：暴露了一个变量school
 * 缺点2：每个异步方法内部都需要调用一下out方法
 */
// let school = {}

// function out(){
//     if(Object.keys(school).length ==2 ){
//         console.log(school)
//     }
// }


/**
 * 实现2
 * **/

function after(times,cb){
    let school = {}
    return function(key, value){
        school[key] = value
        if(--times == 0){
            cb(school)
        }
    }
}

let out = after(2, function(result){
    console.log(result)
})

fs.readFile('./js/18-/name.txt','utf8',function(err,data){
    out('name',data)
})

fs.readFile('./js/18-/age.txt','utf8',function(err,data){
    out('age',data)
})