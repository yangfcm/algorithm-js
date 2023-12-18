/**
 * @name deepClone
 * @description Deep clone an object.
 * It is very hard to write a complete deep clone solution from scratch.
 * A limited scope is usually given in a typical interview context.
 * The most important is how you detect different data types and your ability to
 * leverage various built-in APIs and Object methods to travers a given object.
 * @param {object} value
 * @returns {object} deep cloned object
 */

function deepClone(value) {
  // If value is null or non-object, return the value itself.
  if (value === null || typeof value !== "object") return value;

  // Now we handle the cases of array or object.
  const clone = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      // Recursively clone nested object or array.
      clone[key] = deepClone(value[key]);
    }
  }
  return clone;
}

module.exports = deepClone;
