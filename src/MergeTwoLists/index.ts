/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from '../LinkedList/SinglyLinkedList'

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1: ListNode, l2: ListNode) => {
  if (!l1) return l2
  if (!l2) return l1
  let mergedNode = new ListNode(null)
  let result = mergedNode

  let ln1 = l1,
    ln2 = l2

  while (ln1 && ln2) {
    const val1 = ln1.value as number,
      val2 = ln2.value as number
    if (val1 < val2) {
      mergedNode.next = new ListNode(val1)
      mergedNode = mergedNode.next
      ln1 = ln1.next as ListNode
    } else if (val1 > val2) {
      mergedNode.next = new ListNode(val2)
      mergedNode = mergedNode.next
      ln2 = ln2.next as ListNode
    } else {
      mergedNode.next = new ListNode(val1)
      mergedNode = mergedNode.next
      ln1 = ln1.next as ListNode

      mergedNode.next = new ListNode(val2)
      mergedNode = mergedNode.next
      ln2 = ln2.next as ListNode
    }
  }
  if (ln1) mergedNode.next = ln1
  if (ln2) mergedNode.next = ln2

  return result.next
}
