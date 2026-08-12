class Node {
    constructor(val,left,right){
        this.val = val
        this.right = right
        this.left = left
    }
}

function sortedArrayToBalancedBST(arr,st,end){

    if(st>end) return null

    let mid = Math.floor(st + (end - st)/2)

    let root = new Node(arr[mid])
    root.left = sortedArrayToBalancedBST(arr,st,mid-1)
    root.right = sortedArrayToBalancedBST(arr,mid+1,end)

    return root
}

let arr  = [-10,-3,0,5,9]

console.log(sortedArrayToBalancedBST(arr,0,arr.length))