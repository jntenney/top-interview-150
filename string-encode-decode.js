// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]
// Constraints:

// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.
/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let encodedStr = '';
  if (strs.length === 0) return '';

  for (const str of strs) {
    encodedStr += str.length;
    encodedStr += ',';
  }
  encodedStr += '#';

  for (const str of strs) {
    encodedStr += str;
  }

  return encodedStr;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  if (str.length === 0) return [];

  const result = [];
  let preambleEnd = 0;
  while (str[preambleEnd] !== '#') {
    preambleEnd++;
  }

  let preambleStr = str.slice(0, preambleEnd - 1);

  let preambleArray = preambleStr.split(',');

  let wordStart = preambleEnd + 1;
  let wordEnd;

  for (const len of preambleArray) {
    wordEnd = wordStart + parseInt(len);
    result.push(str.slice(wordStart, wordEnd));
    wordStart = wordEnd;
  }
  return result;
}

// let strs = ['neet', 'code', 'love', 'you'];
// let encoded = encode(strs);
// encoded;
// let decoded = decode(encoded);
// decoded;
