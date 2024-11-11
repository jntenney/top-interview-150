// You are given an m x n 2-D integer array matrix and an integer target.
// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.
// Can you write a solution that runs in O(log(m * n)) time?
// Example 1:
// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
// Output: true
// Example 2:
// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
// Output: false
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10000 <= matrix[i][j], target <= 10000
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  //binary search to find row which may have target
  //binary search to find target within row

  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {number}
   */
  function searchForRow(matrix, target) {
    // l = left side of segment, inclusive
    // r = right side of segment, exclusive
    // mid = l + distance to center, floor
    // do..while l < r
    let l = 0;
    let r = matrix.length;

    do {
      let mid = Math.floor(l + (r - l) / 2);

      if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
        return mid;
      }

      if (target > matrix[mid][0]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    } while (l < r);

    return -1;
  }

  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {boolean}
   */
  function search(nums, target) {
    // l = left side of segment, inclusive
    // r = right side of segment, exclusive
    // mid = left side + distance to center of segment, floor
    // do...while l < r

    let l = 0;
    let r = nums.length;

    do {
      const mid = Math.floor(l + (r - l) / 2);

      if (nums[mid] === target) return true;

      if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    } while (l < r);

    return false;
  }

  const row = searchForRow(matrix, target);
  if (row === -1) return false;

  return search(matrix[row], target);
}

// let matrix;
// let target;
// let result;
// matrix = [
//   [1, 2, 4, 8],
//   [10, 11, 12, 13],
//   [14, 20, 30, 40],
// ];
// target = 0;
// result = searchMatrix(matrix, target);
// result;
