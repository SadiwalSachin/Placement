function topViewOfTheBinaryTree(root){
    let queue= []
    let map = {}

    queue.push({root:root,dist:0})

    while(queue.length>0){
        let node = queue.shift()

        if(!map[node.dist]){
            map[node.dist] = node.root
        }

        if(node.left != null) queue.push({root:node.left,dist:dist-1})
        if(node.right != null) queue.push({root:node.right,dist:dist+1})
    }
}