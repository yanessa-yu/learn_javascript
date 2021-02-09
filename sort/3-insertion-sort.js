//插入排序
 function insertionSort(arr){
     var len = arr.length
     var temp , preIndex
     //第1次循环；比较1次，     1-0 
     //第2次循环，比较2次， 2-1,2-0
     for(var i=1; i<len;i++){
        current = arr[i]
        preIndex = i - 1
        while(preIndex >= 0 && arr[preIndex] > current ){
            arr[preIndex + 1] = arr[preIndex]
            preIndex --
        }
        arr[preIndex + 1]  = current //如果while不满足, 即是arr[i] = current
        console.log(arr.join(',')) 
     }
 }



var testArr = [9,8,7,6,5,4,3,2,1]
insertionSort2(testArr)

function insertionSort2(arr){
    /***
     * 1、将待排序序列的第一个元素看做一个有序序列
     * 2、把第二个元素到最后一个元素当做是未排序序列
     * 
     **/
    var arrLen = arr.length
    //从头到尾依次扫描未排序序列
    //该未排序序列是从第二个元素到最后一个元素
     for(var i=1;i<arrLen;i++){
         var j = i-1
         var current = arr[i]
         while(j>=0 && arr[j] > current){
                arr[j+1] = arr[j]
                j --
         }
        arr[j+1] = current
        console.log(arr.join(','))
     }
}