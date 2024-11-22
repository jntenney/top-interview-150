// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.
// The new list should be made up of nodes from list1 and list2.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,5]
// Output: [1,1,2,3,4,5]
// Example 2:
// Input: list1 = [], list2 = [1,2]
// Output: [1,2]
// Example 3:
// Input: list1 = [], list2 = []
// Output: []
// Constraints:
// 0 <= The length of the each list <= 100.
// -100 <= Node.val <= 100
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  // create a temp node to keep track of the new head
  // create a current node to keep track of current position in newly merged list
  // if list1.val < list2.val set current node.next appropriately, advance list1, list2 appropriately, advance curr node to node.next
  let temp = new ListNode();
  let node = temp;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }

  // make sure to include any remaining items from list that is not exhausted yet
  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  return temp.next;
}

let ll1, ll2, list1, list2, result;
list1 = [1, 2, 4];
list2 = [1, 3, 5];
ll1 = createLinkedList(list1);
ll1;
ll2 = createLinkedList(list2);
ll2;

result = mergeTwoLists(ll1, ll2);
result;
