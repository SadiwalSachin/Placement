function minDepth(root){
    if(root==null) return 0

    let leftDepth = minDepth(root.left)
    let rightDepth = minDepth(root.right)

    return Math.min(leftDepth,rightDepth) + 1
}