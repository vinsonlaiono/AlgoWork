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
    length(){
        let runner = this.head;
        let count = 0;
        while(runner){
            count++
            runner = runner.next
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
    push(value){
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
    shift(value){
        let newNode = new Node(value);
        if(!this.head) this.setHead(newNode);
        else {
            newNode.next = this.head;
            this.setHead(newNode);
        }
    }
    insertAt(value, idx){
        let newNode = new Node(value);
        let count = 0;
        let runner = this.head;
        while(count != idx-1){
            count++;
            runner = runner.next;
        }
        newNode.next = runner.next;
        runner.next = newNode;
        return this
    }
    max(){
        let curr = -Infinity;
        let runner = this.head;
        while(runner){
            curr = Math.max(curr, runner.val)
            runner = runner.next
        }
        return curr
    }
    min(){
        let curr = Infinity;
        let runner = this.head;
        while(runner){
            curr = Math.min(curr, runner.val)
            runner = runner.next
        }
        return curr
    }
    average(){
        let sum = 0;
        let runner = this.head;
        while(runner){
            sum += runner.val;
            runner = runner.next;
        }
        return sum/this.length();
    }
}
var n = new SLL()
n.push(5).push(10).push(15).push(20)
console.log("Avg: " + n.average())
