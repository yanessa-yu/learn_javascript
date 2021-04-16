function funA(){
    console.log(1)
}

module.exports.funA = funA

function funAAA(){
    console.log(111)
}
module.exports.funAAA = funAAA

var b = require('./b.js')
console.log('已经加载完成的b模块')
console.log(b)
console.log('--------------------------------')

function funAAAAAA(){
    
}
module.exports.funAAAAAA = funAAAAAA

b.funB()
