/**
 * @name promiseRace
 * @description The Promise.race() static method takes an iterable of promises as input and returns a single Promise.
 * This returned promise settles with the eventual state of the first promise that settles.
 * @param {array} iterable
 * @returns {Promise}
 */
function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      return reject(new Error("Argument must be an array"));
    }

    for (const promise of iterable) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
}

module.exports = promiseRace;
