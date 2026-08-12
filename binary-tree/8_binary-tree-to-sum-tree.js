import rootNode from "./basics.js";

function sumTree(root){
    if(root == null) return 0

    let leftSumTree = sumTree(root.left)
    let rightSumTree = sumTree(root.right)

    root.data = root.data + leftSumTree + rightSumTree

    return root.data
}

console.log(rootNode)

sumTree(rootNode)

console.log(rootNode)