var intToRoman = function(num) {
let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
   let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
   let result = "";
   for ( let i = 0 ; i <= decimal.length; i++) {
       while (num%decimal[i] < num) {
           result +=roman[i]
           num -=decimal[i]
       }
   }
   return result
};

console.log(intToRoman(3000))