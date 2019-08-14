console.log("This is the node from index.js")
function Node() {
    this.children = {};
    this.isCompleted = false;
}

function Trie() {
    this.root = new Node();
}

Trie.prototype.insertWord = function (word) {
    // Get the root node
    var runner = this.root;
    // console.log("Current Node: ", runner)

    // Iterates over every character in the word 
    for (let i = 0; i < word.length; i++) {
        // Current letter/character at the iteration
        currentLetter = word[i];
        // console.log(currentLetter);

        // Check to see if the Character exist in the children
        let child = runner.children[currentLetter]

        // If not... add to the children list
        if (child == undefined) {
            // Create empty node for current character
            child = new Node;
            // Add that empty node to the current Nodes children
            runner.children[currentLetter] = child;
        }
        // Move the runner
        runner = child;
    }
    // Once the word is complete set isWord to true
    runner.isCompleted = true;
};

Trie.prototype.contains = function (word) {
    console.log("* ======================================== *"); 
    console.log("* ========== In Contains Method ========== *"); 
    console.log("* ======================================== *"); 
    console.group();

    // var children = currentNode.children
    // console.log(children )
    for (let letter of word) {
        var currentNode = this.root;
        console.log("Letter: " + letter)
        console.log("Current Node: ",currentNode.children[letter])
        while(currentNode.isCompleted == true){

            if (currentNode.children[letter]) {
                console.log("In children: ", currentNode.children[letter])
                currentNode = currentNode.children[letter];
            } else {
                console.log("Return false" )
                // return false
            }
        }
    }
    console.log("Current Node.isCompleted: ",currentNode.isCompleted);
    console.groupEnd();
    return currentNode.isCompleted;
}

trie = new Trie();
trie.insertWord("car");
trie.insertWord("card");
trie.insertWord("chip");
trie.insertWord("trie");
trie.insertWord("try");
trie.insertWord("the");
trie.insertWord("to");
trie.insertWord('vinson');

trie.contains("vinson");

// console.table(trie.root.children)