
    //闭包的特性
    //1、闭包使得外部可以访问函数内部变量
    //2、局部变量会常驻内存中
    //闭包的应用场景
    //应用场景1：setTimeOut的第一个参数是一个函数，这个函数是不能传递参数的
    //通过闭包可以实现参数的传递
    function fun1(param1){
        return function(){
            console.log(param1)
        }
    }
    var f1 = fun1(1)
    setTimeout(f1,100);
    //应用场景2：封装私有变量
    function fun2(){
        var sum = 0;
        var obj = {
            inc: function(){
                sum ++ ;
                return sum;
            }
        }
        return obj;
    }
    var f2 = fun2()
    console.log(f2.inc())
    console.log(f2.inc())
    console.log(f2.inc())
    //应用场景3：函数防抖
    
