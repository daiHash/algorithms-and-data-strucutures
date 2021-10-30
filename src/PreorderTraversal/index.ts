import { TreeNode } from '../Tree/BinarySearchTree'

/**
 * @param {TreeNode} root
 * @return {number[]}
 * Iterative approach
 */
export const iterativePreorderTraversal = (root: TreeNode | null) => {
  if (!root) return []

  const stack = [root]
  const result = []

  while (stack.length) {
    const node = stack.pop()

    result.push(node?.value)
    if (node?.right) {
      stack.push(node.right)
    }

    if (node?.left) {
      stack.push(node.left)
    }
  }

  return result
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 * Iterative approach
 */
export const recursivePreorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return []

  const result: number[] = []

  const preorder = (node: TreeNode | null) => {
    if (!node) return []

    // Preorder Traversal
    result.push(node.value)

    if (node.left) {
      preorder(node.left)
    }

    // In-order Traversal
    // result.push(node.value)

    if (node.right) {
      preorder(node.right)
    }

    // Post-order Traversal
    // result.push(node.value)
  }

  preorder(root)

  return result
}
