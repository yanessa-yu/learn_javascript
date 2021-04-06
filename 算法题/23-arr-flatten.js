
/**
 * 数组扁平化处理：实现一个flatten方法，
 * 使得输入一个数组，该数组里面的元素也可以是数组，
 * 该方***输出一个扁平化的数组。
 * 
 * 数组扁平化是指讲一个多维数组变成为一维数组
 * **/
var lastArr = []

function flatten1(arr){
    arr.forEach(element => {
        //if(Array.isArray(element)){
        if(element instanceof Array){
            flatten1(element)
        }else{
            lastArr = lastArr.concat(element)
        }
    });
    return lastArr;
}


function flatten2(arr){
    var str = arr.toString();
    return str.split(',').map(function(element){
        return Number(element)
    })
}

function flatten3(arr){
    console.log(arr.join(','))
}

/**使用generator生成器函数**/

function* iterArr(arr){
    if(Array.isArray(arr)){
        for(let i=0;i<arr.length;i++){
            yield* iterArr(arr[i])
        }
    }else{
        yield arr;
    }
}

function flatten4(arr){
    var iter = iterArr(arr)
    for(var x of iter){
        console.log(x)
    }
}

var arr = [1, [2, 3, [4, 5]]];
var arrLast = flatten1(arr)
console.log(arrLast)