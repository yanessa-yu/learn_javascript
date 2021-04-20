var a = [1,2,3,4,5]
a.fill(6)
console.log(a)
a.fill(7,2,4)
console.log(a)

//递归的方式实现fill
Array.prototype.fill2 = function(value, start, end){
    if(!start){
        start = 0;
    }
    if(!end){
        end = this.length - 1
    }
    for(var i=start; i<=end; i++){
        this[i] = value
    }
}

a.fill2(8,3,3)
console.log(a)


Array.prototype.fill3 = function(value, start, end){
    if(!start){
        start = 0;
    }
    if(!end){
        end = this.length - 1
    }
    var arr1 = this.slice(0,start)
    var arr2 = this.slice(start, end + 1)
    var arr3 = this.slice(end + 1, this.length )
    console.log(arr1, arr2, arr3)
     arr22 = new Array(arr.length)
}

a.fill3(9)