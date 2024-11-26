// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]
// Constraints:
// 1 <= numRows <= 30
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const pt = new Array(numRows);
  if (numRows <= 0) return pt;

  pt[0] = [1];

  for (let row = 1; row < numRows; row++) {
    const newRow = new Array(row + 1);

    for (let index = 0; index < row + 1; index++) {
      const lindex = index - 1;
      const rindex = index;

      const lval = pt[row - 1][lindex] ? pt[row - 1][lindex] : 0;
      const rval = pt[row - 1][rindex] ? pt[row - 1][rindex] : 0;

      newRow[index] = lval + rval;
    }

    pt[row] = newRow;
  }

  return pt;
};

let numRows, result;
numRows = 5;
result = generate(numRows);
result;

numRows = 1;
result = generate(numRows);
result;

numRows = 7;
result = generate(numRows);
result;

numRows = 10;
result = generate(numRows);
result;
console.log(result[9]);
