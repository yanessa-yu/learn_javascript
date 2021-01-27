var f = new Function()
//__proto__ 原型指针
//prototype原型
console.log(f.__proto__ === Function.prototype) //true
var o = new Object()
console.log(o.__proto__ === Object.prototype) //true
console.log(Function.__proto__) //ƒ () { [native code] }
console.log(Object.__proto__ === Function.prototype)
console.log(Function.prototype)//ƒ () { [native code] }
console.log(Function.prototype.__proto__  === Object.prototype)
console.log(Object.prototype.__proto__ ) //null

// 【对象的原型指针】指向【函数的原型】
// 【函数原型的原型指针】指向【对象的原型】
// 【对象的原型的原型指针】指向【null】