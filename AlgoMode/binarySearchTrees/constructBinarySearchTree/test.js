// Test file for construct binary search tree
const program = require('./constructBinarySearchTree')

// Build a tree to test
tree1 = new program.BST()
tree1.insert(20).insert(15).insert(25).insert(10)
.insert(18).insert(22).insert(27).insert(30).insert(40)
.insert(5).insert(23).insert(32).insert(35).insert(45)

tree2 = new program.BST()
tree2.insert(20).insert(15).insert(10).insert(18).insert(19)

//              20                                  20
//           /      \                              /
//         15        25                          15  
//        / \       /  \                        /  \ 
//      10   18   22    27                   10     18        
//     /            \     \                           \
//    5              23    30                          19  
//                        /  \
//                       32   40
//                           /  \
//                          35   45

tree1 = {
    "Contains" : tree1.contains(22),
    "PreOrder: " : tree1.preOrder(),
    "InOrder: " : tree1.inOrder(),
    "PostOrder: " : tree1.postOrder(),
    // "LevelOrder: " : tree1.levelOrder(),
    // "Min_Height: " : tree1.minHeight(),
    // "Max_Height: " : tree1.maxHeight(),
    // "Validate_BST: " : tree1.validateTree(),
    // "Find_the_closest" : tree1.findTheClosestValueInBst(29),
}
tree2 = {
    "Max_Height" : tree2.maxHeight(),
    "Min_Height" : tree2.minHeight(),
}
 
// console.log(tree1.contains(22));                    // True
// Tree traversal inOrder, preOrder, postOrder, maxHeight, minHeight
// console.log(tree1.inOrder());                       // [ 5, 10, 15, 18, 20, 22, 23, 25, 27, 30, 40 ]
// console.log(tree1.preOrder());                      // [ 20, 15, 10, 5, 18, 25, 22, 23, 27, 30, 40 ]
// console.log(tree1.postOrder());                     // [ 5, 10, 18, 15, 23, 22, 40, 30, 27, 25, 20 ]
// console.log(tree1.levelOrder());                    // [ 20, 15, 25, 10, 18, 22, 27, 5, 23, 30, 40 ]
// console.log("Max Height: ", tree1.maxHeight());                     // 6
// console.log("Min Height: ",tree1.minHeight());                     // 2
// // Validate Binary Search Tree
// console.log(tree1.validateTree());                  // true
// console.log(tree1.findTheClosestValueInBst(29));    // 30
// // tree1.remove(30);
// console.log("level order: ")
// console.log(tree1.levelOrder());                    // [ 20, 15, 25, 10, 18, 22, 27, 5, 23, 30, 40 ]

// Need to make this a test file in jasmine

console.log("tree1", tree1)
console.log("tree2", tree2)