function getIntersection(){
    var arr = []
    for(var i=0;i<arguments.length;i++){
        arr[i] = arguments[i].sort()
    }
    var maxLeft = arr[0][0]
    var minRight = arr[0][1];
    for(var j=1;j<arr.length;j++){
        if(arr[j][0] > maxLeft){
            maxLeft = arr[j][0]
        }

        if(arr[j][1] < minRight){
            minRight = arr[j][1]
        }
        
    }
    if(maxLeft < minRight){
        return [maxLeft, minRight];
    }else{
        return null
    }
}

var result = getIntersection([5,2], [4,9], [3,6])
console.log(result)