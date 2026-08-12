function maxWidth(root){
    let queue = []
    queue.push([root,0])

    let max = 0

    while(queue.length>0){
        let startIndex = queue[0][1]
        let endIndex = queue[queue.length-1][1]

        let currQueueSize = queue.length

        max = Math.max(max,(endIndex-startIndex)+1)

        for(let i=0;i<currQueueSize;i++){
            let [node,index] = queue.shift()
            if(node.left) queue.push([node.left,(index*2)+1])
            if(node.right) queue.push([node.right,(index*2)+2])
        }
    }

    return max
}