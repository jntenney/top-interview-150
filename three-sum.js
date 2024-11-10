// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
// Constraints:
// 3 <= nums.length <= 1000
// -10^5 <= nums[i] <= 10^5
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const result = [];
  let l, r;

  // sort the numbers in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // nums is sorted, so if nums[i] is greater than zero, everthing to the right is greater than zero
    // so we can stop looking for a sum equal to 0 as that would be impossible
    if (nums[i] > 0) break;

    // if nums[i] is the number we previously saw, continue to advance
    // otherwise we'd process a duplicate set
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const a = nums[i];
    l = i + 1;
    r = nums.length - 1;

    while (l < r) {
      const b = nums[l];
      const c = nums[r];
      const sum = a + b + c;

      if (sum === 0) {
        result.push([a, b, c]);
        l++;
        r--;

        // if nums[l] is the number we previously saw, continue to advance
        // otherwise we'd process a duplicate set
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
}

let nums;
let result;
nums = [-1, 0, 0, 1, 1, 2, 2, -1, -4];
result = threeSum(nums);
result;
