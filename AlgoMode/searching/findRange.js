// Vinson Aiono
// July 21 2019
// Algorithm provided by Interview Pro

// Time O(n) | Space O(1)
function findRange(arr, target){
    let left = 0;
    let count = 0;
    let start = 0;
    while (left < arr.length){
        if(arr[left] === target) count++
        if(count === 1) start = left;
        left++
    }
    return [start, start + count-1]
}
console.log(findRange([1,2,3,3,3,3,3,4,5,6,7,8,9,9], 3))

function firstSearch(arr, target){
    let left = 0;
    let right = arr.length;
}

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length;
    while(left <= right){
        let mid = Math.floor((left+right) / 2);
        if(arr[mid] === target){
            return mid;
        } else if (arr[mid] < target){
            left = mid+1;
        } else {
            right = mid -1;
        }
    }
    return -1;ç
}

console.log(binarySearch([1,3,5,7,8,9,19,20,45,67,89,90], 2));