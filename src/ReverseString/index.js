// Write a function that reverses a string. The input string is given as an array of characters s.
// You can use same algorithm to reverse an array
const reverseString = function (s) {
  let start = 0,
    end = s.length - 1
  while (start < end) {
    ;[s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
}
