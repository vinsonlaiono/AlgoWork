class BST {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        if(value < this.val){
            if(this.left === null){
                this.left = new BST(value)
            } else {
                this.left.insert(value);
            }
        } else {
            if(this.right === null){
                this.right = new BST(value)
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }
}

const test = new BST(100).insert(5).insert(10).insert(15).insert(2)
.insert(1).insert(22).insert(1).insert(1).insert(3).insert(502)
.insert(204).insert(205).insert(207).insert(206).insert(9)
.insert(14).insert(280).insert(27).insert(506).insert(19)
console.log(test)

function findTheClosestValueInBst(list, target){

}

findTheClosestValueInBst(test, 6)
