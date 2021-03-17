
var x = 11;
var o = {
     x : 22,
     f : ()=> {
        var x = 33
        console.log(this)
        console.log(this.x)
    },

     f2: function(){
        var x = 44
        console.log(this)
        console.log(this.x)
        }
}

o.f()
o.f2()

