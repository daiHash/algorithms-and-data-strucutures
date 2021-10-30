/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  if (!nums.length) 0

  let p1 = 0

  for (let p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] !== val) {
      nums[p1] = nums[p2]
      p1++
    }
  }
  return p1
}
