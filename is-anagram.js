// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true
// Example 2:
// Input: s = "jar", t = "jam"
// Output: false
// Constraints:
// s and t consist of lowercase English letters.

function isAnagram(s, t) {
  function addToMap(c, map) {
    if (map.has(c)) {
      const val = map.get(c);
      map.set(c, val + 1);
    } else {
      map.set(c, 1);
    }
  }

  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    addToMap(s[i], sMap);
    addToMap(t[i], tMap);
  }

  if (sMap.size !== tMap.size) return false;

  for (const key of sMap.keys()) {
    const sValue = sMap.get(key);
    const tValue = tMap.get(key);

    if (sValue !== tValue) return false;
  }

  return true;
}

// let s = 'racecar';
// let t = 'carrace';
// let result = isAnagram(s, t);
// result;

// s = 'jar';
// t = 'jam';
// result = isAnagram(s, t);
// result;
