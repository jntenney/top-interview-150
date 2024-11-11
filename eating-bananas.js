// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.
// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.
// Return the minimum integer k such that you can eat all the bananas within h hours.
// Example 1:
// Input: piles = [1,4,3,2], h = 9
// Output: 2
// Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1, you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.
// Example 2:
// Input: piles = [25,10,23,4], h = 4
// Output: 25
// Constraints:
// 1 <= piles.length <= 1,000
// piles.length <= h <= 1,000,000
// 1 <= piles[i] <= 1,000,000,000
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingrateToEatBananasSlow(piles, h) {
  // start with eating one banana an hour
  // if it takes longer than h hours then
  // increase the number of bananas an hour until we eat all bananas in h hours
  let rateToEatBananas = 1;
  while (true) {
    let hoursTaken = 0;

    for (let i = 0; i < piles.length; i++) {
      hoursTaken += Math.ceil(piles[i] / rateToEatBananas);
    }

    if (hoursTaken > h) {
      rateToEatBananas++;
    } else {
      return rateToEatBananas;
    }
  }
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingrateToEatBananas(piles, h) {
  // find the max number of bananas in the piles
  // binary search across 1 to the max number of bananas to find the minimum
  // that can be eaten in h hours
  let maxInPiles = Math.max(...piles);

  let l = 1;
  let r = maxInPiles;
  let rateToEatBananas = maxInPiles;

  while (l <= r) {
    const rateToEat = Math.floor((l + r) / 2);
    let hoursTaken = 0;

    for (let i = 0; i < piles.length; i++) {
      hoursTaken += Math.ceil(piles[i] / rateToEat);
    }

    if (hoursTaken > h) {
      l = rateToEat + 1;
    } else {
      rateToEatBananas = Math.min(rateToEatBananas, rateToEat);
      r = rateToEat - 1;
    }
  }

  return rateToEatBananas;
}

let piles;
let h;
let result;

piles = [1, 4, 3, 2];

h = 9;
result = minEatingrateToEatBananas(piles, h);
result;

piles = [25, 10, 23, 4];
h = 4;
result = minEatingrateToEatBananas(piles, h);
result;

piles = [3, 6, 7, 11];
h = 8;
result = minEatingrateToEatBananas(piles, h);
result;