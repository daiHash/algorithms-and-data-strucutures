export class TreeNode {
  value: number
  right: TreeNode | null
  left: TreeNode | null

  constructor(value: number) {
    this.value = value
    this.right = null
    this.left = null
  }
}

export class BST {
  root: TreeNode | null

  constructor() {
    this.root = null
  }

  insert(val: number): void {
    if (this.root === null) {
      this.root = new TreeNode(val)
      return
    }

    let currentRoot: TreeNode = this.root

    while (currentRoot) {
      if (val < currentRoot.value) {
        if (!currentRoot.left) {
          currentRoot.left = new TreeNode(val)
          return
        }
        currentRoot = currentRoot.left
      } else if (val > currentRoot.value) {
        if (!currentRoot.right) {
          currentRoot.right = new TreeNode(val)
          return
        }
        currentRoot = currentRoot.right
      } else {
        return
      }
    }
  }

  find(val: number): boolean {
    if (!this.root) return false

    let currentRoot: TreeNode = this.root

    while (currentRoot !== null) {
      console.log({ currentRoot })

      if (val === currentRoot.value) return true

      if (val < currentRoot.value) {
        if (currentRoot.left) {
          if (currentRoot.left.value === val) {
            return true
          }

          currentRoot = currentRoot.left
        }
      } else if (val > currentRoot.value) {
        if (currentRoot.right) {
          if (currentRoot.right.value === val) {
            return true
          }
          currentRoot = currentRoot.right
        }
      }
      // return false
    }
    return false
  }
}
