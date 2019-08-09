// Given an array find the three numbers that 
// can make up a a triangle using the pythagorean theorum

// Input: [1,3,6,5,4,8]
// Output: [3,4,5] -> 3^2 + 4^2 = 5^2

function findPythTheo(arr){
    let nums = new Set();
    for(let num of arr){ nums.add(num*num) }
    for(let i=0; i< arr.length; i++){
        for(let j=1; j<arr.length;j++){
            sqNum = Math.pow(arr[i], 2) + Math.pow(arr[j], 2)
            if(nums.has(sqNum)) return [arr[i], arr[j], Math.sqrt(sqNum)];
            else continue;
        }
    }
    return -1;
}   
console.log(findPythTheo([1,3,6,5,4,8]));