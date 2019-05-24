var threeNumberSum = (arr, target) => {
    arr.sort((a, b) => a - b);
    var triplets = [];
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1
        let right = arr.length - 1;
        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];
            if (currentSum == target) {
                triplets.push([arr[i], arr[left], arr[right]])
                left++;
                right--;
            } else if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            }
        }
    }
    // console.log(triplets)
    return triplets
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));