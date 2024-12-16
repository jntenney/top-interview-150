// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
// Constraints:
// 1 <= n <= 104
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const map = { div3div5: 'FizzBuzz', div3not5: 'Fizz', not3div5: 'Buzz' };
  const result = [];
  for (let i = 1; i <= n; i++) {
    let key = '';

    key += i % 3 === 0 ? 'div3' : 'not3';
    key += i % 5 === 0 ? 'div5' : 'not5';

    if (key in map) {
      result.push(map[key]);
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz2 = function (n) {
  const result = new Array(n);
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i - 1] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      result[i - 1] = 'Fizz';
    } else if (i % 5 === 0) {
      result[i - 1] = 'Buzz';
    } else {
      result[i - 1] = i.toString();
    }
  }

  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz3 = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

let n, result;
n = 3;
result = fizzBuzz(n);
result;
result = fizzBuzz2(n);
result;
result = fizzBuzz3(n);
result;

n = 15;
result = fizzBuzz(n);
result;
result = fizzBuzz2(n);
result;
result = fizzBuzz3(n);
result;
