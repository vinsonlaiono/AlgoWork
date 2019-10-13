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
SLL.prototype.setHead = function(node){
    if(this.head === null) this.head = node;
    else {
        node.next = this.head;
        this.head = node;
    }
}
SLL.prototype.print = function(){
    if(!this.head){
        console.log(`reference error: ID-10T -> list length ${this.getLength()}`)
        return -1;
    }
    let res = `${this.head.val}, `;
    let runner = this.head.next;
    while(runner){
        runner.next ? res+=` ${runner.val}, ` : res+=` ${runner.val}`;
        runner = runner.next;
    }
    console.log(res);
}
SLL.prototype.create = function(arr){
    for(v of arr){
        this.push(v);
    }
}
SLL.prototype.push = function(value){
    if(!this.head){
        this.head = new Node(value);
        return
    } else {
        let runner = this.head;
        while(runner.next != null) runner = runner.next;
        runner.next = new Node(value);
        this.tail = runner.next;
        return
    }
}
SLL.prototype.pop = function(){
    if(!this.head){
        return -1;
    } else {
        let runner = this.head;
        while(runner.next.next != null) runner = runner.next;
        runner.next = null;
    }
}

SLL.prototype.shift = function(value){
    let n = new Node(value);
    !this.head ? this.head = n : n.next = this.head; this.head = n;
}
SLL.prototype.unShift = function(){
    if(!this.head){
        return -1;
    } else if(this.head.next === null){
        this.head = null;
    } else {
        this.head = this.head.next;
    }
}
SLL.prototype.getLength = function(){
    if(!this.head){ 
        return 0;
    } else {
        let c = 0;
        let runner = this.head;
        while(runner){
            c++;
            runner = runner.next;
        }
        return c;
    }
}
SLL.prototype.insertAt = function(value, pos){
    if(pos > this.getLength()+1 || pos <= 0){
        console.log(`reference error: ID-10T for postition value : "${pos}"`)
    } else if(pos === 1){
        this.shift(value);
        return;   
    } else if(pos === this.getLength()+1){
        this.push(value);
    } else{
        let n = new Node(value),
        runner = this.head,
        count = 0;
        while(count < pos-2) {
            runner = runner.next;
            count++;
        }
        n.next = runner.next;
        runner.next = n;
    }
}
SLL.prototype.removeAt = function(pos){
    console.log(`position: ${pos}`)
    if(!this.head){
        printErrors();
        return -1;
    } else {
        let len = this.getLength();
        if(pos > len || pos <= 0){
            printErrors();
            return -1
        } else if(pos === 1 && len === 1){
            this.head = this.head.next;
        } else if(pos === this.getLength()){
            this.pop();
        } else {
            let count = 0;
            let runner = this.head;
            while(count < pos-2){
                runner = runner.next;
                count++;
            }
            runner.next = runner.next.next;
        }
    }
}
SLL.prototype.reverse = function(){
    if(!this.head){
        console.log(`=>Length of list: ${this.getLength()}`)
        return -1;
    } else {
        let curr = this.head;
        let prev = null;
        while(curr){
            let runner = curr.next;
            curr.next = prev;
            prev = curr;
            curr = runner;
        }
        this.head = prev;
    }
}


SLL.prototype.max = function(){
    let curr = -Infinity;
    let runner = this.head;
    while(runner){
        curr = Math.max(curr, runner.val)
        runner = runner.next
    }
    return curr === -Infinity ? 'max error' : curr;
}
SLL.prototype.min = function(){
    let curr = Infinity;
    let runner = this.head;
    while(runner){
        curr = Math.min(curr, runner.val);
        runner = runner.next;
    }
    return curr === Infinity ? 'min error' : curr;
}
SLL.prototype.average = function(){
    let sum = 0;
    let runner = this.head;
    while(runner){
        sum += runner.val;
        runner = runner.next;
    }
    return sum === 0 ? 'empty' : sum/this.getLength();
}

function printErrors(){
    console.log("reference error")
}
exports.SLL = SLL;

