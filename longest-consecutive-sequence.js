// Given an array of integers nums, return the length of the longest consecutive sequence of elements.
// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [2,20,4,10,3,4,5]
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].
// Example 2:
// Input: nums = [0,3,2,5,4,6,1,1]
// Output: 7
// Constraints:
// 0 <= nums.length <= 1000
// -10^9 <= nums[i] <= 10^9
function longestConsecutive(nums) {
  let result = 0;
  // put all the nums in a Set for fast lookup
  const helper = new Set(nums);

  for (let num of nums) {
    // if this number is a starting number let's count the sequence,
    // eg, only count a sequence if this is a beginning of a sequence
    if (!helper.has(num - 1)) {
      let length = 1;

      while (helper.has(num + length)) {
        length++;
      }

      result = Math.max(result, length);
    }
  }

  return result;
}

// let nums = [0, 3, 2, 5, 4, 6, 1, 1];
// let result = longestConsecutive(nums);
// result;

// nums = [2, 20, 4, 10, 3, 4, 5];
// result = longestConsecutive(nums);
// result;
