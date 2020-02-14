const isBalanced = require("../isbalanced");

describe("Test algo/isbalanced.js", () => {
  test("should function is defined", () => {
    expect(isBalanced).toBeDefined();
  });

  test("string '}{' is not balanced", () => {
    expect(isBalanced("}{")).toBeFalsy();
  });

  test("string '{{}' is not balanced", () => {
    expect(isBalanced("{}}")).toBeFalsy();
  });

  test("string '{}{}' is balanced", () => {
    expect(isBalanced("{}{}")).toBeTruthy();
  });

  test("string 'foo { bar { baz } boo }' is balanced", () => {
    expect(isBalanced("foo { bar { baz } boo }")).toBeTruthy();
  });

  test("string 'foo { bar { baz }' is not balanced", () => {
    expect(isBalanced("foo { bar { baz }")).toBeFalsy();
  });

  test("string '' is not balanced", () => {
    expect(isBalanced("foo { bar } }")).toBeFalsy();
  });
});
