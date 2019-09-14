class Node{
    constructor(value){
        this.val = value;
        this.children = [];
    }     
}
Node.prototype.addChild = function(value){
    this.children.push(new Node(value))
    return this;
}
Node.prototype.BFS = function(){
    const results_array = []
    const q = [this];
    while(q.length > 0){
        let curr = q.shift();
        results_array.push(curr.val)
        for( let child of curr.children){
            q.push(child)
        }
    }
    return results_array;
}
