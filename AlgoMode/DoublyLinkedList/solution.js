// Create a doubly linked list
// addtoEnd
// removeFromEnd
// addToFrom
// removeFromFront
// contains
class DLL {
    constructor(){
        this.head = null;
    }
}
class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
DLL.prototype.addToEnd = function(value){
    let newNode = new Node(value);
    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
    }
    else {
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;
        newNode.prev = runner;
    }
    return this;
}
DLL.prototype.removeFromEnd = function(){
    if(!this.head) return this;
    if(!this.head.next){ this.head = null; return;}
    else {
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.prev.next = null;
    }
    return this;
}
DLL.prototype.addToFront = function(value){
    let newNode = new Node(value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode = this.head;
        this.head = newNode;
    }
    return this;
}

DLL.prototype.removeFromFront = function(){
    if(!this.head){
        return this;
    } else if(!this.head.next) {
        this.head = null;
        this.tail = null;
    }
    return this;
}

DLL.prototype.contains = function(value){
    if(!this.head){
        return this;
    } else {
        let runner = this.head;
        while(runner){
            if(runner.value = value){
                return true;
            } else {
                runner = runner.next;
            }
        }
        return this;
    }
}
