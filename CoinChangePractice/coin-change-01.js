// You are given an integer array coins representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer amount representing a target amount of money.
// Return the fewest number of coins that you need to make up the exact target amount. If it is impossible to make up the amount, return -1.
// You may assume that you have an unlimited number of each coin.
// Example 1:
// Input: coins = [1,5,10], amount = 12
// Output: 3
// Explanation: 12 = 10 + 1 + 1. Note that we do not have to use every kind coin available.
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Explanation: The amount of 3 cannot be made up with coins of 2.
// Example 3:
// Input: coins = [1], amount = 0
// Output: 0
// Explanation: Choosing 0 coins is a valid way to make up 0.
// Constraints:
// 1 <= coins.length <= 10
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10000
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  let minCoinsNeeded = Infinity;
  let storage = {};

  function coinsNeeded(amount) {
    if (amount === 0) return 0;
    if (amount < 0) return Infinity;
    if (storage[amount]) return storage[amount];

    let minNeeded = Infinity; // Infinity means no path to zero exists

    for (const coin of coins) {
      let min = 1 + coinsNeeded(amount - coin);

      minNeeded = Math.min(minNeeded, min);
    }

    // use storage Object for memoization
    storage[amount] = minNeeded;

    return minNeeded;
  }

  minCoinsNeeded = coinsNeeded(amount);

  if (minCoinsNeeded === Infinity) {
    return -1;
  } else {
    return minCoinsNeeded;
  }
}

let coins, amount, result;
coins = [1, 3, 4, 5];
amount = 7;
result = coinChange(coins, amount);
result;

coins = [1, 5, 10];
amount = 12;
result = coinChange(coins, amount);
result;

coins = [2];
amount = 11;
result = coinChange(coins, amount);
result;

coins = [2];
amount = 0;
result = coinChange(coins, amount);
result;
