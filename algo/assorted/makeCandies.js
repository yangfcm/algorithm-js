/**
 * @name makeCandies
 * @description
 * @example
 * @param {number} m
 * @param {number} w
 * @param {number} p
 * @param {number} n
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
    invest = Math.floor(production / p); // ?
    netProduction = production - invest * p;
  } while (production < n);

  return Math.min(ans, days);
}

module.exports = { solution };
