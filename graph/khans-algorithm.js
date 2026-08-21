import Graph from "./basics.js";

// now this will make a DAG graph only from u to v and not from v to u

let graph = new Graph()

graph.addNode(5,0)
graph.addNode(5,2)
graph.addNode(4,0)
graph.addNode(4,1)
graph.addNode(2,3)
graph.addNode(3,1)



function khans(graph){
    const indegree = []

    for(const list of graph){
        for(const nodes of list){
            console.log(nodes)
            indegree[nodes]++
        }
    }

    let queue = []

    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==0){
            queue.push(i)
        }
    }
    let ans  = []
    while(queue.length>0){
        let current = queue.shift()
        ans.push(current)
        const list = graph[current]
        for(let neigh of list){
            indegree[neigh]--
            
        }
    }

}

khans(graph.graph)