/**
 * @name get
 * @description Get the value at path of object.
 * If the resolved value is undefined, the defaultValue is returned in its place.
 * @param {object} object
 * @param {string | array} path
 * @param {any} defaultValue
 * @returns {any}
 */
function get(object, path, defaultValue) {
  const pathArray = Array.isArray(path) ? path : path.split(".");
  let result = object;
  for (const key of pathArray) {
    if (!result || typeof result !== "object" || !(key in result)) {
      return defaultValue;
    }
    result = result[key];
  }
  return result === undefined ? defaultValue : result;
}

module.exports = get;
