// Test file for construct binary search tree
const program = require('./constructBinarySearchTree')

// Build a tree to test
tree1 = new program.BST()
tree1.insert(20).insert(15).insert(25).insert(10)
.insert(18).insert(22).insert(27).insert(30).insert(40)
.insert(5).insert(23).insert(32).insert(35).insert(45)

tree2 = new program.BST()
tree2.insert(20).insert(15).insert(10).insert(18)

//              20                                  20
//           /      \                              /
//         15        25                          15  
//        / \       /  \                        /  \ 
//      10   18   22    27                   10     18        
//     /            \     \
//    5              23    30
//                        /  \
//                       32   40
//                           /  \
//                          35   45
 
console.log(tree1.contains(22));                    // True
// Tree traversal inOrder, preOrder, postOrder, maxHeight, minHeight
console.log(tree1.inOrder());                       // [ 5, 10, 15, 18, 20, 22, 23, 25, 27, 30, 40 ]
console.log(tree1.preOrder());                      // [ 20, 15, 10, 5, 18, 25, 22, 23, 27, 30, 40 ]
console.log(tree1.postOrder());                     // [ 5, 10, 18, 15, 23, 22, 40, 30, 27, 25, 20 ]
console.log(tree1.levelOrder());                    // [ 20, 15, 25, 10, 18, 22, 27, 5, 23, 30, 40 ]
console.log(tree1.maxHeight());                     // 4
console.log(tree1.minHeight());                     // 2
// Validate Binary Search Tree
console.log(tree1.validateTree());                  // logs true
console.log(tree1.findTheClosestValueInBst(29));     // logs 30
tree1.remove(30);
console.log("Hi")
console.log(tree1.levelOrder());                    // [ 20, 15, 25, 10, 18, 22, 27, 5, 23, 30, 40 ]