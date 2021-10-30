/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
 * @param {number[]} nums
 * @return {number}
 */
const maximumSubarray = (nums) => {
  let currentSum = nums[0]
  let largestSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    if (currentSum > largestSum) {
      largestSum = currentSum
    }
  }
  return largestSum
}
