// Depth of binary tree , Maximum Depth of Binary Tree

function heightOfTree(node) {
    if(node==null) return 0
    let leftHeight = heightOfTree(node.left)
    let rightHeight = heightOfTree(node.right)

    return Math.max(leftHeight,rightHeight) + 1
}