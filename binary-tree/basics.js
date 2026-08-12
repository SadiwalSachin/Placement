const preOrderSequence = [1,2,4,-1,-1,5,-1,-1,3,6,-1,-1,7,-1,-1]

class Node {
    constructor(data,left,right){
        this.data = data
        this.left = left
        this.right = right
    }
}

let index = -1

function buildTree (preOrderSequence){
    index++

    if(preOrderSequence[index]==-1) return null

    const root = new Node(preOrderSequence[index])
    root.left = buildTree(preOrderSequence)
    root.right = buildTree(preOrderSequence)

    return root
}

let rootNode = buildTree(preOrderSequence)

export default rootNode

// console.log(rootNode)


function preOrderTraversal(root){
    if(root==null) return

    console.log(root.data)
    root.data = root.data+2
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
}

// preOrderTraversal(rootNode)

// pehle root pe kaam karo then left and right karo so agar pehle root pe kuch checks karna hai like root ke left se value compare karna ho ya root ke right se value compare karna ho is type ki chije ho thika hai preOrderTraversal ka use kar sakte hai okay

// console.log(rootNode)


function inOrderTraversal(root){
    if(root==null) return

    inOrderTraversal(root.left)
    console.log(root.data) // anything you can perform on this root here
    inOrderTraversal(root.right)
}

// inOrderTraversal(rootNode)

function postOrderTraversal(root){
    if(root==null) return
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)

    console.log(root.data) // anything which is later to do on the root node okay
}

// parent child - relation
// sibling - relation

// leaf node - the node which has zero children


function levelOrderTraversal(root){
    let queue = []
    queue.push(root)

    while(queue.length>0){
        let node = queue.shift()
        console.log(node.data)

        if(node.left != null) queue.push(node.left)
        if(node.right != null) queue.push(node.right)
    }
}

// levelOrderTraversal(rootNode)

function levelOrderInNextLine(root){
    let queue = []
    queue.push(root)
    queue.push(null)

    while(queue.length>0){
        let root = queue.shift()

        if(root != null) console.log(root?.data)

        if(root==null){
            if(queue.length>0){
                console.log("\n")
                queue.pop(null)
                continue
            }else{
                break
            }
        }

        if(root.left != null) queue.push(root.left)
        if(root.right != null) queue.push(root.right)
    }
}

// levelOrderInNextLine(rootNode)