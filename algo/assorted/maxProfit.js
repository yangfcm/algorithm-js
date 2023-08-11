/**
 * @name maxProfit
 * @description Say you have an array for which the i-th element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * @example [7, 1, 5, 3, 6, 4] => 7 ((5-1) + (6-3) = 7)
 * The array indicates the stock price for each day:
 * +-----------------------------+
 * + D1 | D2 | D3 | D4 | D5 | D6 +
 * +-----------------------------+
 * +  7 |  1 |  5 |  3 |  6 |  4 +
 * +-----------------------------+
 * To gain the max profit, you need to buy stock  at price of 1 on D2 and sell it at price of 5 on D3. You earn 5 - 1 = 4 in this transaction.
 * Then you buy stock at price of 3 on D4 and sell it at price of 6 on D5. You earn 6 - 3 = 3 in this transaction.
 * So in total, the maximum profit you can earn is 4 + 3 = 7.
 * @param {number[]} prices
 * @returns {number} The max profit.
 * @solution First, we need a variable to indicate if you are holding a stock.
 * When you are holding a stock, you can only sell it and when you are not holding a stock, you can only buy it.
 * Iterate the array. For each number(price), check if the next number is bigger than the current number. If it's bigger and you are not holding a stock, buy it.
 * If the next number is smaller than the current number and if you're holding the stock, sell it.
 * Accumulate the profit every time you sell a stock and this is the max profit you can get.
 * @source https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
function solution(prices) {
  let profit = 0;
  let holding = false;
  let buyPrice = 0;
  let sellPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= prices[i + 1] && !holding) {
      // Buy stock
      buyPrice = prices[i];
      holding = true;
    }
    if ((prices[i] > prices[i + 1] || i === prices.length - 1) && holding) {
      // Sell stock and calculate the profit
      // Consider when iteration hits the last element
      sellPrice = prices[i];
      holding = false;
      profit += sellPrice - buyPrice;
      buyPrice = 0;
      sellPrice = 0;
    }
  }
  return profit;
}

module.exports = { solution };
