// Vinson Aiono
//
function smallestDiff(arr1, arr2){
    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);
    let idx1 = 0
    let idx2 = 0
    let smallest = Infinity;
    let current = Infinity;
    let pairs;

    while(idx1 < arr1.length && idx2 < arr2.length){
        let firNum = arr1[idx1];
        let secNum = arr2[idx2];
        if(firNum < secNum){
            current = secNum - firNum
            idx1++
        } else if (secNum < firNum){
            current = firNum - secNum
            idx2++
        } else {
            return pairs;
        }
        if(smallest > current){
            smallest = current;
            pairs = [firNum, secNum];
        }
    }
    return pairs;
}
console.log(smallestDiff([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 34], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]))
console.log(smallestDiff([10], [13, 9]))