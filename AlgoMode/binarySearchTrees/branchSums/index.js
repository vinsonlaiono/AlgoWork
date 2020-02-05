const program = require('../constructBinarySearchTree/constructBinarySearchTree')

tree1 = new program.BST();
tree1.insert(20).insert(15).insert(25).insert(10)
.insert(18).insert(22).insert(27).insert(30).insert(40)
.insert(5).insert(23).insert(32).insert(35).insert(45)

console.log(tree1)
console.log(tree1.branchSums())
console.log(tree1.printAtLvl())