export class ListNode {
  value: unknown
  next: ListNode | null

  constructor(value: unknown) {
    this.value = value
    this.next = null
  }
}

export const linkedListFromArray = (arr: number[]): ListNode => {
  let head = null
  for (let i = arr.length - 1; i >= 0; --i) {
    let newHead = new ListNode(arr[i])
    newHead.next = head
    head = newHead
  }
  return head as ListNode
}

export class SinglyLinkedList {
  length: number
  head: ListNode | null
  tail: ListNode | null

  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val: unknown) {
    const node = new ListNode(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  shift() {
    if (!this.head) return undefined

    const nextNode = this.head.next
    this.head = nextNode
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return nextNode
  }

  unshift(val: unknown) {
    const newNode = new ListNode(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index: number): ListNode | null {
    if (index < 0 || index >= this.length) return null
    let currentNode = this.head
    let currentIndex = 0
    while (currentNode!.next && currentIndex !== index) {
      currentNode = currentNode!.next
      currentIndex++
    }

    return currentNode
  }

  set(index: number, value: unknown): ListNode | null {
    const node = this.get(index)
    if (!node) return null

    node.value = value

    return node
  }
}
