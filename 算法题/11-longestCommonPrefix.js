/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var returnStr = ""
    for(j=0; j<strs[0].length;j++){
        var innerFlag = true
        for(var i=0; i<strs.length - 1; i++){
             var str1 = strs[i]
             var str2 = strs[i+1]
             if(str1[j] != str2[j]){
                 innerFlag = false
             }
        }
        if(innerFlag){
            returnStr = returnStr + strs[0][j]
             console.log(returnStr)
        }else{
            break;
        }

    }
     return returnStr;
};

var s = longestCommonPrefix(["flower","flow","flight"])
console.log(s)