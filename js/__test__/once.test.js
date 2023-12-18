const once = require("../once");

describe("Test once.js", () => {
  test("Function is called only once", () => {
    const add = (a, b) => a + b;
    const addOnce = once(add);
    expect(addOnce(1, 2)).toBe(3);
    expect(addOnce(3, 5)).toBe(3);
  });

  test("Function is called only once in the context of an object.", () => {
    const obj = {
      value: "foo",
      getValueOnce: once(function () {
        return this.value;
      }),
    };

    expect(obj.getValueOnce()).toBe("foo");
    obj.value = "bar";
    expect(obj.getValueOnce()).toBe("foo");
  });
});
