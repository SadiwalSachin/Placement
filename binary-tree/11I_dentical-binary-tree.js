function identicalBinaryTree(p,q){
    if(p ==  null && q == null) return true
    if(p == null || q == null) return p==q

    let leftIdentical = identicalBinaryTree(p.left,q.left)
    let rightIdentical = identicalBinaryTree(p.right,q.right)

    return leftIdentical && rightIdentical && p.data == q.data
}