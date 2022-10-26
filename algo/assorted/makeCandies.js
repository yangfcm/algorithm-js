/**
 * @name makeCandies
 * @description A candy factory wants to make n candies. To make candies, it needs machines and workers.
 * The factory starts with m machines and w workers. With that, it can make m * w candies each day.
 * By the end of day, the factory can decide whether to spend some of his candies to buy more machines or hire more workers.
 * Buying a machine or hiring a worker costs p units, and there is no limit to the number of machines or workers it can have.
 * The factory wants to minimize the number of days to produce the required number of candies at the end of a day.
 * Write a function to determine that number of days.
 * @example m = 3, w = 1, p = 2, n = 12 -> 3
 * Day 1: production = m * w = 3 * 1 = 3.
 * By the end of Day 1, factory can spend p = 2 of the production to hire another worker, so now w = 2 and net production is 3 - 2 = 1
 * Day 2: production = m * w + net production of day 1 = 3 * 2 + 1 = 7.
 * By the end of Day 2, factory can spend 3 (p = 2) of the production to buy new machines or hire new workers.
 * Let's use 1 to buy new machine and 2 to hire new workers, so now m = 4, w = 4, and the net production is 7 - 3*2 = 1.
 * Day 3: production = 4 * 4 = 16 > 12. So it needs 3 days to reach the target production.
 * @param {number} m Starting number of machines
 * @param {number} w Starting number of workers
 * @param {number} p The unit cost to buy a machine or hire a worker
 * @param {number} n The target production
 * @solution There are a couple of points to consider:
 * 1. Choice one: You can invest as much as you could from the production. The maximum investment is Math.floor( m*w / p)
 * 2. Choice two: Because expanding productivity can cost your production, you can also choose not to invest. In this case, the days to reach the target is: Math.ceil(n / (m*w))
 * 3. You need to compare which choice costs less days.
 * 4. If you choose to invest, it's possible that your production is so small that you can't afford even one single unit to invest.
 * That's fine. You'll just have to keep producing candies until it reaches a point that you can expand your productivity.
 * 5. When invest > 1(like Day 2 in the above example), we need to find ways to properly allocate it to buy machines and hire workers so that the production can achieve the most.
 * The implemention is in maxProduction() function.
 * @source https://www.hackerrank.com/challenges/making-candies/problem
 */
function solution(m, w, p, n) {
  // if (m * w < p) throw new Error("Impossible to reach the target.");

  // m - machine, w - workers, n - addition
  // find out the addition such that the production can achieve the most.
  // i.e. production = (m + add) * (w + (n - add)) add >= 0 and add <= n production is the maximum
  function maxProduction(invest = 0) {
    const total = m + w + invest;
    const half = Math.ceil(total / 2);
    if (m > w) {
      m = Math.max(m, half);
      w = total - m;
    } else {
      w = Math.max(w, half);
      m = total - w;
    }
    return w * m;
  }

  if (n <= p) return Math.ceil(n / (m * w));
  // Edge case: If target(n) is bigger than p, we will have to always produce without investment until reaching the target.
  let days = 0;
  let invest = 0;
  let production = 0;
  let netProduction = 0;
  let ans = Infinity;

  do {
    ans = Math.min(ans, days + Math.ceil((n - production) / (m * w)));
    days++;
    production = maxProduction(invest) + netProduction;
    invest = Math.floor(production / p);
    netProduction = production - invest * p;
  } while (production < n);

  return Math.min(ans, days);
}

module.exports = { solution };
