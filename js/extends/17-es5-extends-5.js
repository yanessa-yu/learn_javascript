/**
 *  对象冒充的弊端是：必须使用构造函数
 *  原型链的弊端是：1、无法使用带参数的构造函数；2、不能实现多重继承
 *  创建类最好的方式是：用构造函数定义属性，用原型定义方法
 *  这种方式同样适用于继承机制
 *  用对象冒充继承构造函数的属性
 *  用原型链继承prototype对象的方法
**/


function Parent(name){
    this.name = name
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(name){
    Parent.call(this, name)
}
Child.prototype = Object.create( Parent.prototype)
Child.prototype.constructor = Child

 var objB = new Child('ysg')
 objB.getName();
