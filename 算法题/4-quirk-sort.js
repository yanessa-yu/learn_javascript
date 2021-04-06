function swap(arr, left, right){
    var temp ;
    if(left < right){
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }
}

function partition(arr, left, right){
    //指定基准元素
    var pivot = arr[left]; //向下取整
   
    //指针交换法
    while(left < right){
        while(left < right && arr[right] > pivot){
            right = right - 1
        }
        while(left < right && arr[left] < pivot){
            left = left + 1
        }
        swap(arr, left,right)
    }
    return left;
}
function quickSort(arr,left,right){
   
    // 根据基准元素，分成两部分递归排序
    if(left < right){
        var pivotIndex = partition(arr,left,right)
        quickSort(arr,left, pivotIndex );
        quickSort(arr,pivotIndex  + 1, right)
    }
    return arr
}



var arr = [9,2,7,4,5,6,3,8,1]
var lastArr = quickSort(arr, 0, arr.length - 1)
console.log(arr)
