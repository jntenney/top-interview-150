// You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.
// Example 1:
// Input: n = 1
// Output: ["()"]
// Example 2:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// You may return the answer in any order.
// Constraints:
// 1 <= n <= 7
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const parens = [];

  function genParens(l, r, parenSet) {
    if (l === 0 && r === 0) {
      parens.push(parenSet);
    }

    if (l > 0) genParens(l - 1, r, parenSet + '(');
    if (r > l) genParens(l, r - 1, parenSet + ')');
  }

  genParens(n, n, '');

  return parens;
}

// let result = generateParenthesis(1);
// result;

// result = generateParenthesis(2);
// result;

// result = generateParenthesis(3);
// result;
