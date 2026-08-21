// heap is cbt.
// CBT is known as complete binary tree. Who follows one property that its all level are filled leaving the last level it is filled from left to right
// CBT also follow one property that
// if parentIndex is i then
//   leftChildrenIndex = 2 * i + 1
//   rightChildrenIndex = 2 * i + 2
// also heap arranges data in specific order like max or min 
// implementation of heap is priority queue which arranges data in max or min order

// Building heap is thing like we cannot build it via class node we build it via array or vector because it reduces the time complexity

class Heap {
    constructor (){
        this.heap  = []
    }

    push(val){
        this.heap.push(val) // it takes O(1) TC

        //  fixing the heap it cost O(logn) TC

        let childIndex = this.heap.length-1
        let parenIndex = Math.floor((childIndex-1)/2)

        // building maximum heap
        while(parenIndex >=0 && this.heap[childIndex]>this.heap[parenIndex]){
            // swap
            let childValue = this.heap[childIndex]
            this.heap[childIndex] = this.heap[parenIndex]
            this.heap[parenIndex] = childValue

            childIndex = parenIndex
            parenIndex = Math.floor((childIndex-1)/2)
        }
    }

    top(){
        return this.heap[0]
    }

    pop(){
        let first = this.heap[0]

        this.heap[0] = this.heap[this.heap.length-1]
        this.heap[this.heap.length-1] = first

        this.heap.pop()

        heapify(0)
    }

    heapify(index){
        if(index>=this.heap.length) return

        let parentIndex = index
        let leftChildIndex = 2 * parentIndex  + 1
        let rightChildIndex = 2 * parentIndex + 2

        let maxIndex = parentIndex

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[parentIndex]){
            maxIndex = leftChildIndex
        }

        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[parentIndex]){
            maxIndex = rightChildIndex
        }

        // swaping

        
    }

}

let heap = new Heap()

heap.heap.push(3)
heap.push(5)
heap.push(10)
heap.push(7)

console.log(heap)