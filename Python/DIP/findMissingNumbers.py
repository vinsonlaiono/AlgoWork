class Solution(object):
  def findDisappearedNumbers(self, nums):
    for i in range(len(nums)):
      index = abs(nums[i])-1
      nums[index] = -abs(nums[index])
    return [index for index, n in enumerate(nums, start=1) if n > 0]

nums = [4, 6, 2, 6, 7, 2, 1]
print(Solution().findDisappearedNumbers(nums))