// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
// Constraints:
// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 10^5
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(maxReach, nums[i] + i);
  }

  return maxReach >= nums.length - 1;
};

var canJump2 = function (nums) {
  function helper(nums, currIndex) {
    if (nums[currIndex] + currIndex >= nums.length - 1) return true;

    for (let i = 1; i <= nums[currIndex]; i++) {
      if (helper(nums, currIndex + i)) return true;
    }

    return false;
  }

  return helper(nums, 0);
};

let nums = [2, 3, 1, 1, 4];
let result = canJump(nums);
result;

nums = [3, 1, 2, 0, 4];
result = canJump(nums);
result;
