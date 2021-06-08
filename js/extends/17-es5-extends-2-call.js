function A(name){
    this.name = name
    this.getName = function(){
        console.log(this.name)
    }
}

function B(name){
    console.log(this)
    A.call(this, name)
}

var b = new B('ysg')
b.getName()
