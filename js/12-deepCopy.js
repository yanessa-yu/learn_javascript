var obj = {
    name: 'ysg',
    age:18,
    walk: function(){
        return 'walk'
    }
}

function objFun(){
    return obj
}


var a = new objFun()
a.name = 'tgm'

var b = objFun()
b.name = 'yft'

console.log(a)
console.log(b)