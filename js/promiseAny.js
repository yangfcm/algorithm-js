/**
 * @name promiseAny
 * @description Implement Promise.any() function
 * The Promise.any() static method takes an iterable of promises as input and returns a single Promise.
 * This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
 * It rejects when all of the input's promises reject (including when an empty iterable is passed),
 * with an AggregateError containing an array of rejection reasons.
 * @param {array} iterable
 * @returns { Promise}
 */
function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable) || iterable.length === 0) {
      return reject(new AggregateError("no promise"));
    }
    const errors = [];
    let rejected = 0;
    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i])
        .then(resolve)
        .catch((error) => {
          errors[i] = error;
          rejected++;
          if (rejected === iterable.length) {
            return reject(new AggregateError(errors));
          }
        });
    }
  });
}

module.exports = promiseAny;
