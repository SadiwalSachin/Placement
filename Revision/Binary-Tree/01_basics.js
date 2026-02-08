class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}


let preOrder = [1,2,3,-1,-1,-1,4,-1,5,6,-1,7,-1,-1,-1]

function buildTree(preOrder){
    index++
    if(preOrder[index]==-1) return null

    let node = new Node(preOrder[index])
    node.left = buildTree(preOrder)
    node.right= buildTree(preOrder)
    return node
}
let index = -1
let node = buildTree(preOrder)

// console.log("tree is this ",node);

// function preOrderTraversal(node){
//     if(node == null) return 

//     console.log(node.val)
//     preOrderTraversal(node.left)
//     preOrderTraversal(node.right)
// }

function levelOrderTraversal(node){
    console.log("node in level order",node );
    
    let queue = []
    queue.push(node)

    while(queue.length>0){
        let node = queue.shift()
        console.log(node.val);
        
        if(node.left!=null) queue.push(node.left)
        if(node.right!=null) queue.push(node.right)
    }
}


// levelOrderTraversal(node)

function levelOrderTraversalWithEnter(node){
    let queue = []
    queue.push(node)
    queue.push(null)
    let count = 0

    while(queue.length>0){
        let node = queue.shift()
        if(node==null){
            count++
            if(queue.length>0){
                    queue.push(null)
            }else{
                break
            }
        }

        if(node && node.left!=null) queue.push(node.left)
        if(node && node.right!=null) queue.push(node.right)
    }

    return count
}

// levelOrderTraversalWithEnter(node)
// 

// function height(node){
//     if(node==null) return 0

//     let leftHT = height(node.left)
//     let rightHT = height(node.right)

//     return Math.max(leftHT,rightHT) + 1
// }

console.log(`Height of the tree ${node} is ${levelOrderTraversalWithEnter(node)
}`)