var x = 11;
var b = require('./b') 
console.log('a调用b',b)
var y = 22;
var z = 33
b.fun()
module.export = {x,y,z}

