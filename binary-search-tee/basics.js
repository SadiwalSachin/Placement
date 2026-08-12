// How to build a BST

let arr  = [3,2,1,5,6,4]

class Node {
    constructor(val,left,right){
        this.val = val;
        this.left = left
        this.right = right
    }
}

function buildBST(root,val){
    if(root==null){
        return new Node(val)
    }

    if(root.val < val){
       root.right = buildBST(root.right,val)
    } else {
       root.left = buildBST(root.left,val)
    }

    return root
}

let root  = null

for(let val of arr){
    root  = buildBST(root,val)
}

console.log(root)


function searchInBST(root,val){
    if(root==null){
        return false
    }
    if(root.val==val){
        return true
    }

    if(root.val > val){
        return searchInBST(root.left,val)
    }else{
        return searchInBST(root.right,val)
    }
}

console.log(searchInBST(root,3))