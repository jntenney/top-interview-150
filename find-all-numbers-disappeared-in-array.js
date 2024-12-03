// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
// Input: nums = [1,1]
// Output: [2]
// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbersSet = function (nums) {
  const n = nums.length;
  const cache = new Set();

  for (let i = 1; i <= n; i++) {
    cache.add(i);
  }

  for (let i = 0; i < nums.length; i++) {
    cache.delete(nums[i]);
  }

  return Array.from(cache.values());
};

var findDisappearedNumbers = function (nums) {
  const missing = [];

  for (let i = 0; i < nums.length; i++) {
    // go through each item in the array
    //  the value of the current item is a number that does exist
    //  use that number as an index to mark that position in the array as negative
    //  negative numbers tell us what numbers (by its index in the array) do exist
    nums[Math.abs(nums[i]) - 1] = Math.abs(nums[Math.abs(nums[i]) - 1]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }
  return missing;
};

let nums, result;
nums = [4, 3, 2, 7, 8, 2, 3, 1];
result = findDisappearedNumbers(nums);
nums;
result;

nums = [1, 1];
result = findDisappearedNumbers(nums);
result;
