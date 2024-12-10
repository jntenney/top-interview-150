// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
// Constraints:
// 1 <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1
// nums[i] != nums[i + 1] for all valid i.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // l = left side of range, inclusive
  // r = right side of range, inclusive
  // mid = center of range, (l + r) / 2
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const lval = mid - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[mid - 1];
    const rval = mid + 1 > nums.length - 1 ? Number.NEGATIVE_INFINITY : nums[mid + 1];

    if (nums[mid] > lval && nums[mid] > rval) return mid;

    if (nums[mid] < rval) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

let nums, result;
nums = [1, 2, 3, 1];
result = findPeakElement(nums);
result;

nums = [1, 2, 1, 3, 5, 6, 4];
result = findPeakElement(nums);
result;
