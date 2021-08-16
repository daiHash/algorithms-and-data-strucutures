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

  describe('unshift()', () => {
    test('Should set head and tail with passed value if head is null', () => {
      const list = new SinglyLinkedList()
      list.unshift('test')

      expect(list.head!.value).toBe('test')
      expect(list.tail!.value).toBe('test')
    })

    test('Should add to the head if list is not empty', () => {
      const list = new SinglyLinkedList()
      list.unshift('test')
      list.unshift('testing')

      expect(list.head!.value).toBe('testing')
      expect(list.head!.next!.value).toBe('test')
      expect(list.tail!.value).toBe('test')
    })

    test('Should increment length', () => {
      const list = new SinglyLinkedList()
      list.unshift('test')
      list.unshift('testing')
      list.unshift('tests')

      expect(list.length).toBe(3)
    })
  })

  describe.only('get()', () => {
    test("should return null if node of given index doesn't exist", () => {
      const list = new SinglyLinkedList()
      list.push('A')
      list.push('B')
      list.push('C')
      list.push('D')
      list.push('E')

      const result = list.get(10)

      expect(result).toBeNull()
    })

    test('should return null if given index is less than zero or greater than or equal to the length of the list', () => {
      const list = new SinglyLinkedList()
      list.push('A')
      list.push('B')
      list.push('C')
      list.push('D')
      list.push('E')

      const result1 = list.get(-1)
      const result2 = list.get(100)

      expect(result1).toBeNull()
      expect(result2).toBeNull()
    })

    test('should return node of given index', () => {
      const list = new SinglyLinkedList()
      list.push('A')
      list.push('B')
      list.push('C')
      list.push('D')
      list.push('E')

      const result = list.get(2)
      expect(result!.value).toBe('C')
      expect(result!.next!.value).toBe('D')

      const result2 = list.get(4)
      expect(result2!.value).toBe('E')
      expect(result2!.next).toBeNull
    })
  })
})
