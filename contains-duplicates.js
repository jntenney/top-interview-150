// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false
function hasDuplicate(nums) {
  const store = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) {
      return true;
    } else {
      store.add(nums[i]);
    }
  }

  return false;
}

let nums = [1, 2, 3, 3];
let result = hasDuplicate(nums);
result;

nums = [1, 2, 3, 4];
result = hasDuplicate(nums);
result;
