// You are given the head of a singly linked-list.
// The positions of a linked list of length = 7 for example, can intially be represented as:
// [0, 1, 2, 3, 4, 5, 6]
// Reorder the nodes of the linked list to be in the following order:
// [0, 6, 1, 5, 2, 4, 3]
// Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
// [0, n-1, 1, n-2, 2, n-3, ...]
// You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.
// Example 1:
// Input: head = [2,4,6,8]
// Output: [2,8,4,6]
// Example 2:
// Input: head = [2,4,6,8,10]
// Output: [2,10,4,8,6]
// Constraints:
// 1 <= Length of the list <= 1000.
// 1 <= Node.val <= 1000
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
 * @return {void}
 */
function reorderList(head) {
  function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
      let temp = curr.next;

      curr.next = prev;
      prev = curr;

      curr = temp;
    }

    return prev;
  }
  // use slow, fast pointer (*2) to find middle of list
  // reverse 2nd half of list
  // merge two list according to requirements, constraints

  let slow = head;
  let fast = head.next;

  // advance slow to middle of the list using fast pointer
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // get the middle of the list in head2
  let head2 = slow.next;

  // add tail to first half of the list
  slow.next = null;

  // reverse 2nd half of the list
  head2 = reverseList(head2);
  let head1 = head;

  let fromFirst = true;
  while (head1 && head2) {
    if (fromFirst) {
      let temp = head1.next;
      head1.next = head2;
      head1 = temp;
    } else {
      let temp = head2.next;
      head2.next = head1;
      head2 = temp;
    }

    fromFirst = !fromFirst;
  }
}

let ll, head, result;

head = [2, 4, 6, 8];
ll = createLinkedList(head);
result = reorderList(ll);
ll;

head = [2, 4, 6, 8, 10];
ll = createLinkedList(head);
result = reorderList(ll);
ll;
