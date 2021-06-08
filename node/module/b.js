var xx = 111;
var a = require('./a')
console.log('b调用a',a)
var yy = 222;
var zz = 333;

function fun(){
    console.log('this is b module fun method')
}
module.exports = { xx,yy,zz,fun }
