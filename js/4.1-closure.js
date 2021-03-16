function A (){
    var a = 1;
    var b = 2;
    function B(){
        var aa = a + 1
        var bb = b + 1
    }
   return B
}

var f = A()
f()


console.log(0.1+0.2) //0.30000000000000004
