const program = require('../constructBinarySearchTree');

tree1 = new program.BST()
tree1.insert(20).insert(15).insert(25).insert(10)
    .insert(18).insert(22).insert(27).insert(30).insert(40)
    .insert(5).insert(23).insert(32).insert(35).insert(45)

// console.log(tree1.inOrder());
describe('BST', function () {
    it("Test Case #1", function () {
        expect(tree1.contains(23)).toEqual(true);
    })
    it("Test Case #2", function () {
        expect(tree1.contains(27)).toEqual(true);
    })
    it("Test Case #3", function () {
        expect(tree1.contains(45)).toEqual(true);
    })
    it("Test Case #4", function () {
        expect(tree1.contains(32)).toEqual(true);
    })
    it("Test Case #5", function () {
        expect(tree1.contains(40)).toEqual(true);
    })
    it("Test Case #5", function () {
        expect(tree1.inOrder()).toEqual([5, 10, 15, 18, 20, 22, 23, 25, 27, 30, 32, 35, 40, 45]);
    })
})