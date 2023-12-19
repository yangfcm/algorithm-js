const curry = require("../curry");

describe("Test curry.js", () => {
  test("Should return correct curried function", () => {
    function add(a, b, c) {
      return a + b + c;
    }
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });
});
