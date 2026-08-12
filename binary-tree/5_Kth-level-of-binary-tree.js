// isko bhi level order or dfs se kiya ja sakta hai aasaani se 
// dfs me height ka concept use karte hai

import rootNode from "./basics.js"

// console.log(rootNode)

// this is recusrive apporach

function kthLevelOfTheBinaryTree(root,k){
    if(root == null) return

    if(k==1) console.log(root.data)

    kthLevelOfTheBinaryTree(root.left,k-1)
    kthLevelOfTheBinaryTree(root.right,k-1)
}

// kthLevelOfTheBinaryTree(rootNode,3)


// Iterative approach

function iterativeApproach(root,k){
    let queue = []

    queue.push({node:root,level:1})

    while(queue.length){
        let node = queue.shift()

        if(node.level == k){
            console.log(node.node.data)
        }

        if(node.node.left != null) queue.push({node:node.node.left,level:node.level+1})
        if(node.node.right != null) queue.push({node:node.node.right,level:node.level+1})

    }
}

iterativeApproach(rootNode,3)


