/**
 * Javascript is a dynamically typed language, which means the types of variable can be changed during runtime.
 * Many interview questions involve recursion of values that contain values of different types and how to handle
 * each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object).
 * Knowledge of handling the JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.
 * typeUtilities will implement the following utility functions to determine the types of given values.
 */

function isBoolean(value) {
  return typeof value === "boolean";
}

function isNumber(value) {
  return typeof value === "number";
}

function isNull(value) {
  return value === null;
}

function isString(value) {
  return typeof value === "string";
}

function isSymbol(value) {
  return typeof value === "symbol";
}

function isUndefined(value) {
  return value === undefined;
}

function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value === "function";
}

// "object" includes array, function, objects, but not including null and undefined.
function isObject(value) {
  if (value === null || value === undefined) return false;
  const type = typeof value;
  return type === "object" || type === "function";
}

// "plain object" not includes function and array. It is any object whose prototype is Object.prototype or an object created via Object.create(null).
function isPlainObject(value) {
  if (value === null || value === undefined) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

module.exports = {
  isBoolean,
  isNumber,
  isNull,
  isString,
  isSymbol,
  isUndefined,
  isArray,
  isFunction,
  isObject,
  isPlainObject,
};
