var obj = {
    a: 1
}

var init_a = null
Object.defineProperty(obj,'a',{
    get(){
        console.log(1,'get')
        return init_a
    },
    set(val){
            console.log(2,'set')
            init_a = val
        
    }
})

obj.a = 111
console.log(obj.a)


var arr = [1,2,3]
var init_0 = null
Object.defineProperty(arr,'0',{
    get(){
        console.log(123)
        return init_0;
    },
    set(val){
        console.log(321)
        init_0  = val //RangeError: Maximum call stack size exceeded
        
    }
})

arr[0] = 111
console.log(arr[0])