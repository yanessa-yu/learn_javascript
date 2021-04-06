//js利用高阶函数实现函数缓存（备忘模式）
function cacheFunction(fn){
    let caches = {}
    //扩展运算符(...): 将一个数组转化为用逗号分割的参数序列
    return function(...args){
        let _args = JSON.stringify(args)
        if(!caches[_args]){
            caches[_args] = fn.apply(fn,args)
        }
        return caches[_args];
    }
}

function add(a,b){
    return a+b;
}

let result = cacheFunction(add)(2,3)
console.log(result)