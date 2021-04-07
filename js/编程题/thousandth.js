function thousandth(num){
    if(num.length <= 3){
        return num;
    }
    var str = num.toString()
    var result = '';
    function sliceStr(start,end){
        var s = str.substring(start, end)
        result = ',' + s + result
        if(start >= 1){
            sliceStr(start - 3, end -3 )
        }
    }
    var end = str.length 
    var start = end - 3
    sliceStr(start, end)
    if(result.charAt(0) === ','){
        return result.substr(1)
    }
    return result;
}

var num = 1234567890123;
console.log(thousandth(num))