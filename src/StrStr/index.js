/**
 * [x]] Check if needle is empty is so return 0
 * [] Check that first char in needle is part of haystack:
 * - if part of haystack, check the rest of the needle if it matches the rest of the haystack and return the first index
 * - if not, return -1
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0
  if (needle.length > haystack.length) return -1

  let i = 0
  while (
    haystack.substring(i, needle.length + i) !== needle &&
    i <= haystack.length
  ) {
    i++
  }

  return i > haystack.length ? -1 : i
}

// My try fail some edge cases
const strStr2 = (haystack, needle) => {
  if (!needle) return 0
  if (needle.length > haystack.length) return -1
  let index = null

  for (let i = 0; i < needle.length; i++) {
    const nChar = needle[i]
    // if (index === null && i > 0) return -1
    for (let j = index === null ? 0 : index + i; j < haystack.length; j++) {
      const hChar = haystack[j]

      if (index === null) {
        if (hChar === nChar) {
          index = j
          break
        }
      } else {
        if (hChar !== nChar) {
          return -1
        }
        break
      }
    }
  }

  return index ?? -1
}
