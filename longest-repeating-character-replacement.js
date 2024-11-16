// You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.
// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
// Example 1:
// Input: s = "XYYX", k = 2
// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.
// Example 2:
// Input: s = "AAABABB", k = 1
// Output: 5
// Constraints:
// 1 <= s.length <= 1000
// 0 <= k <= s.length
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  // l = start of window
  // maxRepeats = current maximum repeating characters with up to k replacements
  // charCount = hashmap of count of each char within the window
  let l = 0;
  let maxRepeats = 0;
  const charCount = {};

  for (let r = 0; r < s.length; r++) {
    // keep track of the count of each char in the window
    charCount[s[r]] = charCount[s[r]] ? charCount[s[r]] + 1 : 1;

    // if the length of the window - most frequent char is greater than k
    // then the window how too many char to replace and becomes invalid
    if (r - l + 1 - Math.max(...Object.values(charCount)) > k) {
      charCount[s[l]] -= 1;
      l++;
    }

    maxRepeats = Math.max(maxRepeats, r - l + 1);
  }

  return maxRepeats;
}

let s;
let k;
let result;

s = 'XYYX';
k = 2;
result = characterReplacement(s, k);
result;

s = 'AAABAABA';
k = 2;
result = characterReplacement(s, k);
result;
