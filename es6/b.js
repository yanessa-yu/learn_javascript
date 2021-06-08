var xx = 11
console.log(xx)
import {x,y} from './a.js'
function fun(){
    console.log('this is b module fun method')
}
var yy = 22
console.log(yy)

export {xx,yy,fun}