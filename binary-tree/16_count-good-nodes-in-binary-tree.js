// 1448. Count Good Nodes in Binary Tree

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

function pathMax(root){
    let count = 0
    let max = root.val

    function dfs(root,max){
        if(root==null) return

        if(root.data>max){
            max = root.data
            count++
        }

        dfs(root.left,max)
        dfs(root.right,max)

    }
}