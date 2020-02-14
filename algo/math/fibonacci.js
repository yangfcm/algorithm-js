// Fibonacci
// Print out the n-th number in the fibonacci series
// e.g. fibonacci(4) -> 3

/**
 * Solution 4:
 * Alternative solution to solution 3 but much more succinct
 */
function fibonacci(n, ac1=1, ac2=1) {
  if(n <= 2) {
    return ac2;
  }
  return fibonacci(n-1, ac2, ac1+ac2);
}

/**
 * Solution 3 - Use recursive function with memorization to reduce time complexity
 * Store the arguments of each function call along with the result.
 * If the function is called again with the same arguments, return the precomputed result,
 * rather than running the function again.
 */
/*
function memorize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    
    return result;
  }
}

function normalFib(n) {
  if(n < 2) {
    return n;
  } 
  return fibonacci(n-1) + fibonacci(n-2);
}

const fibonacci = memorize(normalFib);
*/

/**
 * Solution 2 - Use recursive function
 * Time complexity: O(2^n)
 */
/*
function fibonacci(n) {
  if(n < 2) {
    return n;
  } 
  return fibonacci(n-1) + fibonacci(n-2);
}
*/

/** Solution 1
 * Time complexity: O(n)
 */
/*
function fibonacci(n) {
  const fiboArr = [0, 1];
  for(let i=2; i<=n; i++) {
    const a = fiboArr[i-1];  // The previous number
    const b = fiboArr[i-2];  // The previous and previous number
    fiboArr.push(a+b);
  }
  return fiboArr[n];
}
*/

module.exports = fibonacci;