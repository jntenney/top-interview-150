// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".
// You may assume that the correct output is always unique.
// Example 1:
// Input: s = "OUZODYXAZV", t = "XYZ"
// Output: "YXAZ"
// Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.
// Example 2:
// Input: s = "xyz", t = "xyz"
// Output: "xyz"
// Example 3:
// Input: s = "x", t = "xy"
// Output: ""
// Constraints:
// 1 <= s.length <= 1000
// 1 <= t.length <= 1000
// s and t consist of uppercase and lowercase English letters.
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s.length < t.length) return '';
  if (t.length <= 0) return '';

  const tCharsMap = {};
  const wCharsMap = {};

  // add all the chars in t into hashmap with counts
  for (let i = 0; i < t.length; i++) {
    tCharsMap[t[i]] = tCharsMap[t[i]] ? tCharsMap[t[i]] + 1 : 1;
  }

  let haveChars = 0; // current have chars in window
  let needChars = Object.keys(tCharsMap).length; // count of chars that we need in window
  let curMinWindow = [-1, -1]; // current index of min window with needed chars
  let curMinWinLen = Infinity; // current len of min window with needed chars
  let l = 0; // left side of window

  for (let r = 0; r < s.length; r++) {
    let char = s[r];

    wCharsMap[char] = wCharsMap[char] ? wCharsMap[char] + 1 : 1;

    if (tCharsMap[char] && tCharsMap[char] === wCharsMap[char]) {
      // if char is in t, and the char we just added in window is of equal count, then we found what we needed for that char
      haveChars++;
    }

    while (haveChars === needChars) {
      if (r - l + 1 < curMinWinLen) {
        // we found a window that has a substring of t, and it is a new min substring
        curMinWinLen = r - l + 1;
        curMinWindow = [l, r];
      }

      // decrement count char on left side of window
      wCharsMap[s[l]]--;

      if (tCharsMap[s[l]] && wCharsMap[s[l]] < tCharsMap[s[l]]) {
        // did we remove a char that is needed from window that is in t
        haveChars--;
      }

      // advance left side of window
      l++;
    }
  }

  if (curMinWinLen === Infinity) {
    return '';
  } else {
    return s.slice(curMinWindow[0], curMinWindow[1] + 1);
  }
}

let s, t, result;
s = 'OUZODYXAZV';
t = 'XYZ';
result = minWindow(s, t);
result;

s = 'xyz';
t = 'xyz';
result = minWindow(s, t);
result;

s = 'x';
t = 'xy';
result = minWindow(s, t);
result;
