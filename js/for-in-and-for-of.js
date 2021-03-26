var arr = [
    {a:1},
    {b:2},
    {c:3}
]

console.log('数组的迭代器',arr[Symbol.iterator])

for(var i in arr){
    console.log(i);
    
}

for (var j of arr) {
    console.log(j);
    
}


var obj = {
    a: 11,
    a: 22,
    a: 33
}

console.log('对象的迭代器',obj[Symbol.iterator])

//为对象自定义迭代器




for(var ii in obj){
    console.log(ii)
}

