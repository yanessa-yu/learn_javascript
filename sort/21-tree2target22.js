var arr = new Array()
var arrs = []
function tree2target22(root, target){
    if(root == null){
        return new Array()
    }else{
        arr.push(root.val)
        if(root.val == target){
            var arr1 = arr.concat()
            arrs.push(arr1)
        }
        tree2target22(root.left, target)
        tree2target22(root.right, target)
        arr.pop()
        return arrs
    }
}

var tree = {
    val : 1,
    left : {
        val : 2,
        left : {
            val : 3,
            left : null,
            right: null
        },
        right: {
            val : 4,
            left : null,
            right: null
        }
    },
    right: {
        val : 5,
        left : {
            val : 22,
            left : null,
            right: null
        },
        right: {
            val : 6,
            left : null,
            right: {
                val: 22,
                left: null,
                right: null
            }
        }
    }
}
var result = tree2target22(tree, 22)
console.log(result)