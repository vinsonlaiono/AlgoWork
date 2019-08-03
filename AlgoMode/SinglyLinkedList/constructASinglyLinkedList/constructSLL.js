// Construct a singly Linked List

// Construct a singly Linked List

class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
class SLL{
    constructor(){
        this.head = null;
    }
    getLength(){
        let runner = this.head;
        let count = 0;
        while(runner){
            count++
        };
        return count
    }
    setHead(node){
        if(this.head === null) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
    }
    addToBack(value){
        let newNode = new Node(value);
        if(this.head === null) this.setHead(newNode);
        else {
            let runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
    }
    addToFront(value){
        let newNode = new Node(value);
        if(!this.head) this.setHead(newNode);
        else {
            newNode.next = this.head;
            this.setHead(newNode);
        }
    }
    insert(value, idx){
        let newNode = new Node(value);
        let count = 0;
        let runner = this.head;
        
        return this
    }
}
var n = new SLL()
n.addToBack(5).addToBack(10).addToBack(15).addToFront(3)
console.log(n.insert(4, 2))
console.log(n)
