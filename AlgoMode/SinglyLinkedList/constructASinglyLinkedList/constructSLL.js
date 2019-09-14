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
}
SLL.prototype.length = function(){
        let runner = this.head;
        let count = 0;
        while(runner){
            count++
            runner = runner.next
        };
        return count
    }
SLL.prototype.setHead = function(node){
    if(this.head === null) this.head = node;
    else {
        node.next = this.head;
        this.head = node;
    }
}
SLL.prototype.push = function(value){
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
SLL.prototype.shift = function(value){
    let newNode = new Node(value);
    if(!this.head) this.setHead(newNode);
    else {
        newNode.next = this.head;
        this.setHead(newNode);
    }
}
SLL.prototype.insertAt = function(value, idx){
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
SLL.prototype.max = function(){
    let curr = -Infinity;
    let runner = this.head;
    while(runner){
        curr = Math.max(curr, runner.val)
        runner = runner.next
    }
    return curr
}
SLL.prototype.min = function(){
    let curr = Infinity;
    let runner = this.head;
    while(runner){
        curr = Math.min(curr, runner.val)
        runner = runner.next
    }
    return curr
}
SLL.prototype.average = function(){
    let sum = 0;
    let runner = this.head;
    while(runner){
        sum += runner.val;
        runner = runner.next;
    }
    return sum/this.length();
}
SLL.prototype.print = function(){
    let runner = this.head;
    let res = []
    while(runner){
        res.push(runner.val);
        runner = runner.next;
    }
    return res;
}

SLL.prototype.reverse = function(){
    if(!this.head){
        return "Error: ID-10T Epmpty list..."
    } else {
        let prev = null;
        let curr = this.head;
        while(curr){
            let runner = curr.next;
            curr.next = prev;
            prev = curr;
            curr = runner;
        }
        this.head = prev;
    }
}
var n = new SLL()
var m = new SLL()
n.push(5).push(10).push(15).push(20)
console.log("Avg: " + n.average())
n.reverse()
console.log(n.print())
console.log(m.reverse())

