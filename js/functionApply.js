/**
 * @name functionApply
 * @description Implement Function.prototype.apply() method
 * The apply() method of Function instances calls this function with a given this value,
 * and arguments provided as an array (or an array-like object).
 * @param {function} func
 * @param {object} thisArg
 * @param {array} argsArray
 * @returns {any} The result of calling the function with the specified this value and arguments.
 */
function functionApply(func, thisArg, argsArray) {
  if (typeof func !== "function") {
    throw new Error("thisArg is not a function.");
  }
  thisArg = thisArg || (typeof window !== "undefined" ? window : global);

  // Create a unique property name on thisArg object to avoid naming conflict.
  const funcProp = Symbol("funcProp");
  // This is to save 'func' argument.
  thisArg[funcProp] = func;

  const result = thisArg[funcProp](...argsArray);

  delete thisArg[funcProp];

  return result;
}

module.exports = functionApply;
