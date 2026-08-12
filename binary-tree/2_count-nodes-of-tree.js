function countNodesOfTree(node){
    if(node==null) return 0
    let leftCount = countNodesOfTree(node.left)
    let rightCount = countNodesOfTree(node.right)
    return leftCount+rightCount+1
}