// Two Number Sum
// Write a function that takes in a non-empty array of distinct integers 
// and an interger respresenting a target sum. If any teo numbers in the input
// array sum up to the target sum, the function should return them in an array. 
// in sorted order. If no teo number sum up to the target sum, 
// the function return an empty array/ Assu,e that there will be at the most 
// one pair of numbers summing up to the target sum.

// Sample input: [3,5,-4,8,11,1,-1,6], 10
// Sample output: [-1,11]

// Solution I
// O(n^2) time | O(1) space
let twoNumberSum = (arr, target) => {
    for(let i = 0; i < arr.length(); i++){
        const numOne = arr[i];
        for(let j = i + 1; j < arr.length()-1; i++){
            const numTwo = arr[j];
            if(numOne + numTwo == target){
                return [numOne, numTwo].sort((a,b) => a-b);
            }
        }
    }
    return [];
}

// Solution II
// O(nLogn) time | O(1) space
let twoNumberSum = (arr, target) => {
    array.sort((a, b) => a-b);
	let left = 0;
	let right = array.length-1;
	while(left < right){
		let possibleTarget = array[left] + array[right];
		if(possibleTarget < targetSum) left++;
		if(possibleTarget > targetSum) right--;
		if(possibleTarget == targetSum) return array[left] > array[right] ? [array[right], array[left]] : [array[left], array[right]];
	}	
	return [];
}

// Solution III
// O(n) time | O(n) space
let twoNumberSum = (arr, target) => {
    let hashMap = {};
    for(let i=0; i< arr.length; i++){
        const possiblePair = target - arr[i];
        if(possiblePair in hashMap){
            return [arr[i], possiblePair].sort((a,b)=>a-b);
        } else {
            hashMap[arr[i]] = true;
        }
    }
    return [];
}