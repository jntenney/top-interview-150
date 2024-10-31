// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = '';

  if (strs.length === 0) {
    return prefix;
  }

  // loop over each char in the first word in the array
  for (let i = 0; i < strs[0].length; i++) {
    // loop over the rest of the words in the array
    // check if the ith letter of the first word is the same as the ith letter of the rest of the words
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] === strs[j][i]) {
        continue;
      } else {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }

  return prefix;
};

// let strs = ['dog', 'flight1', 'flight'];
// let result = longestCommonPrefix(strs);
// result;
