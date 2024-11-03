// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]
// Constraints:

// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.
function groupAnagrams(strs) {
  const groups = [];
  const groupsMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split('').sort().join('');

    if (groupsMap.has(sortedWord)) {
      const words = groupsMap.get(sortedWord);
      words.push(strs[i]);
      groupsMap.set(sortedWord, words);
    } else {
      groupsMap.set(sortedWord, [strs[i]]);
    }
  }

  for (const ga of groupsMap.keys()) {
    groups.push(groupsMap.get(ga));
  }

  return groups;
}

// let strs = ['act', 'pots', 'tops', 'cat', 'stop', 'hat'];
// let result = groupAnagrams(strs);
// result;

// strs = ['x'];
// result = groupAnagrams(strs);
// result;

// strs = [''];
// result = groupAnagrams(strs);
// result;
