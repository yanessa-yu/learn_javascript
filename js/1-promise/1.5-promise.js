/***
 * 
 * 异步编程：
 * 1、callback
 * 2、
 * 3、promise
 * promise a+ 规范
 * 4、
 * **/

let Promise = require('./1.1-promise')
let p = new Promise((resolve, reject)=>{
   setTimeout( ()=>{
    reject(123)
   }, 2000)
}).then((data)=>{
    console.log(data);
}, (err)=>{
    console.log(err)
})