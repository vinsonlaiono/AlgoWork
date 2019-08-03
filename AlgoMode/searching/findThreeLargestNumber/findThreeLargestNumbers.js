// Given an array, return the three largest numbers in an array from least to greatest

// Time O(n) | Space O(1)
function threeLargestNum(arr){
    let results = [null, null, null];
    for(let i=0; i<arr.length; i++){
        if(results[2] === null || arr[i] > results[2]){
            let mid = results[2];
            let first = results[1];
            results[2] = arr[i];
            results[1] = mid;
            results[0] = first;
        } else if(results[1] === null || arr[i] > results[1]){
            let mid = results[1]
            results[1] = arr[i];
            results[0] = mid;
        } else if(results[0] === null || arr[i] > results[0]){
            results[0] = arr[i];
        } 
    }
    return arr.length < 3 ? arr.sort((a, b) => a-b) : results;
}

console.log(threeLargestNum([120, 124, 53 , 43, 76, 45, 98, 23, 12, 9, 87, 123]));
console.log(threeLargestNum([120, 124, 53 , 433, 76, 45, 98, 23, 12, 9, 87, 123]));
console.log(threeLargestNum([120, 124, 53 , 433, 1376, 45, 98, 23, 12, 9, 87, 123]));
console.log(threeLargestNum([120, 124, 53]));
console.log(threeLargestNum([120, 53]));
console.log(threeLargestNum([53]));