class Node{
    constructor(){
        this.children = {};
        this.isWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
}

Trie.prototype.insertWord = function(word){
    let runner = this.root;
    for(let i=0; i<word.length; i++){
        let currLetter = word[i];
        let child = runner.children[currLetter];

        if(child === undefined){
            child = new Node();
            runner.children[currLetter] = child;
        }
        runner = child;
    }
    runner.isWord = true;
    return this;
}

Trie.prototype.wordValid = function(word){
    let runner = this.root;
    for(let i=0; i<word.length; i++){
        let curr = word[i];
        let child = runner.children[curr]
        if(child === undefined) return false;
        runner = child;
    }
    return runner.isWord;
}
Trie.prototype.prefixValid = function(word){
    let runner = this.root;
    for(let i=0; i<word.length; i++){
        let curr = word[i];
        let child = runner.children[curr];
        if(child === undefined) return false;
        runner = child;
    }
    return runner;
}

Trie.prototype.findAllWords = function(str){
    let startNode = this.prefixValid(str);
    // startNode == {'c' : [Object] => {isWord:false, children: {'a': [Object]}}}
    let queue = [startNode];
    let runner = startNode;
    while(queue.length > 0){
        // pop the first out of the queue
        let curr = queue.shift();
        // add all the children nodes to the queue
        for(const key in curr.children) queue.push(curr.children[key]);

        let runner = curr;
        while (!curr.isWord){
            
        }
    }
}
let t = new Trie();
t.insertWord("car")
t.insertWord("carpet")
t.insertWord("abc")
t.insertWord("BCA")

t.findAllWords('c');

console.group()

console.log("Word valid: ", t.wordValid('car'));
console.log(t);

console.groupEnd();

// console.log("autofills: ",t.autoFill("c"));