/**
 * @param {number} n
 * @return {string}
 */
/**
 * Sequence
 * 1. 1
 * 2. 11
 * 3. 21
 * 4. 1211
 * 5. 111221
 *
 * - Return the respective row of the sequence according to the given n values.
 * - check for contiguous values of each value
 * - repeat n times the sequence and return its value as string
 */
const countAndSay = (n) => {
  let res = '1'
  if (n === 1) return res

  let p1 = 0,
    p2 = 1
  let strInProgress = ''
  while (n > 1) {
    if (res[p1] !== undefined && res[p1] === res[p2]) {
      p2++
    } else {
      if (p1 < res.length) {
        strInProgress += `${p2 - p1}${res[p1]}`
        p1 = p2
        p2++
      } else {
        res = strInProgress
        strInProgress = ''
        p1 = 0
        p2 = 1
        n--
      }
    }
  }

  return res
}
