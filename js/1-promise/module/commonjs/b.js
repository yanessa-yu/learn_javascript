function funB (){
    console.log('已经加载完成的a模块')
    console.log(a);
    console.log('-------------------------------------------')
}

module.exports.funB = funB;
var a = require('./a.js')

console.log('循环引用时，未加载完的a模块')
console.log(a)
console.log('-----------------------------------')