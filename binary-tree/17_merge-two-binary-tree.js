// 617. Merge Two Binary Trees

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

function mergeTrees (root1,root2){
    let root = null

    function helper(root1,root2,root){
        if(root1==null && root2==null){
            root.val = null
            return
        }

        if(root1==null && root2 !=null){
            root.val = root2.val
        } 

        if(root1 !=null && root2 == null){
            root.val = root1.val
        }

        if(root1 !=null && root2 != null){
            root.val = root.val + root2.val
        }

        root.left = helper(root1.left, root2.left , root)
        root.left = helper(root1.right,root2.right,root)

        return root
    }
}