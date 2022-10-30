/**
 * @name minTime
 * @description You are planning production for an order.
 * You have a number of machines that each have a fixed number of days to produce an item.
 * Given that all the machines operate simultaneously,
 * determine the minimum number of days to produce the required order.
 * @example machines = [2, 3, 2], goal = 10 -> 8
 * There are three machines, and machine 1 and 3 needs to spend 2 days to produce one item;
 * machine 2 spend 3 days to product one item.
 * The schedule is as below:
 * Day | Production | Finished items
 * ---------------------------------
 * 1   | 0          | 0
 * 2   | 2          | 2
 * 3   | 1          | 3
 * 4   | 2          | 5
 * 5   | 0          | 5
 * 6   | 3          | 8
 * 7   | 0          | 8
 * 8   | 2          | 10
 * So on day 8, we can product 10 items which reaches the goal.
 * @solution Use the concept of binary search.
 * @param {array} machines
 * @param {number} goal
 * @returns The minimum days required to product the target items.
 * @source https://www.hackerrank.com/challenges/minimum-time-required
 */
function solution(machines, goal) {
  let days = 0;
  let minDays = Math.floor((goal * Math.min(...machines)) / machines.length);
  let maxDays = Math.floor((goal * Math.max(...machines)) / machines.length);
  while (true) {
    let mid = Math.floor((minDays + maxDays) / 2);
    if (minDays === mid || maxDays === mid) {
      break;
    }
    if (dailyOutcome(machines, mid) < goal) {
      minDays = mid;
    } else {
      maxDays = mid;
    }
    days = Math.max(minDays, maxDays);
  }
  return days;
}

/**
 * @name dailyOutcome
 * @description Helper function.
 * It calculates how many items are produced by the end of k-th day with the given machines.
 * @param {array} machines
 * @param {number} k
 * @returns The number of items produced
 */
function dailyOutcome(machines, k) {
  let items = 0;
  for (let m of machines) {
    items += Math.floor(k / m);
  }
  return items;
}

module.exports = { solution };
