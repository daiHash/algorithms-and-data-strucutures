/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 * @param {number[]} digits
 * @return {number[]}
 */

/**
 * - Loop from the bottom of the given array
 * - add one to the last digit:
 *  - if digit equal to 9 change digit to 0 and carry one in a variable
 * - While looping through the each digit check if theres a carry
 *  - If carry add it to current digit and if current digit equal to 9 set carry to 1
 * - return array of digits with one added
 */
const plusOne1 = (digits) => {
  let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carry === 9) {
      carry = 1
      digits[i] = 0
    } else {
      if (i === digits.length - 1) {
        carry = 0
        digits[i] += 1
      } else {
        if (carry > 0) {
          digits[i] += 1
        }
      }
    }

    if (carry < 0 && i === 0) {
      digits.unshift(1)
    }
  }

  return digits
}

const plusOne2 = (digits) => {
  const lastNumIndex = digits.length - 1
  let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + (lastNumIndex === i ? 1 : carry)
    carry = 0
    let newValue = sum
    if (sum > 9) {
      newValue = sum % 10
      carry = 1
    }

    digits[i] = newValue

    if (i === 0 && sum > 9) {
      digits.unshift(1)
    }
  }

  return digits
}
