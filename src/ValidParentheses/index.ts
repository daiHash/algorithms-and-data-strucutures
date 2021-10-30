const validParentheses = (str: string) => {
  // Dictionary to reference each opening bracket closing bracket
  const brackets: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  // Heap to keep track of each closing bracket
  const heap = []

  // Loop through the string
  for (const char of str) {
    const currentChar = brackets[char]

    // Check if current char is a correct opening bracket
    if (currentChar) {
      // If correct opening bracket push the respective closing bracket to the heap
      heap.push(currentChar)
    } else {
      // If not an opening bracket, pop the last element in the Heap
      // and check if the current char matches the closing bracket, if not then
      // its not correct and return false
      if (heap.pop() !== char) {
        return false
      }
    }
  }

  // If there any char in the heap then is not valid and return false else is valid so return true
  return !heap.length
}
