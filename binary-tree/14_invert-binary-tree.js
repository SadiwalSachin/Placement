// Invert Binary Tree
// You are given the root of a binary tree root. Invert the binary tree and return its root.

import rootNode from "./basics.js"

console.log(rootNode)

function invertTree(root){
    if(root == null) return

    let leftRoot = root.left
    let rightRoot = root.right

    root.left = rightRoot
    root.right = leftRoot

    invertTree(root.left)
    invertTree(root.right)

    return root
}

invertTree(rootNode)

console.log(rootNode)