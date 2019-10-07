// create a method that accepts an array of 3 unique integers
// These integers can be duplicated
// Return the array sorted from smallest to largest


function sortThree(arr){
    let max = arr[0];
    let mid;
    let min = arr[0];
    let curr = arr[0];
    let end = arr.length-1;
    let front = 0;
    // find all raw unique values
    arr.forEach(e => {
        max = Math.max(e, max);
        min = Math.min(e, min);
        if(e < max && e > min) mid = e;
    });

    while(front <= end){
        if(arr[curr] === max){
            swap(arr, curr, end);
            end--;
            console.log("hi")
        }
        else if(arr[curr] === min){
            swap(arr, curr, front)
            front++
        } else {
            front++;
            end--;
        }
    }

    return arr
}
function swap(arr, i, pos){
    let temp = arr[i];
    arr[i] = arr[pos];
    arr[pos] = temp;
}
console.log(sortThree([3,1,2,2,3,1,1,3,2]))