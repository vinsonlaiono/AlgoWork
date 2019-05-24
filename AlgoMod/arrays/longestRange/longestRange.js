// O(n) time | O(n) space

let longestRange = (arr) => {
    let longRange = [];
    let longestLength = 0;
    const hashMap = {};
    for(const num of arr){
        hashMap[num] = true;
    }
    for(const num of arr){
        if(!hashMap[num]) continue;
        hashMap[num] = false;
        let currentLength = 1;
        let left = num - 1;
        let right = num + 1;
        while(left in hashMap){
            hashMap[left] = false;
            currentLength++;
            left--;
        }
        while(right in hashMap){
            hashMap[right] = false;
            currentLength++;
            right++;
        }
        if(currentLength > longestLength) {
            longestLength = currentLength;
            longRange = [left + 1, right - 1 ]
        }
    }
    return longRange;
}

console.log(longestRange([0,6,17,18,19,20,21,22,3,7,8,5,1,2,4,12,13,14,15,16,11,9]))