// You are given an integer array heights where heights[i] represents the height of the i^th bar.
// You may choose any two bars to form a container. Return the maximum amount of water a container can store.
// Example 1:
// Input: height = [1,7,2,5,4,7,3,6]
// Output: 36
// Example 2:
// Input: height = [2,2,2]
// Output: 4
// Constraints:
// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000
/**
 * @param {number[]} heights
 * @return {number}
 */
function maxArea(heights) {
  let maxAreaWater = 0;
  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    maxAreaWater = Math.max(maxAreaWater, (r - l) * Math.min(heights[l], heights[r]));

    if (heights[l] <= heights[r]) {
      // advance the left pointer only it is less than/equal to height of right pointer
      l++;
    } else {
      // advance the right pointer only if is greater than height of left pointer
      r--;
    }
  }

  return maxAreaWater;
}

let heights;
let result;

heights = [1, 7, 2, 5, 4, 7, 3, 6];
result = maxArea(heights);
result;

heights = [1, 8, 2, 5, 4, 7, 8, 6];
result = maxArea(heights);
result;
