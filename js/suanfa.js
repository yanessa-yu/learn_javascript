
var left = 0
function fun(initArr,arr, num){
    var len = arr.length
    var mid = left + parseInt(len/2)
    console.log(initArr[mid],mid)
    if(num == initArr[mid]){
        return result
    }else if(num < initArr[mid] ){
        var arrL = arr.slice(0,mid)
        if(arrL.length == 0){
            return left - 1
        }else{
           return fun(initArr,arrL, num)
        }
    }else{
        var arrR = arr.slice(mid + 1, len)
        if(arrR.length == 0){
            return left + 1
        }else{
            left = mid
            console.log(left)
            return fun(initArr,arrR, num)
        }
    }
}

var arr = [1,3,5,9,11]
var num = 10
console.log(fun(arr,arr, num))
