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
  function maxProduction(n = 0) {
    let newM = m;
    let newW = w;
    let max = m * w;
    for (let add = 0; add <= n; add++) {
      const addedM = m + add;
      const addedW = w + n - add;
      const newProduction = addedM * addedW;
      if (newProduction > max) {
        max = newProduction;
        newM = addedM;
        newW = addedW;
      }
    }
    m = newM;
    w = newW;
    return max;
  }

  let days = 0;
  let invest = 0;
  let production = 0;
  let netProduction = 0;

  do {
    days++;
    if (production * 2 >= n) {
      break;
    }
    production = maxProduction(invest) + netProduction;
    invest = Math.floor(production / p); // ?
    netProduction = production - invest * p;
  } while (production < n);

  return days;
}

module.exports = { solution };
