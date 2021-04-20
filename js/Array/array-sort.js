var arr = [4,6,100,2,9,1]
console.log(arr.sort())
var arrSort = arr.sort(function(a,b){
    return a - b
})
console.log(arrSort)