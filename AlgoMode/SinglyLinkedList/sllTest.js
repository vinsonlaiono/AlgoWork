const program = require('./constructASinglyLinkedList/constructSLL');
// push() adds to the last node in the list
// pop() removes the last node in the list
// insertAt(value, position)  insert new node at given position
// removeAt(position) remove node from given position
// print() prints all values
// getLength() returns the length of the list
// reverse() reverse linked list
// max() returns max value in list
// min() reutrn min value in list
// avgerage() returns the average of all values in the list;
// contains() returns boolean if given value is contained in the list


let test1 = new program.SLL();
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// test1.insertAt(45, 0);
test1.create([]);
// test1.removeAt(0)
test1.print();
console.log(test1.max())
console.log(test1.min())
console.log(test1.average())
console.log(test1.contains(4))