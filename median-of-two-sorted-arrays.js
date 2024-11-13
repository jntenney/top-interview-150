// You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.
// Your solution must run in O(log(m+n)) time.
// Example 1:
// Input: nums1 = [1,2], nums2 = [3]
// Output: 2.0
// Explanation: Among [1, 2, 3] the median is 2.
// Example 2:
// Input: nums1 = [1,3], nums2 = [2,4]
// Output: 2.5
// Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.
// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// -10^6 <= nums1[i], nums2[i] <= 10^6
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let array1 = nums1;
  let array2 = nums2;
  const totalLength = array1.length + array2.length;
  const half = Math.floor((totalLength + 1) / 2);

  // we want array1 to be the smaller length array
  if (array2.length < array1.length) {
    const tmp = array1;
    array1 = array2;
    array2 = tmp;
  }

  let l = 0;
  let r = array1.length;

  while (l <= r) {
    const mid1 = Math.floor((l + r) / 2);
    const mid2 = half - mid1;

    const array1left = mid1 > 0 ? array1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
    const array1right = mid1 < array1.length ? array1[mid1] : Number.MAX_SAFE_INTEGER;
    const array2left = mid2 > 0 ? array2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
    const array2right = mid2 < array2.length ? array2[mid2] : Number.MAX_SAFE_INTEGER;

    if (array1left <= array2right && array2left <= array1right) {
      if (totalLength % 2 !== 0) {
        return Math.max(array1left, array2left);
      }
      return (Math.max(array1left, array2left) + Math.min(array1right, array2right)) / 2;
    } else if (array1left > array2right) {
      r = mid1 - 1;
    } else {
      l = mid1 + 1;
    }
  }

  return -1;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArraysMergedArray(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const mergedArray = new Array(totalLength);

  let index1 = 0;
  let index2 = 0;
  let indexMerged = 0;

  while (indexMerged < totalLength) {
    if (nums1.length === 0) {
      mergedArray[indexMerged] = nums2[index2];
      index2++;
    } else if (nums2.length === 0) {
      mergedArray[indexMerged] = nums1[index1];
      index1++;
    } else if (nums1[index1] <= nums2[index2]) {
      mergedArray[indexMerged] = nums1[index1];
      index1++;
    } else {
      mergedArray[indexMerged] = nums2[index2];
      index2++;
    }
    indexMerged++;
  }

  const middle = Math.floor((totalLength - 1) / 2);

  if (totalLength % 2 === 1) {
    return mergedArray[middle];
  } else {
    return (mergedArray[middle] + mergedArray[middle + 1]) / 2;
  }
}

let nums1;
let nums2;
let result;
nums1 = [1, 3];
nums2 = [2, 4];

result = findMedianSortedArrays(nums1, nums2);
result;
result = findMedianSortedArraysMergedArray(nums1, nums2);
result;

nums1 = [1, 2];
nums2 = [3];

result = findMedianSortedArrays(nums1, nums2);
result;
result = findMedianSortedArraysMergedArray(nums1, nums2);
result;

nums1 = [1, 2];
nums2 = [];

result = findMedianSortedArrays(nums1, nums2);
result;
result = findMedianSortedArraysMergedArray(nums1, nums2);
result;

nums1 = [];
nums2 = [3, 4, 5];

result = findMedianSortedArrays(nums1, nums2);
result;
result = findMedianSortedArraysMergedArray(nums1, nums2);
result;
