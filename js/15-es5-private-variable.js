//使用es5实现私有变量
//利用闭包实现
/***
 * 什么是私有变量？
 * 只能被本类中的函数引用的成员
 * 
 * 局部变量：只能在函数体内被访问， 后代不能访问局部变量
 * 私有变量：后代可以访问
 * **/

function classFun(){
    
    var _name; //局部变量
    this.getName = function(){ //内部函数
        return _name
    }
    this.setName = function(name){
        _name = name
    }
}

var obj = new classFun()
obj.setName('ysg')
console.log(obj.getName())
console.log(obj._name)
