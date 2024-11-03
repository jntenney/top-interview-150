// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.
//
// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]
// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]
// Constraints:
// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

function topKFrequent(nums, k) {
  const count = {};
  const topKElements = [];

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  const freq = Array.from(Object.entries(count));

  freq.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k && i < freq.length; i++) {
    topKElements.push(parseInt(freq[i][0]));
  }

  return topKElements;
}

// let nums = [1, 2, 2, 3, 3, 3, 3];
// let k = 2;
// let result = topKFrequent(nums, k);
// result;

// nums = [1, 2, 2, 3, 3, 3];
// k = 3;
// result = topKFrequent(nums, k);
// result;

// nums = [7, 7, 7, 3, 3, 3];
// k = 3;
// result = topKFrequent(nums, k);
// result;
