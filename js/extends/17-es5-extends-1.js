/**
 * https://www.w3school.com.cn/js/pro_js_inheritance_implementing.asp
 *  对象冒充 / 借助构造函数
 *  原理：构造函数classA使用this关键字给所有属性和方法赋值
 *          即采用类声明的构造函数方式
 *        因为构造函数只是一个函数，所以可以使该构造函数classA成为classB的方法，
 *          然后调用它，
 *      classB就会得到构造函数classA中定义的属性和方法
 **/

 function ClassA(sColor){
     this.color = sColor;
     this.getColor = function(){
         console.log(this.color)
     }
 }

 function ClassB(sColor, sName){
     this.newMethod = ClassA
     this.newMethod(sColor)
     delete this.newMethod;

     this.name = sName;
     this.getName = function(){
         console.log(this.name)
     }
 }

 var objA = new ClassA('red')
 var objB = new ClassB('blue', 'ysg')
 objA.getColor();
 objB.getColor();
 objB.getName()

/***
 * 对象冒充可以实现多重继承，也就是说，一个类可以继承多个超类
 * **/