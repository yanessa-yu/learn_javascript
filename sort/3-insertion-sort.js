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
insertionSort(testArr)