/**
 * @param {number[]} nums
 * @return {number}
 */

/*
- Should modify input array only
- keep the count of unique values in k
- Loop through nums an remove duplicates and push it as _ to the input array
- return k
*/
// With while loop
const removeDuplicates = function (nums) {
  if (!nums.length) return 0
  let p1 = 0,
    p2 = 1

  while (p2 < nums.length) {
    if (nums[p1] === nums[p2]) {
      p2++
    } else {
      nums[p1 + 1] = nums[p2]
      p1++
    }
  }

  return p1 + 1
}

// With for loop
const removeDuplicates2 = function (nums) {
  if (!nums.length) return 0
  let p1 = 0

  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++
      nums[p1] = nums[p2]
    }
  }

  return p1 + 1
}
