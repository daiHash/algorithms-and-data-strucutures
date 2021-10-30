/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
Input: nums = [1,3,5,6], target = 5
Output: 2
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Brute force / linear version
const searchInsertPosition1 = (nums, target) => {
  if (!nums.includes(target)) {
    if (target < nums[0]) {
      return 0
    }

    if (target > nums[nums.length - 1]) {
      return nums.length
    }

    for (let i = 0; i < nums.length; i++) {
      if (target > nums[i] && target <= nums[i + 1]) {
        return i + 1
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i
    }
  }
}
// Using Binary Search
const searchInsertPosition = (nums, target) => {
  let p1 = 0,
    p2 = nums.length

  while (p1 <= p2) {
    const middle = Math.floor((p1 + p2) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] < target) {
      p1++
    } else {
      p2--
    }
  }

  return p1
}
