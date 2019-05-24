

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
//   rrrrrrrrrrrrr    eeeeeeeee  ccccccccc   uuuuu   uuuuu  rrrrrrrrrrrrrr   ssssssssss   iiiiiiiiiiii  oooooooooooo  nnnnn     nnnnn           
//   rrrrrrrrrrrrrr   eeeeeeeee  ccccccccc   uuuuu   uuuuu  rrrrrrrrrrrrrr  ssssssssssss  iiiiiiiiiiii  oooooooooooo  nnnnnn    nnnnn               
//   rrrr      rrrr   eeeeeeeee  ccccccccc   uuuuu   uuuuu  rrrr      rrrr  ssssssssssss  iiiiiiiiiiii  oooooooooooo  nnnnnnn   nnnnn             
//   rrrr      rrrr   eeee       cccc        uuuuu   uuuuu  rrrr      rrrr  ssss      ss      iiii      oooo    oooo  nnnnnnnn  nnnnn      
//   rrrr      rrrr   eeee       cccc        uuuuu   uuuuu  rrrrrrrrrrrrrr  ssss              iiii      oooo    oooo  nnnnnnnnn nnnnn    
//   rrrrrrrrrrrrrr   eeeeeeee   cccc        uuuuu   uuuuu  rrrrrrrrrrrrrr  sssssssssss       iiii      oooo    oooo  nnnnn nnnnnnnnn    
//   rrrrrrrrrr       eeeeeeee   cccc        uuuuu   uuuuu  rrrrrrrrrr       sssssssssss      iiii      oooo    oooo  nnnnn   nnnnnnn    
//   rrrr  rrrrr      eeee       cccc        uuuuu   uuuuu  rrrrr rrrrr             ssss      iiii      oooo    oooo  nnnnn    nnnnnn    
//   rrrr   rrrrr     eeee       cccc        uuuuu   uuuuu  rrrrr  rrrrr    ss      ssss      iiii      oooo    oooo  nnnnn    nnnnnn
//   rrrr    rrrrr    eeeeeeeee  ccccccccc   uuuuu   uuuuu  rrrrr   rrrrr   ssssssssssss  iiiiiiiiiiii  oooooooooooo  nnnnn     nnnnn     
//   rrrr     rrrrr   eeeeeeeee  ccccccccc   uuuuuuuuuuuuu  rrrrr    rrrrr  ssssssssssss  iiiiiiiiiiii  oooooooooooo  nnnnn     nnnnn    
//   rrrr      rrrrr  eeeeeeeee  ccccccccc   uuuuuuuuuuuuu  rrrrr     rrrr   ssssssssss   iiiiiiiiiiii  oooooooooooo  nnnnn     nnnnn    
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Recursively Print the values from num to 0
let recurse = (num) => {
    if (num > 0) {
        console.log(num);
        return recurse(num - 1)
    } else return num;
}
recurse(10)

// Recursively Add all the values in an array and return the sum
let array_sum = (my_array) => {
    if (my_array.length === 1) {
        return my_array[0];
    }
    else return my_array.pop() + array_sum(my_array);
};
console.log(array_sum([1, 2, 3, 4, 5, 6]));

// Print the values in a given array
let printValuesInArray = (arr, ind = 0) => {
    if (ind < arr.length) {
        console.log(arr[ind])
        return printValuesInArray(arr, ind + 1)
    }
    return null;
}
printValuesInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Print sum from n to 0
let recurSum = (n) =>  { 
    if (n == 0) 
        return n; 
    return n + recurSum(n - 1); 
}
console.log(recurSum(5))
