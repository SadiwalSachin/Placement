function lowestCommonAncestor(root, p, q) {
    if(root==null) return null

    if(root.val==p || root.val==q){
        return root
    }

    let leftLCA = lowestCommonAncestor(root.left,p,q)
    let rightLCA = lowestCommonAncestor(root.right,p,q)

    if(leftLCA && rightLCA){
        return root
    }else if(leftLCA != null){
        return leftLCA
    }else {
        return rightLCA
    }
}