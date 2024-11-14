// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
// Example 1:
// Input: prices = [10,1,5,6,7,1]
// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.
// Example 2:
// Input: prices = [10,8,7,5,2]
// Output: 0
// Explanation: No profitable transactions can be made, thus the max profit is 0.
// Constraints:
// 1 <= prices.length <= 100
// 0 <= prices[i] <= 100
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      l = r;
    }
    r++;
  }

  return maxProfit;
}

let prices;
let result;
prices = [10, 8, 7, 5, 2];
result = maxProfit(prices);
result;

prices = [10, 1, 5, 6, 7, 1];
result = maxProfit(prices);
result;

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitBruteForce(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const dailyProfit = prices[j] - prices[i];
      maxProfit = Math.max(dailyProfit, maxProfit);
    }
  }

  return maxProfit;
}
