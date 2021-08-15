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
})
