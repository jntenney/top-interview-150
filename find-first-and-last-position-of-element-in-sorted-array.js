// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lIndex, rIndex;

  function binarySearch(nums, target, leftBias = true) {
    // l, left side of range, inclusive
    // r = right side of range, inclusive
    // mid = center of range, (l + r) / 2, floor
    // while(l <= r)

    let l = 0;
    let r = nums.length - 1;
    let foundIndex = -1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);

      if (nums[mid] === target) {
        foundIndex = mid;

        if (leftBias) {
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      } else if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return foundIndex;
  }

  lIndex = binarySearch(nums, target, true);

  if (lIndex === -1) return [-1, -1];

  rIndex = binarySearch(nums, target, false);

  if (rIndex === -1) return [-1, -1];

  return [lIndex, rIndex];
};

let nums, target, result;
nums = [5, 7, 7, 8, 8, 8, 10];
target = 8;
result = searchRange(nums, target);
result;

nums = [2, 2];
target = 2;
result = searchRange(nums, target);
result;
