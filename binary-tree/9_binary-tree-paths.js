import rootNode from "./basics.js";

function binaryTreePaths(root){
   const ans = []

   function dfs(node,path){
    if(node==null) return

    path = path.length ===0 ? node.data.toString() : path + "->" + node.data // adding the current node of incoming node

    if(node.left == null && node.right == null){ // dependency is there on 
        ans.push(path)
        return
    }

    dfs(node.left,path)
    dfs(node.right,path)

   }

   dfs(root,"")

   return ans
}


console.log(rootNode)
console.log(binaryTreePaths(rootNode))