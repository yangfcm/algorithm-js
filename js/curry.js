/**
 * @name curry
 * @description Create a function that accepts arguments of func and either invokes func returning its result,
 * if at least arity number of arguments have been provided,
 * or returns a function that accepts the remaining func arguments, and so on.
 * The arity of func may be specified if func.length is not sufficient.
 * @example 
 *  var abc = function(a, b, c) {
      return [a, b, c];
    };    
    var curried = curry(abc);

    curried(1)(2)(3); -> [1, 2, 3]
    curried(1, 2)(3); -> [1, 2, 3]
    curried(1, 2, 3); -> [1, 2, 3]
 * @param {function} func a function to be curried
 * @param {number} arity
 * @returns {function}
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
