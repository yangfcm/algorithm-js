/**
 * @name functionCall
 * @description The call() method of Function instances calls this function
 * with a given this value and arguments provided individually.
 * @param {function} func
 * @param {object} thisArg
 * @param  {...any} args
 * @returns {any} The result of calling the function with the specified this value and arguments.
 */
function functionCall(func, thisArg, ...args) {
  if (typeof func !== "function") {
    throw new Error("thisArg is not a function.");
  }
  thisArg = thisArg || (typeof window !== "undefined" ? window : global);

  // Create a unique property name on thisArg object to avoid naming conflict.
  const funcProp = Symbol("funcProp");
  // This is to save 'func' argument.
  thisArg[funcProp] = func;

  const result = thisArg[funcProp](...args);

  delete thisArg[funcProp];

  return result;
}

module.exports = functionCall;
