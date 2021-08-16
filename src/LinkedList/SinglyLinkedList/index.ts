class _Node {
  value: unknown
  next: _Node | null

  constructor(value: unknown) {
    this.value = value
    this.next = null
  }
}

export class SinglyLinkedList {
  length: number
  head: _Node | null
  tail: _Node | null

  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val: unknown) {
    const node = new _Node(val)
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
    const newNode = new _Node(val)
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
}
