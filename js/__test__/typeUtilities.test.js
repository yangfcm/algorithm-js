const {
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
} = require("../typeUtilities");

describe("Test typeUtilities.js", () => {
  function Foo(value) {
    this.value = value;
  }

  test("Value is boolean", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  test("Value is not boolean", () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean("true")).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
  });

  test("Value is number", () => {
    expect(isNumber(100)).toBe(true);
    expect(isNumber(-99.99)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
  });
  test("Value is not number", () => {
    expect(isNumber("")).toBe(false);
    expect(isNumber("number")).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(new Number(1))).toBe(false);
  });

  test("Value is null", () => {
    expect(isNull(null)).toBe(true);
  });
  test("Value is not null", () => {
    expect(isNull("")).toBe(false);
    expect(isNull("null")).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });

  test("Value is string", () => {
    expect(isString("")).toBe(true);
    expect(isString("abcd")).toBe(true);
    expect(isString("1234")).toBe(true);
  });
  test("Value is not string", () => {
    expect(isString(1234)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(true)).toBe(false);
  });

  test("Value is symbol", () => {
    expect(isSymbol(Symbol("hello"))).toBe(true);
    expect(isSymbol(Symbol(2))).toBe(true);
  });

  test("Value is not symbol", () => {
    expect(isSymbol("1234")).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol(true)).toBe(false);
  });

  test("Value is undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  test("Value is not undefined", () => {
    expect(isUndefined("")).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });

  test("Value is array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array(100))).toBe(true);
  });
  test("Value is not array", () => {
    expect(isArray(1234)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({ 1: "a", 2: "b", 3: "c" })).toBe(false);
    expect(isArray(true)).toBe(false);
  });

  test("Value is function", () => {
    expect(
      isFunction(function (x) {
        return x;
      })
    ).toBe(true);
    expect(isFunction((x) => console.log(x))).toBe(true);
  });
  test("Value is not function", () => {
    expect(isFunction(1234)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(true)).toBe(false);
  });

  test("Value is object", () => {
    expect(isObject({ a: 1, b: 2 })).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(() => {})).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(Object("a"))).toBe(true);
    expect(isObject(new Foo(1))).toBe(true);
  });
  test("Value is not object", () => {
    expect(isObject(1234)).toBe(false);
    expect(isObject("1234")).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(Symbol(2))).toBe(false);
    expect(isObject(true)).toBe(false);
  });

  test("Value is plain object", () => {
    expect(isPlainObject({ a: 1, b: 2 })).toBe(true);
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });
  test("Value is not plain object", () => {
    expect(isPlainObject(1234)).toBe(false);
    expect(isPlainObject("1234")).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(Symbol(2))).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(Object("a"))).toBe(false);
    expect(isPlainObject(new Foo(1))).toBe(false);
  });
});
