// Vinson Aiono
// Fri Apr 5 2019 6:51pm

// Comment out the all the functions except for the function you want to test
// Run test file '../tests/fibTest.js' to go through test cases.

// O(n^2) time | O(n) space -- Recursive
var getNthFib = (n) => {
    if(n == 1) return 0;
    if(n == 2) return 1;
    return getNthFib(n - 1) + getNthFib(n - 2);
}

// O(n) time | O(n) space -- Recursive
var getNthFib = (n, hashMap = {1:0, 2:1}) => {
    if(hashMap[n]){
        return hashMap[n];
    } else {
        hashMap[n] = getNthFib(n - 1, hashMap) + getNthFib(n - 2, hashMap);
        return hashMap[n];
    }
}

// O(n) space | O(1) time --- Iterative solution
var getNthFib = (n) => {
    lastTwo = [0,1];
    counter = 3;
    while(counter <= n){
        nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter += 1;
    }
    return n > 1 ? lastTwo[1] : lastTwo [0];
}

exports.getNthFib = getNthFib;


