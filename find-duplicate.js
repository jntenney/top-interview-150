// You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.
// Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.
// Example 1:
// Input: nums = [1,2,3,2,2]
// Output: 2
// Example 2:
// Input: nums = [1,2,3,4,4]
// Output: 4
// Follow-up: Can you solve the problem without modifying the array nums and using
// O(1) extra space?
// Constraints:
// 1 <= n <= 10000
// nums.length == n + 1
// 1 <= nums[i] <= n
/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  let dup = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      dup = Math.abs(nums[i]);
      break;
    }

    nums[Math.abs(nums[i]) - 1] *= -1;
  }

  return dup;
}

let nums, result;
nums = [1, 2, 3, 2, 2];
result = findDuplicate(nums);
result;

nums = [1, 2, 3, 4, 5];
result = findDuplicate(nums);
result;

nums = [3, 1, 3, 4, 2];
result = findDuplicate(nums);
result;
