class Heap {
    constructor(){
        this.heap = []
    }

    push(value){
        // first push the value in the array
        this.heap.push(value)

        // find the child index and parent index to satisfy the cbt property
        let childIndex = this.heap.length - 1
        let parentIndex = Math.floor((childIndex - 1)/2)

        while(parentIndex >= 0 && this.heap[childIndex]>this.heap[parentIndex]){
            // swaping of child and parent
            let child = this.heap[childIndex]
            this.heap[childIndex] = this.heap[parentIndex]
            this.heap[parentIndex] = child

            childIndex = parentIndex
            parentIndex = Math.floor((childIndex-1)/2)             
        }
    }

    pushBack(value){
        // 1 push the value in the last which will cause O(1) TC
        this.heap.push(value)

        // 2 now we will fix the heap using parent children relationship
        let childIndex = this.heap.length - 1
        let parentIndex = Math.floor((childIndex-1)/2)

        // for the min heap this comparison condition will only change not anything else
        while(parentIndex >= 0 && this.heap[childIndex] > this.heap[parentIndex]){
            // swaping of child and parent
            let tempChild = this.heap[childIndex]
            this.heap[childIndex] = this.heap[parentIndex] // child ki jagah parent
            this.heap[parentIndex] = tempChild

            childIndex = parentIndex
            parentIndex = Math.floor((childIndex - 1)/2)
        }
    }

    pop(){
        // 1 swap last and first
        // 2 delete the last
        // 3 fix the heap

        // swaping completed
        let endValue = this.heap[this.heap.length - 1]
        this.heap[this.heap.length - 1] = this.heap[0]
        this.heap[0] = endValue  

        this.heap.pop()

        this.heapify(0)
    }

    heapify(parentIndex){
        if(parentIndex > this.heap.length) return

        let leftChildIndex = 2 * parentIndex + 1
        let rightChildIndex = 2 * parentIndex + 2
        let maxIndex = parentIndex

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[parentIndex]){
            maxIndex = leftChildIndex
        }

        
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[parentIndex]){
            maxIndex = rightChildIndex
        }

        let parentValue = this.heap[parentIndex]

        this.heap[parentIndex] = this.heap[maxIndex]
        this.heap[maxIndex] = parentValue

        if(maxIndex != parentIndex){
            this.heapify(maxIndex)
        }


    }

    top(){
        return this.heap[0]
    }

    empty(){
        return this.heap.length == 0
    }
}

let maxHeap = new Heap()

maxHeap.push(50)
maxHeap.push(10)
maxHeap.push(30)
maxHeap.push(100)
maxHeap.push(15)

console.log(maxHeap)
console.log(maxHeap.top())
maxHeap.pop()
console.log(maxHeap.top())


