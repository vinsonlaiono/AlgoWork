var arr = [4, 5, 2, 4, 54, 3, 6, 92];
// find the max value in array
function max(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i > max) {
            max = arr[i];
        }
    }
    console.log(max)
}
// find the min value in the array
function min(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(max);
}
// reverse function inplace
function reverse(arr) {
    var temp;
    for (var i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        else
            continue;
    }
    console.log(arr)
}

arr = [4, 5, 2, 4, 54, 3, 6, 92, 1, 4];
function swapPairs(arr) {
    for (var i = 0; i < arr.length; i + 2) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr
}
swapPairs(arr)
// remove negatives from array inplace
function removeNegative(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i - count] = arr[i];
        }
        else {
            count++
        }
    }
    arr.length -= count;
    return arr;
}
console.log(removeNegative([1, 2, 3, -1, -34, 2, 42]))
console.log(removeNegative([1, 2, 3, -1, -34, -2, -2, -42]))

// This method inserts the given value into the given index while shifting everything to the right of the index over one
arr = [1, 4, 12, 43, 2, 34, 2, 2, 7]
function insertAt(arr, idx, val) {
    arr.length = arr.length + 1;
    for (var i = arr.length - 1; i > idx; i--) {
        arr[i] = arr[i - 1]
    }
    arr[idx] = val
    console.log(arr)
}
insertAt(arr, 2, 9)

// removes the first index of the array and returns the same array keeping it in place method
arr = [4, 12, 3]
function popFront(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1;
    console.log(arr)
}
popFront(arr)

//arr.unshift(value) is a method that adds to the front of an array.
// arr.splice(0,0,value) is also a method that adds to the front of an array
// ============================================================
// This method is not in place
// Returns a new array
arr = [4, 12, 3]
function pushFront(arr, val) {
    var newArr = [val];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr) // prints newArr =  [3,4,12,3]
}
pushFront(arr, 3)
//=============================================================
// This method returns the same array (inplace)
arr = [4, 12, 3]
function pushFront(arr, val) {
    arr.length = arr.length + 1
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = val
    console.log(arr)
}
pushFront(arr, 3)
// ============================================================

// This method removes the given index from the array and returning the value at that index.
arr = [1, 4, 12, 454, 23, 423, 34, 3, 2, 1];
function removeAt(arr, idx) {
    //stores the value of the given index in a variable
    remove = arr[idx]
    // Iterates throught the loop starting from the given index
    for (var i = idx; i < arr.length - 1; i++) {
        //assigns the given index the value of the index to the right of it
        // Does this through the whole array starting at the given index
        arr[i] = arr[i + 1]
    }
    arr.pop()
    return remove;
}
remove = removeAt(arr, 5)
console.log(remove)

