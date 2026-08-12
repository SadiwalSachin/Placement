

function deleteNode(root,key){
    if(root==null) return null

    if(val < root.data){ // left subtree me exist karega 
        root.left  = deleteNode(root.left , key)
    }else if(val > root.data){// right subtree me exist karega
        root.right = deleteNode(root.right,key)
    }else{ // finally we got the key now we have to delete the node
        // zero children
        if(root.left == null && root.right == null){
            return null
        }else if(root.left == null){
           // null ya value ho apne ko usse kuch nahi hai
            return  root.right
        }else if(root.right == null){
            return  root.left
        }else{
            let inOrderSuccessor = getInOrderSuccessor(root.right)
            root.data = inOrderSuccessor.data
            root.right = deleteNode(root.right,inOrderSuccessor.data)
        }
    }
    return root
}

function getInOrderSuccessor(root){
    while(root != null && root.left != null){
        root = root.left
    }
    return root
}