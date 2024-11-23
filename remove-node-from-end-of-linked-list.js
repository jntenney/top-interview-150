// You are given the beginning of a linked list head, and an integer n.
// Remove the nth node from the end of the list and return the beginning of the list.
// Example 1:
// Input: head = [1,2,3,4], n = 2
// Output: [1,2,4]
// Example 2:
// Input: head = [5], n = 1
// Output: []
// Example 3:
// Input: head = [1,2], n = 2
// Output: [2]
// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (!head) return head;
  if (n <= 0) return head;

  let newHead = new ListNode();
  newHead.next = head;

  let fNode = newHead; // front node
  let bNode = newHead; // back node

  // move the front node forward by n + 1 nodes so that back node will be position to delete it's next node
  let count = 0;
  for (count = 0; count < n + 1 && fNode; count++) {
    fNode = fNode.next;
  }

  // if there are less than n nodes in the list then just return the head without removing nth node
  if (count - 1 !== n) return head;

  // now advance both pointers until front node reaches the end of the list
  while (fNode) {
    fNode = fNode.next;
    bNode = bNode.next;
  }

  // delete the appropriate node from the list
  bNode.next = bNode.next.next;

  // return the (potentially new) head of the list
  return newHead.next;
}

let ll, head, n, result;
head = [1, 2, 3, 4];
n = 2;
ll = createLinkedList(head);
result = removeNthFromEnd(ll, n);
result;

head = [5];
n = 1;
ll = createLinkedList(head);
result = removeNthFromEnd(ll, n);
result;

head = [1, 3, 5];
n = 1;
ll = createLinkedList(head);
result = removeNthFromEnd(ll, n);
result;
