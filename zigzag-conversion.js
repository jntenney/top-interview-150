// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"
// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let zStr = '';
  const jump = (numRows - 1) * 2;

  for (let row = 0; row < numRows; row++) {
    for (let index = row; index < s.length; index += jump) {
      zStr += s[index];

      // if we are in a middle row, ie, not first or last
      // then get the next char that will be in this row
      if (row > 0 && row < numRows - 1) {
        const rowIndex = index + jump - 2 * row;

        if (rowIndex >= 0 && rowIndex < s.length) {
          zStr += s[rowIndex];
        }
      }
    }
  }

  return zStr;
};

//"PAYPALISHIRING"
//
//0,0       0,4       0,8        0,12
//1,0  1,2  1,4  1,6  1,8  1,10  1,12
//2,0       2,4       2,8
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
//"PAHNAPLSIIGYIR"

//"PAYPALISHIRING", l = 14
//
//0,0            0,6
//1,0       1,4  1,6
//2,0  2,2       2,6
//3,0            3,6
//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
//
//"PINALSIGYAHRPI"
let s, numRows, result;

s = 'PAYPALISHIRING';
numRows = 3;
result = convert(s, numRows);
result;

s = 'PAYPALISHIRING';
numRows = 4;
result = convert(s, numRows);
result;

s = 'PAYPALISHIRING';
numRows = 2;
result = convert(s, numRows);
result;
