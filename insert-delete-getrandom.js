// Implement the RandomizedSet class:
// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.
// Example 1:
// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]
// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
// Constraints:
// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.
const RandomizedSet = function () {
  this.numsMap = new Map();
  this.numsArr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const hasVal = this.numsMap.has(val);

  if (!hasVal) {
    const index = this.numsArr.push(val) - 1; // push onto end of array, index of new item is new array length - 1
    this.numsMap.set(val, index);
  }

  return !hasVal;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const hasVal = this.numsMap.has(val);

  if (hasVal) {
    // get the index of the val we are going to delete
    const index = this.numsMap.get(val);
    // get the last item in the array
    const lastVal = this.numsArr[this.numsArr.length - 1];

    // move the last item to the index of the item we are going to delete
    this.numsArr[index] = lastVal;
    // update the index of the last item because we moved it
    this.numsMap.set(lastVal, index);

    // delete the item out of the map
    this.numsMap.delete(val);
    // delete the last item because we already moved it
    this.numsArr.pop();
  }

  return hasVal;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.numsArr.length);

  return this.numsArr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
let rs = new RandomizedSet();
let result = rs.insert(1);
result;
result = rs.insert(1);
result;
result = rs.insert(2);
result;
result = rs.remove(2);
result;
result = rs.remove(2);
result;
result = rs.getRandom();
result;
