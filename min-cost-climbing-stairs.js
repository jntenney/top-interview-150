// You are given an array of integers cost where cost[i] is the cost of taking a step from the ith floor of a staircase. After paying the cost, you can step to either the (i + 1)th floor or the (i + 2)th floor.
// You may choose to start at the index 0 or the index 1 floor.
// Return the minimum cost to reach the top of the staircase, i.e. just past the last index in cost.
// Example 1:
// Input: cost = [1,2,3]
// Output: 2
// Explanation: We can start at index = 1 and pay the cost of cost[1] = 2 and take two steps to reach the top. The total cost is 2.
// Example 2:
// Input: cost = [1,2,1,2,1,1,1]
// Output: 4
// Explanation: Start at index = 0.
// Pay the cost of cost[0] = 1 and take two steps to reach index = 2.
// Pay the cost of cost[2] = 1 and take two steps to reach index = 4.
// Pay the cost of cost[4] = 1 and take two steps to reach index = 6.
// Pay the cost of cost[6] = 1 and take one step to reach the top.
// The total cost is 4.
// Constraints:
// 2 <= cost.length <= 100
// 0 <= cost[i] <= 100
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  const minPerStep = new Array(cost.length + 1);

  minPerStep[0] = 0; // we can start at index 0 or index 1, so min cost to start at 0 is 0
  minPerStep[1] = 0; // we can start at index 0 or index 1, so min cost to start at 1 is 0

  for (let step = 2; step <= cost.length; step++) {
    minPerStep[step] = Math.min(cost[step - 1] + minPerStep[step - 1], cost[step - 2] + minPerStep[step - 2]);
  }

  return minPerStep[cost.length];
}