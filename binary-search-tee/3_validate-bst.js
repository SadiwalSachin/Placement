// 98. Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


function isValidBST(root){
    return helper(root,null,null)    
}

function helper(root,min,max){
    if(root == null) return true

    if(min != null && root.val<= min.val) return false // case of right sub tree

    if(max != null && root.val >= max.val) return false // left subtree

    return helper(root.left,min,root) && helper(root.right,root,max)
}

