// Stack algo session

function Node(value){
    this.val = value;
    this.next = null;
}
function SLL(){
    this.head = null;
}

SLL.prototype.traverse = function(){
    // code goes here
}
SLL.prototype.push = function(){
    // code goes here
}
SLL.prototype.pop = function(){
    // code goes here
}

sm = new SLL();
sm.push("Jane");
sm.push("Justin");
sm.push("Kevin");
x = sm.pop(); // <- should store "Kevin" in variable x
sm.traverse();// should return ["Jane", "Justin"]