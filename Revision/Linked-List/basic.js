class List {
    constructor(data){
        this.head = {
            val:data,
            next:null
        }
        this.tail =  this.head
    }

    appendNode(data){
        let newNode = {
            val:data,
            next:null
        }
        if(this.head==null){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    traversing(){
        let node = this.head
        while(node.next!=null){
            console.log(node.val , "\n")
            node = node.next
        }
        console.log(node.val)
    }

    insertNode(pos,val){
        let newNode =  {
            val,
            next:null
        }
        if(pos<0) return "Invalid Position"
        if(this.head==null){
            this.head=this.tail = newNode
        }

        if(pos == 0){
            newNode.next = this.head
            this.head = newNode
        }else if(pos==1){
            let tempNode = this.head
            newNode.next = tempNode.next
            tempNode.next = newNode
        }else{
            let tempNode = this.head
            let counter = 0
            while(counter<pos){
                tempNode =tempNode.next
                counter++
            }
            newNode.next = tempNode.next
            tempNode.next = newNode
        }
    }

    findLength(){
        let length = 0
        let tempNode = this.head
        while(tempNode!=null){
            length++
            tempNode=  tempNode.next
        }
        console.log("length",length)
        return length
    }
}

let ll = new List(300)
ll.appendNode(200)
ll.appendNode(100)
ll.appendNode(50)
ll.appendNode(30)

export default List

