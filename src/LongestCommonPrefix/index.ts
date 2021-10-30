const longestCommonPrefix = (strs: string[]) => {
  let prefix = ''
  // Check if array is empty if so return prefix
  if (strs.length === 0) prefix

  // Loop through the first word of the array
  for (let i = 0; i < strs[0].length; i++) {
    // Get each character of the first word
    const char = strs[0][i]

    // Loop through each word
    for (let j = 0; j < strs.length; j++) {
      // Check if the character is the same as the first word character, if not return prefix
      if (strs[j][i] !== char) {
        return prefix
      }
    }
    // if all the words have the same char add it to the prefix: ;
    prefix += char
  }
  return prefix
}
