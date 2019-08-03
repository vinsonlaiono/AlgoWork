// July 2019
// Vinson Aiono

// Build a function to find the longest Palindromic Substring
// given an array of string characters

// Time O(n^2) | Space O(1)

// Vinson Aiono
// July 2019
// Time O(n) | Space O(1)

function longestPalindromicString(str){
    let currLong = [0,1];
    for(let i=0; i < str.length; i++){
        const odd = getLongestString(str, i-1, i+1);
        const even = getLongestString(str, i-1, i);
        longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currLong = currLong[1] - currLong[0] > longest[1] - longest[0] ? currLong : longest;
    }
    return str.slice(currLong[0], currLong[1]);
}

function getLongestString(str, idx1, idx2){
    while(idx1 >= 0 && idx2 <= str.length){
        if(str[idx1] != str[idx2]) break;
        idx1--;
        idx2++;
    }
    return [idx1+1, idx2]
}

console.log(longestPalindromicString("this is a racecar a si kjfdk"))
console.log(longestPalindromicString("asdfghgfdsahjk"))
console.log(longestPalindromicString("is this a plindrome or not"))
console.log(longestPalindromicString("1234565434567898767890"))
console.log(longestPalindromicString("12345678765434567890"))