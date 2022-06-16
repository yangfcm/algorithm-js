/**
 * @name fibonacci
 * @description Return the n-th number in the fibonacci series.
 * @example
 * @param {number} n
 * @returns {number} The n-th number in the fibonacci series.
 * @solution Use recursive function. Time complexity: O(2^n)
 */
function solution1(n) {
  if (n < 2) {
    return n;
  }
  return solution1(n - 1) + solution1(n - 2);
}

/**
 * @param {number} n
 * @returns {number}
 * @solution Use an array to save each fibonacci number so that you can iterate through it once.
 */
function solution2(n) {
  const fiboArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = fiboArr[i - 1]; // The previous number
    const b = fiboArr[i - 2]; // The previous and previous number
    fiboArr.push(a + b);
  }
  return fiboArr[n];
}

/**
 * @param {number} n
 * @returns {number}
 * @solution  Use recursive function with memorization to reduce time complexity
 * Store the arguments of each function call along with the result.
 * If the function is called again with the same arguments, return the precomputed result,
 * rather than running the function again.
 */
function memorize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function normalFib(n) {
  if (n < 2) {
    return n;
  }
  return normalFib(n - 1) + normalFib(n - 2);
}

const solution3 = memorize(normalFib);

/**
 * @param {number} n
 * @returns {number}
 * @solution Alternative solution to solution 3 but much more succinct
 */
function solution4(n, ac1 = 1, ac2 = 1) {
  if (n <= 2) {
    return ac2;
  }
  return solution4(n - 1, ac2, ac1 + ac2);
}

module.exports = { solution1, solution2, solution3, solution4 };
