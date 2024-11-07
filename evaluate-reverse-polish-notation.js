// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
// Return the integer that represents the evaluation of the expression.
// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:
// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5
// Constraints:
// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];
  const operations = ['+', '-', '*', '/'];

  if (tokens.length < 1) return undefined;

  for (let i = 0; i < tokens.length; i++) {
    const operation = tokens[i];

    if (operations.includes(operation)) {
      let result;
      const op2 = parseInt(stack.pop());
      const op1 = parseInt(stack.pop());

      if (operation === '+') {
        result = op1 + op2;
      }

      if (operation === '-') {
        result = op1 - op2;
      }

      if (operation === '*') {
        result = op1 * op2;
      }

      if (operation === '/') {
        result = Math.trunc(op1 / op2);
      }

      stack.push(result);
    } else {
      stack.push(tokens[i]);
    }
  }

  return parseInt(stack.pop());
}

// let tokens = ['1', '2', '+', '3', '*', '4', '-'];
// let result = evalRPN(tokens);
// result;

// tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
// result = evalRPN(tokens);
// result;

// tokens = ['18'];
// result = evalRPN(tokens);
// result;
