function diameter(node){
    if(node == null) return 0
    
    let currentDM = height(node.left) + height(node.right)

    let leftDM = diameter(node.left)
    let rightDM = diameter(node.right)
    

    return Math.max(leftDM,rightDM,currentDM)
}

function height(node){
    if(node == null) return 0

    let leftHT = height(node.left)
    let rightHT = height(node.right)

    return Math.max(leftHT,rightHT) + 1
}