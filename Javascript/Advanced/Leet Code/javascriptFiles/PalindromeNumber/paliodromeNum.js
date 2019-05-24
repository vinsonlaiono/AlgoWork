var isPalindrome = function(x) {
    if(x < 0){
        return false
    } else {
        let reverse = function(n){
            let ans = 0;
            // get length of number
            let len = n.toString().length
            while(n){
                // get the last digit of the number
                //ex. 12345 temp = 5
                let temp = n%10;
                // mult temp * 10^len-1(5)
                ans +=  temp * Math.pow(10, len-1);
                // decrement len
                len--;
                // remove last digit of number
                n = Math.floor(n / 10);
            }
            return ans;
        }
        
        if(x == reverse(x)){
            return true;
        } else {
            return false
        }
    }
};

console.log(isPalindrome(1234321));
console.log(isPalindrome(123432));