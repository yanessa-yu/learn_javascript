//选择排序

//每次循环找到最小的一个
function selectionSort(arr){
    var len = arr.length
    var minIndex, temp;
    for(i=0;i<len-1;i++){
       //第1次循环，比较9次，将1放到第1位；1-2,1-3,1-4,1-5,1-6,1-7,1-8,1-9,1-10
       //第2次循环，
        minIndex = i;
        for(j=i+1; j<len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
        console.log(arr.join(','))
    }
    
    return arr;
}

var testArr = [9,8,7,6,5,4,3,2,1]
selectionSort(testArr)