const program = require('../sll');
// push() adds to the last node in the list
// pop() removes the last node in the list
// insertAt(value, position)  insert new node at given position
// removeAt(position) remove node from given position
// print() prints all values
// getLength() returns the length of the list
// reverse() reverse linked list

let test1 = new program.SLL();
let arr = [];

// test1.insertAt(45, 0);
test1.create(arr);
test1.removeAt(0)
test1.print();
test1.reverse();
test1.print();