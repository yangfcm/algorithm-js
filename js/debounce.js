/**
 * @name debounce
 * @description Implement a debounce function which accepts a callback function and a wait duration.
 * Calling debounce() returns a function which has debounced invocations of the callback function
 * following the behavior described above.
 * @param {fn}
 * @param {wait}
 * @returns {Function}
 */
function debounce(fn, wait = 0) {
  let timeout;
  return function (...args) {
    const later = () => {
      timeout = null;
      fn.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

module.exports = { debounce };
