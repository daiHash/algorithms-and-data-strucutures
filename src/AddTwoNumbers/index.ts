import { ListNode } from '../LinkedList/SinglyLinkedList'

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const AddTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode => {
  let head = new ListNode(0)
  let node = head
  let carry = 0

  while (l1 || l2) {
    const l1Value = l1 ? (l1.value as number) : 0
    const l2Value = l2 ? (l2.value as number) : 0

    const sum = l1Value + l2Value + carry
    carry = 0
    let newValue = sum

    if (sum > 9) {
      newValue = sum % 10
      carry = 1
    }

    node.next = new ListNode(newValue)
    node = node.next

    if (l1) {
      l1 = l1.next
    }

    if (l2) {
      l2 = l2.next
    }
  }

  if (carry) {
    node.next = new ListNode(carry)
  }

  return head.next as ListNode
}

export const BruteAddTwoNumbers = <T extends ListNode | null>(l1: T, l2: T) => {
  const val1 = []
  const val2 = []

  let currentNode1: ListNode | null = l1
  let currentNode2: ListNode | null = l2

  while (currentNode1 !== null || currentNode2 !== null) {
    currentNode1 !== null && val1.push(currentNode1.value)
    currentNode2 !== null && val2.push(currentNode2.value)

    currentNode1 = currentNode1 ? currentNode1.next : null
    currentNode2 = currentNode2 ? currentNode2.next : null
  }

  const result = `${
    BigInt(val1.reverse().join('')) + BigInt(val2.reverse().join(''))
  }`.split('')

  let newNode: ListNode | null = null
  for (let i = 0; i < result.length; i++) {
    let newHead = new ListNode(Number(result[i]))
    newHead.next = newNode
    newNode = newHead
  }

  return newNode
}
