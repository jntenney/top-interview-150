// You are given an array of integers nums and an integer k. There is a sliding window of size k that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.
// Return a list that contains the maximum element in the window at each step.
// Example 1:
// Input: nums = [1,2,1,0,4,2,6], k = 3
// Output: [2,2,4,4,6]
// Explanation:
// Window position            Max
// ---------------           -----
// [1  2  1] 0  4  2  6        2
//  1 [2  1  0] 4  2  6        2
//  1  2 [1  0  4] 2  6        4
//  1  2  1 [0  4  2] 6        4
//  1  2  1  0 [4  2  6]       6
// Constraints:
// 1 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// 1 <= k <= nums.length

class DequeLL {
  constructor() {
    this.front = this.back = undefined;
  }
  addFront(value) {
    if (!this.front) this.front = this.back = { value };
    else this.front = this.front.next = { value, prev: this.front };
  }
  removeFront() {
    let value = this.peekFront();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.front = this.front.prev).next = undefined;
    return value;
  }
  peekFront() {
    return this.front && this.front.value;
  }
  addBack(value) {
    if (!this.front) this.front = this.back = { value };
    else this.back = this.back.prev = { value, next: this.back };
  }
  removeBack() {
    let value = this.peekBack();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.back = this.back.next).back = undefined;
    return value;
  }
  peekBack() {
    return this.back && this.back.value;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindowSlow(nums, k) {
  let result = [];

  for (let l = 0, r = k; r <= nums.length; l++, r++) {
    result.push(Math.max(...nums.slice(l, r)));
  }

  return result;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const result = new Array(nums.length - k + 1);
  const q = new DequeLL();
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    while (q.front && nums[q.peekBack()] < nums[r]) {
      // while there is something on the queue and the back of queue is less than curr value
      q.removeBack();
    }

    // this value is now max
    q.addBack(r);

    if (l > q.peekFront()) {
      q.removeFront();
    }

    if (r + 1 >= k) {
      result[l] = nums[q.peekFront()];
      l++;
    }
    r++;
  }

  return result;
}

let nums, k, result;
nums = [2, 2, 1, 0, 4, 2, 6];
k = 3;
result = maxSlidingWindowSlow(nums, k);
result;
result = maxSlidingWindow(nums, k);
result;
