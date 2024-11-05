// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in
// O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]
// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]
// Constraints:
// 2 <= nums.length <= 1000
// -20 <= nums[i] <= 20

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    if (product === -0) product = 0;
    result[i] = product;
  }

  return result;
}

let nums = [-1, 0, 1, 2, 3];
let result = productExceptSelf(nums);
result;
