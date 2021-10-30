import { AddTwoNumbers } from '.'
import { linkedListFromArray } from '../LinkedList/SinglyLinkedList'

describe.only('AddTwoNumbers', () => {
  test('Should return LinkedList with correct values', () => {
    const inputs = [
      [
        [2, 4, 3],
        [5, 6, 4],
      ],
      [
        [9, 9, 9, 9, 9, 9, 9],
        [9, 9, 9, 9],
      ],
    ]

    const results = [
      linkedListFromArray([7, 0, 8]),
      linkedListFromArray([8, 9, 9, 9, 0, 0, 0, 1]),
    ]

    for (let i = 0; i < inputs.length; i++) {
      expect(
        AddTwoNumbers(
          linkedListFromArray(inputs[i][0]),
          linkedListFromArray(inputs[i][1])
        )
      ).toEqual(results[i])
    }
  })
})
