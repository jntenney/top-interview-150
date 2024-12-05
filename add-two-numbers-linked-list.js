// You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.
// The digits are stored in reverse order, e.g. the number 123 is represented as 3 -> 2 -> 1 -> in the linked list.
// Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Return the sum of the two numbers as a linked list.
// Example 1:
// Input: l1 = [1,2,3], l2 = [4,5,6]
// Output: [5,7,9]
// Explanation: 321 + 654 = 975.
// Example 2:
// Input: l1 = [9], l2 = [9]
// Output: [8,1]
// Constraints:
// 1 <= l1.length, l2.length <= 100.
// 0 <= Node.val <= 9
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {number[]} nums
 * @return {ListNode}
 */
function createLinkedList(nums) {
  let prev = null;
  let head = null;

  for (let i = nums.length - 1; i >= 0; i--) {
    head = new ListNode(nums[i], prev);
    prev = head;
  }

  return head;
}

/**
 * @param {number[]} nums
 * @return {ListNode}
 */
function createReverseLinkedList(nums) {
  let prev = null;
  let head = null;

  for (let i = 0; i < nums.length; i++) {
    head = new ListNode(nums[i], prev);
    prev = head;
  }

  return head;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const head = new ListNode(0);
  let curr = head;
  let ll1 = l1;
  let ll2 = l2;

  let carry = 0;

  while (ll1 && ll2) {
    let sum = ll1.val + ll2.val + carry;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    curr.next = new ListNode(sum);
    curr = curr.next;
    ll1 = ll1.next;
    ll2 = ll2.next;
  }

  let ll = ll1 ? ll1 : ll2;
  if (ll) {
    while (ll) {
      let sum = ll.val + carry;

      if (sum > 9) {
        sum -= 10;
        carry = 1;
      } else {
        carry = 0;
      }

      curr.next = new ListNode(sum);
      curr = curr.next;
      ll = ll.next;
    }
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
    curr = curr.next;
  }

  return head.next;
}

let ll1, ll2, l1, l2, result;
l1 = [1, 2, 3];
l2 = [4, 5, 6];

ll1 = createReverseLinkedList(l1);
ll1;

ll2 = createReverseLinkedList(l2);
ll2;

result = addTwoNumbers(ll1, ll2);
result;
