var obj = {
    name: 'ysg',
    age:18,
    walk: function(){
        return 'walk'
    },
    arr: [1,2,3,4],
    obj: {
        a: 1,
        b: 2,
        c: 3
    }
}

function deepCopy(obj){
    var result;
    if(obj instanceof Array){
        result = [];
        obj.forEach(function(element){
            result.push(deepCopy(element))
            
        })
    }else if (obj instanceof Object){
        result = {}
        Object.keys(obj).forEach(function(key){
            var element = obj[key]
            result[key] = deepCopy(element)
           
        })
    }else{
        result = obj
    }

   
   return result
}

var objCopy = deepCopy(obj)
console.log(objCopy)
