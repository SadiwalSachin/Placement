// graph is network of nodes and edges. It is used to show or represent connection btw node and cites and values anything 
// 4 different ways are there to store graph
// 1 Adjacency List
// 2 Adjacecny Matrix
// 3 Edge List
// 2D Matrix (Implicit Graph)

// Adjacency List :  list of negihbours

class Graph {
    constructor (){
        this.graph = []
    }

    addNode(u,v){
        if(!this.graph[u]) this.graph[u] = []
        if(!this.graph[v]) this.graph[v] = []

        this.graph[u].push(v)
        this.graph[v].push(u)
    }

    printGraph(){
        for(let i=0;i<this.graph.length;i++){
            console.log(i + "->")
            for(let j=0;j<this.graph[i].length;j++){
                console.log(this.graph[i][j])
            }
        }
    }

    bfsTraversal(src=0){
        let queue = []
        let visited = []

        queue.push(src)
        visited[src] = true

        while(queue.length > 0){
            let currentNode = queue.shift()

            console.log(currentNode)

            let list = this.graph[currentNode]

            for(const v of list){
                if(!visited[v]){
                    queue.push(v)
                    visited[v] = true
                }
            }
        }
    }
}

let graph = new Graph()

graph.addNode(0,1)
graph.addNode(1,2)
graph.addNode(1,3)
graph.addNode(2,3)
graph.addNode(2,4)

console.log(graph)

// graph.printGraph()

graph.bfsTraversal(0)