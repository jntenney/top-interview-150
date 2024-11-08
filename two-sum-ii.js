// Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2.
// Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.
// Your solution must use
// O(1) additional space.
// Example 1:
// Input: numbers = [1,2,3,4], target = 3
// Output: [1,2]
// Explanation:
// The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].
// Constraints:
// 2 <= numbers.length <= 1000
// -1000 <= numbers[i] <= 1000
// -1000 <= target <= 1000
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];

    if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }

  return undefined;
}

function twoSum2(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    // what is the other part of the sum to find
    let operand2 = target - numbers[i];

    for (let j = 0; j < numbers.length; j++) {
      // make sure not to use the same index twice
      if (j !== i) {
        if (numbers[j] === operand2) {
          // make sure the found indices are 1-index & returned in smallest to largest order
          if (i < j) {
            return [i + 1, j + 1];
          } else {
            return [j + 1, i + 1];
          }
        }
      }
    }
  }

  return undefined;
}

// let numbers = [1, 2, 3, 4];
// let target = 3;
// let result = twoSum(numbers, target);
// result;
