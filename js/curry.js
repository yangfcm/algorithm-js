/**
 *
 * @param {function} func a function to be curried
 * @param {number} arity
 */

function curry(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) {
      // If enough args are provided, invoke the original function.
      return func.apply(this, args);
    } else {
      // If not enough arguments are provided, return a new curried function.
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

module.exports = curry;
