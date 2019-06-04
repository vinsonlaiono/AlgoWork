// O(Log(n)) Time | O(1) Space
var binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] == target) return mid;
        else if (target < array[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}

console.log("Answer: ", binarySearch([1, 12, 21, 32, 46, 54, 68, 79], 22));