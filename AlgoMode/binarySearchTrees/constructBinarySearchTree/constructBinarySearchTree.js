class BST {
    constructor() {
        this.root;
    }
}
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
BST.prototype.insert = function (value) {
    let newNode = new Node(value)
    if (this.root == null) {
        this.root = newNode;
    } else {
        let runner = this.root;
        while (true) {
            if (value < runner.val) {
                if (runner.left == null) {
                    runner.left = newNode;
                    break;
                } else {
                    runner = runner.left;
                }
            } else {
                if (runner.right == null) {
                    runner.right = newNode;
                    break;
                } else {
                    runner = runner.right;
                }
            }
        }
    }
    return this;
}

BST.prototype.contains = function (value) {
    if (this.root == null) {
        return false;
    } else {
        let runner = this.root;
        while (runner) {
            if (runner.val == value) return true;
            if (value < runner.val) runner = runner.left;
            else runner = runner.right;
        }
    }
    return false;
}

BST.prototype.remove = function (value) {
    let currentNode = this.root;
}

Node.prototype.remove = function (value, parentNode = null) {
    console.log(value)
    // console.log(parentNode)
    let currentNode = this;
    console.log("Hi", currentNode);
    while (currentNode !== null) {
        if (value < currentNode.val) {
            parentNode = currentNode;
            currentNode = currentNode.left;
        } else if (value > currentNode.val) {
            parentNode = currentNode;
            currentNode = currentNode.right;
        } else {
            if (currentNode.left !== null && currentNode.right !== null) {
                currentNode.val = getMinValue(currentNode.right)
                currentNode.right.remove(currentNode.val, currentNode)
            } else if (parentNode == null) {
                if(currentNode.left !== null) {
                    currentNode.val = currentNode.left.val;
                    currentNode.right = currentNode.left.right;
                    currentNode.left = currentNode.left.left;
                } else if (currentNode.right !== null) {
                    currentNode.val = currentNode.right.val;
                    currentNode.left = currentNode.right.left;
                    currentNode.right = currentNode.right.right;
                } else {
                    currentNode.val = null;
                }
            } else if (parentNode.left == currentNode) {
                parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
            } else if (parentNode.right == currentNode) {
                parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
            }
        }
        break;
    }
}
function getMinValue(node) {
    console.log("Min val Node: " + node.val)
    let currentNode = node;
    while (currentNode.left != null) {
        currentNode = currentNode.left;
    }
    return currentNode.val;
}

BST.prototype.remove = function (value) {
    if (this.root == null) {
        return null;
    } else {
        console.log("This is the root node: ",this.root);
        function traverseAndRemove(value, parentNode = null) {
            let currentNode = this.root;
            // console.log("Current Node: ",currentNode)
            while (currentNode !== null) {              // find node that needs to be removed
                if (value < currentNode.val) {
                    parentNode = currentNode;
                    currentNode = currentNode.left;
                } else if (value > currentNode.val) {
                    parentNode = currentNode;
                    currentNode = currentNode.right;
                } else {
                    if (currentNode.left !== null && currentNode.right !== null) {
                        console.log("CurrentNode.right: ",currentNode.right)
                        let minVal = getMinValue(currentNode.right)
                        traverseAndRemove(minVal, parentNode)
                        currentNode.val = minVal;
                    } else if (parentNode == null) {
                        if (currentNode.left != null) {
                            currentNode.val = currentNode.left.value;
                            currentNode.right = currentNode.left.right;
                            currentNode.left = currentNode.left.left;
                        } else if (currentNode.right != null) {
                            currentNode.val = currentNode.right.val;
                            currentNode.left = currentNode.right.left;
                            currentNode.right = currentNode.right.right;
                        } else {
                            this.root = null;
                        }
                    } else if (parentNode.left = currentNode) {
                        parentNode.left = currentNode != null ? currentNode.left : currentNode.right;
                    } else if (parentNode.right = currentNode) {
                        parentNode.right = currentNode != null ? currentNode.left : currentNode.right;
                    }
                }
                break;
            }
            function getMinValue (node) {
                console.log("Node: " + node)
                let currentNode = node;
                while (currentNode.left != null) {
                    currentNode = currentNode.left;
                }
                return currentNode.val;
            }
        }

        traverseAndRemove(value)
    }
}

BST.prototype.inOrder = function () {
    if (this.root == null) {
        return [];
    } else {
        let results = [];
        function inOrderTraversal(node) {
            node.left && inOrderTraversal(node.left);
            results.push(node.val);
            node.right && inOrderTraversal(node.right);
        }
        inOrderTraversal(this.root);
        return results;
    }
}
BST.prototype.preOrder = function () {
    if (this.root == null) {
        return [];
    } else {
        let results = [];
        function preOrderTraversal(node) {
            results.push(node.val)
            node.left && preOrderTraversal(node.left);
            node.right && preOrderTraversal(node.right);
        }
        preOrderTraversal(this.root);
        return results
    }
}
BST.prototype.postOrder = function () {
    if (this.root == null) {
        return [];
    } else {
        let results = [];
        function postOrderTraversal(node) {
            node.left && postOrderTraversal(node.left);
            node.right && postOrderTraversal(node.right);
            results.push(node.val)
        }
        postOrderTraversal(this.root);
        return results
    }
}
BST.prototype.levelOrder = function () {
    var result = [];
    var Q = [];
    if (this.root) {
        Q.push(this.root)
        while (Q.length) {
            let node = Q.shift();
            result.push(node.val);
            node.left && Q.push(node.left)
            node.right && Q.push(node.right)
        }
        return result;
    } else {
        return result;
    };
}

BST.prototype.maxHeight = function () {
    if (this.root == null) {
        return -1;
    } else {
        let traverse = function (node) {
            if (node == null) return -1;
            let left = traverse(node.left);
            let right = traverse(node.right);
            return left > right ? left+1 : right+1;
        }
        return traverse(this.root);
    }
}
BST.prototype.minHeight = function () {
    if (this.root == null) {
        return 0;
    } else {
        let traverse = function (node) {
            if (node == null) return 0;
            let left = traverse(node.left);
            let right = traverse(node.right);
            return left < right ? left + 1 : right + 1;
        }
        return traverse(this.root);
    }
}

BST.prototype.validateTree = function () {
    if (this.root == null) return -1;
    else {
        let traverse = function (tree, minValue, maxValue) {
            if (tree == null) return true;
            if (tree.value < minValue || tree.val > maxValue) return false;
            const leftIsValid = traverse(tree.left, minValue, tree.val)
            return leftIsValid && traverse(tree.right, tree.val, maxValue)
        }
        return traverse(this.root, -Infinity, Infinity)
    }
}

BST.prototype.findTheClosestValueInBst = function (target) {
    return traverse(this.root, target, Infinity)
}
let traverse = function (tree, target, closest) {
    let node = tree
    while (node !== null) {
        if (Math.abs(target - closest) > Math.abs(target - node.val)){
            console.log("Target & closest: ", Math.abs(target - closest))
            console.log("Target & node.val: ", Math.abs(target - node.val))
            console.log("Old closest: ", closest)
            closest = node.val;
            console.log("New closest: ", closest)
        } 
        if (target > node.val){
            node = node.right;
        } 
        else if (target < node.val){
            node = node.left;
        } 
        else break;
    }
    return closest;
} 

// check if lvl === 1
// return the roots value
// create a count variable to keep track of the level that we are at
// 

BST.prototype.printAtLvl = function(lvl){
    var result = [];
    var Q = [];
    let count = 0;
    Q.push(this.root )
    while (Q.length) {
        let node = Q.shift();
        result.push(node.val);
        node.left && Q.push(node.left)
        node.right && Q.push(node.right)
        count++;
    }
    return result;
    
}

exports.BST = BST;