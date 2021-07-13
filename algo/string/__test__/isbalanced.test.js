const { solution } = require("../isbalanced");

describe("Test algo/isbalanced.js", () => {
  test("should function is defined", () => {
    expect(solution).toBeDefined();
  });

  test("string '}{' is not balanced", () => {
    expect(solution("}{")).toBeFalsy();
  });

  test("string '{{}' is not balanced", () => {
    expect(solution("{}}")).toBeFalsy();
  });

  test("string '{}{}' is balanced", () => {
    expect(solution("{}{}")).toBeTruthy();
  });

  test("string 'foo { bar { baz } boo }' is balanced", () => {
    expect(solution("foo { bar { baz } boo }")).toBeTruthy();
  });

  test("string 'foo { bar { baz }' is not balanced", () => {
    expect(solution("foo { bar { baz }")).toBeFalsy();
  });

  test("string '' is not balanced", () => {
    expect(solution("foo { bar } }")).toBeFalsy();
  });
});
