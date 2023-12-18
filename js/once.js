/**
 * @name once
 * @description Creates a function that is restricted to invoking func once.
 * Repeat calls to the function return the value of the first invocation.
 * The func is invoked with the this binding and arguments of the created function.
 * @param {function} func
 * @returns {function}
 */
function once(func) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

module.exports = once;
