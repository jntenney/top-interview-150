// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
// Your solution must run in O(logn) time.
// Example 1:
// Input: nums = [-1,0,2,4,6,8], target = 4
// Output: 3
// Example 2:
// Input: nums = [-1,0,2,4,6,8], target = 3
// Output: -1
// Constraints:
// 1 <= nums.length <= 10000.
// -10000 < nums[i], target < 10000
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  // l = left side of range, inclusive
  // r = right side of range, inclusive
  // mid = (l + r) / 2, floor
  // while(l <= r)
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

let nums;
let target;
let result;

nums = [-1, 0, 2, 4, 6, 8];
target = 2;
result = search(nums, target);
result;

nums = [-15, -9, -2, 0, 3, 16, 22];
target = 0;
result = search(nums, target);
result;
