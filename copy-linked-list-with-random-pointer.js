// You are given the head of a linked list of length n. Unlike a singly linked list, each node contains an additional pointer random, which may point to any node in the list, or null.
// Create a deep copy of the list.
// The deep copy should consist of exactly n new nodes, each including:
// The original value val of the copied node
// A next pointer to the new node corresponding to the next pointer of the original node
// A random pointer to the new node corresponding to the random pointer of the original node
// Note: None of the pointers in the new list should point to nodes in the original list.
// Return the head of the copied linked list.
// In the examples, the linked list is represented as a list of n nodes. Each node is represented as a pair of [val, random_index] where random_index is the index of the node (0-indexed) that the random pointer points to, or null if it does not point to any node.
// Example 1:
// Input: head = [[3,null],[7,3],[4,0],[5,1]]
// Output: [[3,null],[7,3],[4,0],[5,1]]
// Example 2:
// Input: head = [[1,null],[2,2],[3,2]]
// Output: [[1,null],[2,2],[3,2]]
// Constraints:
// 0 <= n <= 100
// -100 <= Node.val <= 100
// random is null or is pointing to some node in the linked list.
class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
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
    head = new Node(nums[i], prev);
    prev = head;
  }

  return head;
}

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  let curr = head;
  let prev = null;
  const map = new Map();

  while (curr) {
    const newNode = new Node(curr.val);

    if (curr.random !== null) {
      if (map.get(curr.random)) {
        const newRandom = map.get(curr.random);
        newNode.random = newRandom;
      } else {
        const newRandom = new Node(curr.random.val);
        newNode.random = newRandom;
        map.set(curr.random, newRandom);
      }
    }
    map.set(curr, newNode);

    if (prev !== null) {
      prevNewNode = map.get(prev);

      prevNewNode.next = newNode;
    }

    prev = curr;
    curr = curr.next;
  }

  return map.get(head);
}

let ll2, ll, head, result;
head = [3, 7, 4, 5];
ll = createLinkedList(head);
ll.random = ll.next.next.next.next;
ll.next.random = ll.next.next.next;
ll.next.next.random = ll.next;
ll.next.next.next.random = ll;

result = copyRandomList(ll);
result;
