/**
 * @name promiseAll
 * @description Implement Promise.all() function
 * The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
 * This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
 * It rejects when any of the input's promises rejects, with this first rejection reason.
 * @param {array} iterable
 * @returns {Promise}
 */
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      return reject(new Error("Argument must be an array"));
    }

    if (iterable.length === 0) return resolve([]);

    const results = [];
    let resolvedPromises = 0;

    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i])
        .then((value) => {
          results[i] = value;
          resolvedPromises++;
          if (resolvedPromises === iterable.length) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
}

module.exports = promiseAll;
