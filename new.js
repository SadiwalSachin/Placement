// head is given 
// reverse of k size linked lis
// constraint is if the length of the group less than k then rest is at same 

//  we have a linked list 
// 1 2 3 4 5 
// k = 2
// (1 2) (3 4) (5)
// 2 1 4 3 5 
// length 
// k = size of the group 
// if i count total of groups of size k 
// 1 2 3 4 5 = (1 2 ) (3 4)
// length of the ll  / k 
// 2)5(2 1

// first we will find length O(n)
// we will run a loop on linked list for reversal 
// O(n) + O(n)


// I TELLED THE OPTIMAL I NEED TO WORK ON BRUTE FORCE
// this is optimal
// brute force is which is using extra space + extra time complexity


class LinkedList {
    constructor(val){
        this.head = {
            val:val,
            next:null
        }
        this.tail= this.head
    }

    appendNode(val){
        if(!this.head){
            let node = {
                val:val,
                next:null
            }
            this.head=this.tail=node
        }

        let node = {
            val:val,
            next:null
        }
        this.tail.next = node
        this.tail= node

    }
}

const ll = new LinkedList(0)
console.log(ll)


