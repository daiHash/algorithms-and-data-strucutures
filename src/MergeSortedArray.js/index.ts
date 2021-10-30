const mergeSortedArrays = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  let nums1Pointer = m - 1
  let nums2Pointer = n - 1
  let i = m + n - 1

  while (nums2Pointer >= 0) {
    let nums1Val = nums1[nums1Pointer]
    let nums2Val = nums2[nums2Pointer]

    if (nums1Val > nums2Val) {
      nums1[i] = nums1Val
      i--
      nums1Pointer--
    } else {
      nums1[i] = nums2Val
      i--
      nums2Pointer--
    }
  }
}
