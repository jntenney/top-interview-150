// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
// Return the area of the largest rectangle that can be formed among the bars.
// Note: This chart is known as a histogram.
// Example 1:
// Input: heights = [7,1,7,2,2,4]
// Output: 8
// Example 2:
// Input: heights = [1,3,7]
// Output: 7
// Constraints:
// 1 <= heights.length <= 1000.
// 0 <= heights[i] <= 1000
/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  let maxArea = 0;
  const stack = []; // holds [index, height] of an item
  let index;

  for (index = 0; index < heights.length; index++) {
    let itemStart = index;

    // while height of item on the stack is greater than current item then the item on stack has ended
    // it also means the current item can extend back, so get the start index for the current item
    while (stack.length && stack[stack.length - 1][1] > heights[index]) {
      const topOfStack = stack.pop();
      const stackItemArea = (index - topOfStack[0]) * topOfStack[1]; // length of rectangle * height
      maxArea = Math.max(maxArea, stackItemArea);
      itemStart = topOfStack[0];
    }

    stack.push([itemStart, heights[index]]);
    stack;
  }

  // there may still be items on the stack, calculate area for each item
  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, (index - stack[i][0]) * stack[i][1]); // length of rectangle * height
  }

  return maxArea;
}

// let heights;
// let result;

// heights = [2, 1, 5, 6, 2, 3];
// result = largestRectangleArea(heights);
// result;

// heights = [2, 2, 5, 4, 2, 3];
// result = largestRectangleArea(heights);
// result;
