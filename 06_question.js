import List from "./Revision/Linked-List/basic.js";

const ll = new List(0)
ll.appendNode(1)
ll.appendNode(2)
ll.appendNode(3)
ll.appendNode(4)
ll.appendNode(5)

ll.findLength()

function rotateByk(head,k){
    let length = 0
    let temp = head
    while(temp!=null){
        length++
        temp = temp.next
    }

    let pos = 0
    if(k>length){
        pos = k-length
    }else{
        pos = k
    }

    temp = head
    let dummyNode = -1
    let curr = dummyNode
    let tempHead = head

    let counter = 0
    while(counter<length-pos){
        temp=temp.next
    }

    curr.next = temp.next
    temp.next = null

    let temp2 = dummyNode
    while(temp2.next!=null){
        temp2=temp.next
    }

    temp2.next = tempHead

    return dummyNode.next
    
}

console.log("remainder is ",(5 -  (5%2))/2)