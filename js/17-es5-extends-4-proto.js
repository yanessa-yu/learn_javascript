/**
 * 原型链实现继承
 * /将classB的prototype属性设置为classA的实例
 * 弊端：1、原型链继承不支持多重继承
 *       2、无法使用带参数的构造函数
 * **/

 function ClassA(){

 }
 
 ClassA.prototype.color = 'red'
 ClassA.prototype.getColor = function(){
     console.log(this.color)
 }


 function ClassB(){
    
 }

 //将classB的prototype属性设置为classA的实例
 ClassB.prototype = new ClassA()

 ClassB.prototype.name = ''
 ClassB.prototype.getName = function(){
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



 function A(){
    
 }

 A.prototype.getName = function(){
    console.log('ysg')
 }

 function B(){
   
 }

 B.prototype = new A()
 
 var b = new B()
 b.getName()