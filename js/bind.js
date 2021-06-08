function fun(){
    console.log(this)
    this.name = 'ysg'
    this.age = 18
    console.log(this)
    console.log(arguments)
}


var obj = {
    name: 'tgm',
    age: 12,
    city: 'sh'
}

//fun(1,3)
// fun.apply(obj,[1,2,3])
Function.prototype.myCall = function(context, args){
    if(typeof context === 'undefined' || context === null){
        context = 'undefined' !== typeof window? window : globalThis
    }
    let sb = Symbol();
    context[sb] = this
     //如果context是一个对象，则对象调用对象上的方法this指向该对象
    let fn = context[sb](args)
    return fn
}
fun.myCall(obj,1,2)

Function.prototype.myApply = function(context, args){
    if(typeof context === 'undefined' || context === null){
        context = 'undefined' !== typeof window? window : globalThis
    }
    let sb = Symbol();
    context[sb] = this
     //如果context是一个对象，则对象调用对象上的方法this指向该对象
    let fn = context[sb](...args)
    return fn
}
 // fun.myApply(obj,[1,2,3])

 Function.prototype.myBind = function(context, ...args){
    if(typeof context === 'undefined' || context === null){
        context = 'undefined' !== typeof window? window : globalThis
    }
    let self = this 
    return function(){
        return self.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
 }
 fun.myCall(obj,1,2)