/**
 *  对象冒充的弊端是：必须使用构造函数
 *  原型链的弊端是：1、无法使用带参数的构造函数；2、不能实现多重继承
 *  创建类最好的方式是：用构造函数定义属性，用原型定义方法
 *  这种方式同样适用于继承机制
 *  用对象冒充继承构造函数的属性
 *  用原型链继承prototype对象的方法
**/


function ClassA(sColor){
    this.sColor = sColor
}

ClassA.prototype.getColor = function(){
    console.log(this.color)
}

function ClassB(sColor, sName){
    ClassA.call(this, sColor)
    this.name = sName
}

ClassB.prototype = new ClassA()
ClassA.prototype.getName = function(){
    console.log(this.name)
}


var objA = new ClassA()
 var objB = new ClassB()
 objA.color = 'red'
 objB.color = 'blue'
 objB.name = 'ysg'
 objA.getColor();
 objB.getColor();
 objB.getName()