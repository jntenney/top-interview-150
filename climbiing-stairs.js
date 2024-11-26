// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
// Constraints:
// 1 <= n <= 45
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const dp = new Array(n + 1);

  dp[0] = 1; // step zero, default 1
  dp[1] = 1; // step one, (1 one step away from zero) = 1 way

  // dp[2], step two, (two 1 steps or one 2 step) = 2 ways, depends on previous two steps dp[1] & dp[0]
  // dp[3], depends on previous two steps dp[2] & dp[1]
  // dp[4], depends on previous two steps dp[3] & dp[2], etc

  for (let steps = 2; steps <= n; steps++) {
    dp[steps] = dp[steps - 1] + dp[steps - 2];
  }

  return dp[n];
}

let n, result;
n = 2;
result = climbStairs(n);
result;

n = 3;
result = climbStairs(n);
result;

n = 4;
result = climbStairs(n);
result;

n = 5;
result = climbStairs(n);
result;
