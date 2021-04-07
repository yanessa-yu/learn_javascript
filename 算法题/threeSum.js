var arr = [6,4,1,7,0,3,2,8,9]
var arrSort = arr.sort()
var n = 3
var maxIndex;
for(let i=0;i<arrSort.length;i++){
    if(arrSort[i] >= n){
        maxIndex = i;
        break;
    }
}
console.log(arrSort)
for(let i=0;i<maxIndex;i++){
    for(let j=maxIndex -1 ;j>0;j--){
        var oneNum = arrSort[i]
        var twoNum = arrSort[j]
        if( oneNum + twoNum > n){
            continue
        }else{
            var threeNum = n - oneNum - twoNum
            var threeIndex = arrSort.indexOf(threeNum)
            if(threeIndex >= 0 && threeIndex !== i && threeIndex !== j && i !== j){
                console.log(i,j,threeIndex)
               console.log( [oneNum, twoNum, threeNum])
            }
        }
        
    }
}