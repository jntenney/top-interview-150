// You are given an array of k linked lists lists, where each list is sorted in ascending order.
// Return the sorted linked list that is the result of merging all of the individual linked lists.
// Example 1:
// Input: lists = [[1,2,4],[1,3,5],[3,6]]
// Output: [1,1,2,3,3,4,5,6]
// Example 2:
// Input: lists = []
// Output: []
// Example 3:
// Input: lists = [[]]
// Output: []
// Constraints:
// 0 <= lists.length <= 1000
// 0 <= lists[i].length <= 100
// -1000 <= lists[i][j] <= 1000
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
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

  if (lists.length <= 0) return null;
  if (lists.length === 1) return lists[0];

  for (let i = 1; i < lists.length; i++) {
    const mergedList = mergeTwoLists(lists[i], lists[i - 1]);
    lists[i] = mergedList;
  }

  return lists[lists.length - 1];
}

let lists, ll, head, result;

lists = [];
head = [
  [1, 2, 4],
  [1, 3, 5],
  [3, 6],
];

for (const nums of head) {
  ll = createLinkedList(nums);
  lists.push(ll);
}

result = mergeKLists(lists);
result;

lists = [];
head = [[]];

for (const nums of head) {
  ll = createLinkedList(nums);
  lists.push(ll);
}

result = mergeKLists(lists);
result;

lists = [];
head = [];

for (const nums of head) {
  ll = createLinkedList(nums);
  lists.push(ll);
}

result = mergeKLists(lists);
result;
