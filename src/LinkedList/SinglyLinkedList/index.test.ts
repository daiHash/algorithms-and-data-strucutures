import { SinglyLinkedList } from '.'

describe('Singly Linked List', () => {
  describe('push()', () => {
    test('Should set head and tail with passed value if head is null', () => {
      const list = new SinglyLinkedList()
      list.push('test')

      expect(list.head!.value).toBe('test')
      expect(list.tail!.value).toBe('test')
    })

    test("Should set head's next property and tail with new Node if head already exist", () => {
      const list = new SinglyLinkedList()
      list.push('test')
      list.push('testing')

      expect(list.head!.next!.value).toBe('testing')
      expect(list.tail!.value).toBe('testing')
    })

    test('Should increment length', () => {
      const list = new SinglyLinkedList()
      list.push('test')
      list.push('testing')
      list.push('tests')

      expect(list.length).toBe(3)
    })
  })

  describe('pop()', () => {
    test('Should return undefined if list is empty', () => {
      const list = new SinglyLinkedList()
      const result = list.pop()

      expect(result).toBeUndefined()
    })

    test('Should remove the last node', () => {
      const list = new SinglyLinkedList()
      list.push('test')
      list.push('testing')

      expect(list.head!.next!.value).toBe('testing')
      expect(list.tail!.value).toBe('testing')

      list.pop()

      expect(list.head!.next).toBeNull
      expect(list.tail!.value).toBe('test')
    })

    test('Should decrement length', () => {
      const list = new SinglyLinkedList()
      list.push('test')
      list.push('testing')
      list.push('tests')

      expect(list.length).toBe(3)
      list.pop()
      expect(list.length).toBe(2)

      list.pop()
      expect(list.length).toBe(1)
    })
  })

  describe('shift()', () => {
    test('Should return undefined if list is empty', () => {
      const list = new SinglyLinkedList()
      const result = list.shift()

      expect(result).toBeUndefined()
    })

    test('Should remove the head node', () => {
      const list = new SinglyLinkedList()
      list.push('test')
      list.push('testing')

      expect(list.head!.value).toBe('test')
      expect(list.tail!.value).toBe('testing')

      list.shift()

      expect(list.head!.value).toBe('testing')
    })

    test('Should decrement length', () => {
      const list = new SinglyLinkedList()
      list.push('test')
      list.push('testing')
      list.push('tests')

      expect(list.length).toBe(3)
      list.shift()
      expect(list.length).toBe(2)

      list.shift()
      expect(list.length).toBe(1)
    })
  })
})
