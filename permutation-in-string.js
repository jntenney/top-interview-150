// You are given two strings s1 and s2.
// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
// Both strings only contain lowercase letters.
// Example 1:
// Input: s1 = "abc", s2 = "lecabee"
// Output: true
// Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".
// Example 2:
// Input: s1 = "abc", s2 = "lecaabee"
// Output: false
// Constraints:
// 1 <= s1.length, s2.length <= 1000
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const m1 = {};
  const m2 = {};
  let hasPerm = false;

  // initalize the count of each char in s1
  for (let i = 0; i < s1.length; i++) {
    m1[s1[i]] = m1[s1[i]] ? m1[s1[i]] + 1 : 1;
  }

  let l = 0;
  for (let r = 0; r < s2.length; r++) {
    if (r < s1.length - 1) {
      // add at lest s1.length-1 chars at first
      m2[s2[r]] = m2[s2[r]] ? m2[s2[r]] + 1 : 1;
      continue;
    } else {
      m2[s2[r]] = m2[s2[r]] ? m2[s2[r]] + 1 : 1;
    }

    hasPerm = true;
    for (const key of Object.keys(m1)) {
      if (m1[key] !== m2[key]) {
        hasPerm = false;
        break;
      }
    }

    if (hasPerm === true) {
      break;
    } else {
      m2[s2[l]] -= 1;
      l++;
    }
  }

  return hasPerm;
}

let s1, s2, result;
s1 = 'adc';
s2 = 'dcda';
result = checkInclusion(s1, s2);
result;

s1 = 'abc';
s2 = 'lecabee';
result = checkInclusion(s1, s2);
result;

s1 = 'abc';
s2 = 'lecaabee';
result = checkInclusion(s1, s2);
result;
