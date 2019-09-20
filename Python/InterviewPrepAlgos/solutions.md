#### 1. Given a string, find the length of the longest substring without repeating characters.
#### Solution:
This can be solved by cleverly manipulating two pointers - the head and tail. These two define a sliding window. We also have a hashmap to keep track of the latest index of any letter.

The algorithm moves the head through the array, while updating the hashmap of positions of characters. When we find a duplicate, we calculate the length between the head and the last duplicate character... and if that length is greater, to save that length. That is the result value.

The algorithm runs in linear time in a single pass O(n) and uses linear space as well for the hashmap.

```
class Solution:
  def lengthOfLongestSubstring(self, s):
    # create dictionary of letters and their latest index
    letters = {}
    # create a tail pointer, it updates whenever we meet a duplicate character
    tail = -1
    # create a head pointer, this one just iterates through every letter
    head = 0
    # result variable, updates whenever it's higher than result
    result = 0
    
    while head < len(s):
      if s[head] in letters:
          tail = max(tail, letters[s[head]])
      letters[s[head]] = head
      result = max(result, head-tail)
      head += 1
    return result

print Solution().lengthOfLongestSubstring('abrkaabcdefghijjxxx')
```
---
#### 2. A palindrome is a sequence of characters that reads the same backwards and forwards. Given a string, s, find the longest palindromic substring in s.

#### Example:

```
Input: "banana"
Output: "anana"

Input: "million"
Output: "illi"
```


#### Solution: 
We can think of every palindrome as a mirror image around a central character. For example , "racecar" is a mirror around the center "e". Sometimes, the center character can be doubled and we still have a valid palindrome. For example, in the palindrome "ABBA", the center is the double character "BB". Using this knowledge, we can write a function that finds the longest palindrome by doing the following:

1.) Looping over our string s, treating each character as the "center" character
2.) Checking to see if it creates a longer possible palindrome than we have yet seen.

Note that in each iteration of this loop, we treat the selected character as both a "single-center" odd length palindrome and a "double-center" even length palindrome.

In a string s of n characters, we have 2n-1 possible "center" characters. This is because we have two possibilities for each character, a single-center or a double-center. In other words, for a given index i, our central character could either be the single-center s[i] or the double-center s[i] s[i+1]. This is true for all n indices of s except for the last thus we have 2 * n - 1 possibilities.

This solution has time complexity O(n^2). This is because of the following:
1.) In our for loop, we need to go through 2n-1 "center" characters, thus this is O(n).
2.) For each of these "center" characters, checking for the longest palindrome is O(n) time. This palindrome check is linear, and thus it is O(n).
Thus, we have O(n^2) time. There is no additional space requirement, so our space complexity is simply O(1).

```
class Solution: 
    def longestPalindrome(self, s):
        if s is '':
            return s
        self.maxLength = 0
        self.start = 0
    
        for i in range(len(s)):
            # Check for odd length palindromes
            self.expandFromCenter(s,i,i)
            # Check for even length palindromes
            self.expandFromCenter(s,i,i+1)
        return s[self.start:self.start+self.maxLength]
    
    # Helper function to expand a substring around a central character or characters.
    def expandFromCenter(self, s, low, high):
        while low > -1 and high < len(s) and s[low] == s[high]:
            low -= 1
            high += 1
        # Check to see if we found a longer palindrome than our current counter.
        # Adjust maxLength and start index to counteract increment from while loop. 
        if self.maxLength < high-low-1: 
            self.maxLength = high-low-1
            self.start = low+1  

         
# Test program
s = "tracecars"
print(str(Solution().longestPalindrome(s)))
```
---

#### 3. Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

#### Example:
```
Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]
```

#### Solution:
While this could be done in O(n) time using the brute force method of iterating twice over the whole array, once from the left and once from the right, there is a more efficient O(log(n)) solution. We use two modified binary searches to find the first and last indices.

The algorithm operates in O(log(n)) time. Binary search cuts the space roughly in half after each iteration, which means that there are at most log_2(n) iterations. Even with two binary searches, our time complexity is O(log(n)).
The space complexity of the algorithm is O(1). All of the work is done in place, so the memory is constant.

```
class Solution: 
  def getRange(self, arr, target):
    low = 0
    high = len(arr)-1
    first = self.firstIndex(arr, low, high, target)
    last = self.lastIndex(arr, low, high, target)
    return [first,last]

  # First binary search to find the first index of the target, if it exists.
  def firstIndex(self, arr, low, high, target): 
    if(high >= low): 
      mid = low + (high - low) / 2
      if((mid == 0 or x > arr[mid - 1]) and arr[mid] == x): 
        return mid 
      elif(x > arr[mid]) : 
        return self.firstIndex(arr, (mid + 1), high, x) 
      else: 
        return self.firstIndex(arr, low, (mid - 1), x)   
    return -1
  
  # Second binary search to find the final index of the target. 
  def lastIndex(self, arr, low, high, target): 
    if (high >= low): 
      mid = low + (high - low) / 2
      if (( mid == len(arr)-1 or x < arr[mid + 1]) and arr[mid] == x): 
        return mid 
      elif (x < arr[mid]): 
        return self.lastIndex(arr, low, (mid - 1), x) 
      else: 
        return self.lastIndex(arr, (mid + 1), high, x)         
    return -1
    
  
# Test program 
arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8] 
x = 2
print(Solution().getRange(arr, x))
# [1, 4]
```