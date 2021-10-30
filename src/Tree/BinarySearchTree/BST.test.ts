import { BST } from '.'

const BSTFromArray = (array: number[]): BST => {
  const bst = new BST()

  for (const val of array) {
    bst.insert(val)
  }

  return bst
}

describe('BST', () => {
  describe('insert', () => {
    test('Should add the given node as root if root is null', () => {
      const tree = BSTFromArray([21])

      expect(tree.root!.value).toBe(21)
    })

    test('Should add the given node to the left of tree if node value is less than parent node', () => {
      const tree = BSTFromArray([21, 12, 11])

      expect(tree.root!.left!.value).toBe(12)
      expect(tree.root!.left!.left!.value).toBe(11)
    })

    test('Should add the given node to the right of tree if node value is greater than parent node', () => {
      const tree = BSTFromArray([21, 43, 63])

      expect(tree.root!.right!.value).toBe(43)
      expect(tree.root!.right!.right!.value).toBe(63)
    })
  })

  describe('find', () => {
    test('Should return true if tree has the given node value', () => {
      const tree = BSTFromArray([21, 43, 63, 12, 88, 56])
      const result = tree.find(88)

      expect(result).toBeTruthy()
    })

    test("Should return false if tree doesn't have the given node value", () => {
      const tree = BSTFromArray([21, 43, 63, 12, 88, 56])
      const result = tree.find(188)

      expect(result).toBeFalsy()
    })
    test("Should return false if tree doesn't have a root value", () => {
      const tree = new BST()
      const result = tree.find(188)

      expect(result).toBeFalsy()
    })
  })
})
