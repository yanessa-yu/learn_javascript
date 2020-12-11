function fun(){
    console.log(1);
}

console.log([].shift.call([fun,123])) 
console.log([fun,123].shift())


function Person(name){
    this.name = name
}

Person.prototype.sayName = function(){
    console.log(this.name)
}

function New(){
    //1、创建一个空对象
    var obj = {}
    //2、将obj的原型指针指向构造函数的原型
    //2、1 先获取传递的构造函数
    var Fun = [].shift.call(arguments)
    obj.__proto__ = Fun.prototype
    //3、将构造函数内部this指向对象obj
    Fun.apply(obj, arguments)
    //4、返回该对象
    return obj;
}

var o = New(Person,'ysg')
o.sayName()