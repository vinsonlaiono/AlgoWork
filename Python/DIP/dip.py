# Problem
# Given a non-empty array where each element represents a 
# digit of a non-negative integer, add one to the integer. 
# The most significant digit is at the front of the array and 
# each element in the array contains only one digit. Furthermore, 
# the integer does not have leading zeros, except in the case of 
# the number '0'.

# Solution
# First, convert the array of digits into an integer by multiplying
# each digit by 10 and adding the next digit. Once the entire number
# is created, add one and return the digits of the new number.

# Time O(n) | Space O(1)
def plusOne(digits):
    num = 0
    for d in digits:
        num = num*10 + d
    return [int(i) for i in str(num+1)]
print(plusOne([3,5,6]))
