/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 *
 * Example:
 * Input: prices = [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  Total profit is 4 + 3 = 7.
 */

/**
 * - Keep track of the sum of the max profit we can get and return it as integer
 * - each number in the array represent a day and its price
 * - first need to find the first lowest price and then seek for the hi
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0
  if (prices.length <= 1) {
    return profit
  }

  let p1 = 0,
    p2 = 1

  while (p2 < prices.length) {
    if (prices[p1] >= prices[p2]) {
      p1++
      p2++
    } else {
      if (prices[p2 + 1] !== undefined) {
        if (prices[p2] < prices[p2 + 1]) {
          p2++
        } else {
          profit += prices[p2] - prices[p1]
          p1 = p2 + 1
          p2 = p1 + 1
        }
      } else {
        profit += prices[p2] - prices[p1]
        break
      }
    }
  }

  return profit
}
