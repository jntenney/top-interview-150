/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function convertToNum(ll) {
    let numAsStr = '';
    while (ll) {
      const value = ll.val;

      numAsStr = value.toString() + numAsStr;

      ll = ll.next;
    }

    return BigInt(numAsStr);
  }

  const num1 = convertToNum(l1);
  const num2 = convertToNum(l2);
  const result = num1 + num2;
  const resultArr = result.toString().split('');

  let head = undefined;
  for (let i = 0; i < resultArr.length; i++) {
    const node = new ListNode(parseInt(resultArr[i]), head);
    head = node;
  }

  return head;
};

function convertArrayToLL(nums) {
  let head = undefined;
  for (let i = nums.length - 1; i >= 0; i--) {
    const node = new ListNode(parseInt(nums[i]), head);
    head = node;
  }

  return head;
}

// const l1 = new ListNode(2, temp2);
const l1 = convertArrayToLL([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
]);

l1;

let l2 = convertArrayToLL([5, 6, 4]);
// const l2 = new ListNode(5, temp3);
l2;

let result = addTwoNumbers(l1, l2);
result;
