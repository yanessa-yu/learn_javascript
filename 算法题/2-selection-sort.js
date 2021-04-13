// //选择排序

// //每次循环找到最小的一个
// function selectionSort(arr){
//     var len = arr.length
//     var minIndex, temp;
//     for(i=0;i<len-1;i++){
//        //第1次循环，比较9次，将1放到第1位；1-2,1-3,1-4,1-5,1-6,1-7,1-8,1-9,1-10
//        //第2次循环，
//         minIndex = i;
//         for(j=i+1; j<len; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp
//         console.log(arr.join(','))
//     }
    
//     return arr;
// }

// var testArr = [9,8,7,6,5,4,3,2,1]
// selectionSort(testArr)





function swap (arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function getMinPosition(arr, mixPosition){
    for(var j=mixPosition + 1; j<arr.length;j++ ){
        if(arr[j] < arr[mixPosition]){
           swap(arr, mixPosition, j)
        }
    }
}

//简单排序1：选择排序 每次选择最小的那个数，放到指定的位置上
function selectionSort(arr){
    for(var i=0; i<arr.length;i++){
        getMinPosition(arr, i);
    }
}

//简单排序2：冒泡排序，前后两两对比，如果前一个大于后一个，就交换
function bubble(arr,max){
    for(var j=0; j<max; j++){
        if(arr[j] > arr[j+1]){
            swap(arr, j, j+1)
        }
    }
}

function bubbleSort(arr){
    for(var i=arr.length - 1; i>0; i--){
        bubble(arr, i)
    }
}

//简单排序3：插入排序，
function insert(arr, targetPos){
    for(j=0;j<targetPos;j++){
        if(arr[j] > arr[targetPos]){
            swap(arr, targetPos, j);
        }
    }
}

function insertSort(arr){
    for(var i=0; i<arr.length; i++){
        insert(arr, i)
    }
}

//希尔排序

//归并排序，利用递归的思想
function merget(){
    //合并两个已经排序好的子数组
    var arr = [2,4,6,8,1,3,5]
    //获取中间位置
    var midPos = Math.floor(arr.length / 2)
    console.log(midPos)
    //定义一个新的数据
    var tempArr = new Array(arr.length);
    //定义三个指针，
    //第一个指针指向子数组1的起始位置
    //第二个指针指向子数组2的起始位置
    //第三个指针指向新数组的起始位置
    var i = 0, j = midPos + 1, k = 0;
    while(i <= midPos && j < arr.length){
        if(arr[i] <= arr[j]){
            tempArr[k] = arr[i];
            i++
            k++
        }else{
            tempArr[k] = arr[j]
            j++
            k++
        }
    }
    while(i<=midPos){
        tempArr[k] =  arr[i]
        i++
        k++
    }
    while(j < arr.length){
        tempArr[k] = arr[j]
        j++
        k++
    }
    console.log(tempArr)
}

var arr = [5,4,2,7,1,9,3,6,8]
merget(arr)

console.log(arr)




