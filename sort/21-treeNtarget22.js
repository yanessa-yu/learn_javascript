var arr = new Array()
var arrs = []
function treeNtarget22(root, target){
    if(root == null){
        return new Array()
    }else{
        arr.push(root.val)
        var children = root.children
        for(var i=0; i<children.length; i++){
            if(children[i].val == target){
                var arr1 = arr.concat()
                arrs.push(arr1)
            }
            treeNtarget22(children[i], target)
        }
       
        arr.pop()
        return arrs
    }
}

var tree = {
    val: 1,
    children: [
        {
            val:2,
            children: [
               {
                   val: 5,
                   children:  [
                       {
                         val: 6,
                         children: null
                       },
                       {
                           val: 22,
                           children: [
                              {
                                val : 7,
                                children: null,
                              }
                           ]
                       }
                   ]
               }
            ]
        },
        {
            val: 3,
            children: null
        },
        {
            val: 4,
            children: [
                {
                    val: 22,
                    children: null
                }
            ]
        }
    ]
}
var result = treeNtarget22(tree, 22)
console.log(result)