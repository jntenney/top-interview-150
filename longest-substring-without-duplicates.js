// Given a string s, find the length of the longest substring without duplicate characters.
// A substring is a contiguous sequence of characters within a string.
// Example 1:
// Input: s = "zxyzxyz"
// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.
// Example 2:
// Input: s = "xxxx"
// Output: 1
// Constraints:
// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let maxSubstring = 0;
  let l = 0; // left side of sliding window
  let sub = new Set(); // holds the current substring

  for (let r = 0; r < s.length; r++) {
    if (sub.has(s[r])) {
      while (sub.has(s[r])) {
        // advance left side until there are no duplicates
        sub.delete(s[l]);
        l++;
      }
    }

    // at this point s[r] is not a duplicate, add it in and calculate if we have new max
    sub.add(s[r]);
    maxSubstring = Math.max(maxSubstring, sub.size);
  }

  return maxSubstring;
}

let s;
let result;

s = 'xyzxyz';
result = lengthOfLongestSubstring(s);
result;

s = 'xxxxxxx';
result = lengthOfLongestSubstring(s);
result;

s = 'dvdf';
result = lengthOfLongestSubstring(s);
result;

s = 'abcbdec123';
result = lengthOfLongestSubstring(s);
result;
