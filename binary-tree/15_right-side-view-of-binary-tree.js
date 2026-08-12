// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

import rootNode from "./basics.js";

function rightSideView(root){
    let ans = []
    let queue = []

    queue.push(root)

    while(queue.length>0){
        let queueSize = queue.length
        ans.push(queue[queueSize-1].data)

        for(let i=0;i<queueSize;i++){
            let currNode = queue.shift()
            if(currNode.left != null) queue.push(currNode.left)
            if(currNode.right != null) queue.push(currNode.right)
        }
    }

    return ans
}

console.log(rootNode)
console.log(rightSideView(rootNode))