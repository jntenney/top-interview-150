// You are given an array non-negative integers heights which represent an elevation map. Each value heights[i] represents the height of a bar, which has a width of 1.
// Return the maximum area of water that can be trapped between the bars.
// Example 1:
// Input: height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9
// Constraints:
// 1 <= height.length <= 1000
// 0 <= height[i] <= 1000
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let maxArea = 0;
  const maxLeft = new Array(height.length);
  const maxRight = new Array(height.length);
  const minLeftRight = new Array(height.length);

  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      maxLeft[i] = 0;
      continue;
    }

    if (i === 1) {
      maxLeft[i] = height[i - 1];
      continue;
    }

    if (height[i - 1] > maxLeft[i - 1]) {
      maxLeft[i] = height[i - 1];
    } else {
      maxLeft[i] = maxLeft[i - 1];
    }
  }

  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      maxRight[i] = 0;
      continue;
    }

    if (i === height.length - 2) {
      maxRight[i] = height[i + 1];
      continue;
    }

    if (height[i + 1] > maxRight[i + 1]) {
      maxRight[i] = height[i + 1];
    } else {
      maxRight[i] = maxRight[i + 1];
    }
  }

  for (let i = 0; i < height.length; i++) {
    minLeftRight[i] = Math.min(maxLeft[i], maxRight[i]);
  }

  for (let i = 0; i < height.length; i++) {
    maxArea += minLeftRight[i] > height[i] ? minLeftRight[i] - height[i] : 0;
  }

  return maxArea;
}

// let height;
// let result;
// //height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
// height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// result = trap(height);
// result;
