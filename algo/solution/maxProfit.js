/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
 * e.g. [7, 1, 5, 3, 6, 4] => 7 ( (5-1) + (6-3) = 7 )
 * @param {number[]} prices
 * @return {number}
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
