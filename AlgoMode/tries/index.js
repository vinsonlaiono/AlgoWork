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
    return runner.isWord === true ? true : false;
}
Trie.prototype.prefixValid = function(word){
    let runner = this.root;
    for(let i=0; i<word.length; i++){
        let curr = word[i];
        let child = runner.children[curr]
        if(child === undefined) return false;
        runner = child;
    }
    return true;
}

Trie.prototype.autoFill = function(word){

}

let t = new Trie();
t.insertWord("car")
t.insertWord("carpet")
t.insertWord("try")
t.insertWord("trie")

console.group()
var root = Object.keys(t.root)
var keys = Object.keys(t.root.children)
var cha = Object.keys(t.root.children.c)
console.log(root)
console.log(keys)
console.log(t.root.children.c.children.a.children.r)
console.groupEnd();

console.log(t.wordValid('ca'))
console.log(t.prefixValid('ca'))