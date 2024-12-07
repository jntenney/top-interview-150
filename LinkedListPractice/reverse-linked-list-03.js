// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
// Example 1:
// Input: head = [0,1,2,3]
// Output: [3,2,1,0]
// Example 2:
// Input: head = []
// Output: []
// Constraints:
// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000
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
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {}

let ll, head, result;
head = [0, 1, 2, 3];
ll = createLinkedList(head);
ll;
result = reverseList(ll);
result;

head = [];
ll = createLinkedList(head);
ll;
result = reverseList(ll);
result;
