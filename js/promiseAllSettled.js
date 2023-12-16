/**
 * @name promiseAllSettled
 * @description Implement Promise.allSettled function
 * The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
 * This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
 * with an array of objects that describe the outcome of each promise.
 * The returned Promise is a Promise that is:
 * Already fulfilled, if the iterable passed is empty.
 * Asynchronously fulfilled, when all promises in the given iterable have settled (either fulfilled or rejected). 
 * The fulfillment value is an array of objects, each describing the outcome of one promise in the iterable, 
 * in the order of the promises passed, regardless of completion order. 
 * Each outcome object has the following properties:
 * 
 * status
 * A string, either "fulfilled" or "rejected", indicating the eventual state of the promise.

 * value
 * Only present if status is "fulfilled". The value that the promise was fulfilled with.

 * reason
 * Only present if status is "rejected". The reason that the promise was rejected with.
 * If the iterable passed is non-empty but contains no pending promises, 
 * the returned promise is still asynchronously (instead of synchronously) fulfilled.
 * @param {array} iterable
 * @returns {Promise} 
 */
function promiseAllSettled(iterable) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(iterable)) {
      return reject(new Error("Argument must be an array"));
    }

    if (iterable.length === 0) return resolve([]);

    const results = [];
    let settledPromises = 0;

    for (let i = 0; i < iterable.length; i++) {
      Promise.resolve(iterable[i]).then(
        (value) => {
          results[i] = {
            status: "fulfilled",
            value,
          };
          settledPromises++;
          if (settledPromises === iterable.length) {
            resolve(results);
          }
        },
        (err) => {
          results[i] = {
            status: "rejected",
            reason: err,
          };
          settledPromises++;
          if (settledPromises === iterable.length) {
            resolve(results);
          }
        }
      );
    }
  });
}

module.exports = promiseAllSettled;
