const { solution } = require("../../stack_queue/isbalanced2");

describe("Test isbalanced2", () => {
  test("Solution should test if a string has balanced crackets correctly", () => {
    expect(solution("{[()]}")).toBe(true);
    expect(solution("{[(])}")).toBe(false);
    expect(solution("{{[[(())]]}}")).toBe(true);
    expect(solution("{(([])[])[]}")).toBe(true);
    expect(solution("{(([])[])[]]}")).toBe(false);
    expect(solution("{(([])[])[]}[]")).toBe(true);
    expect(solution("abcd")).toBe(true);
  });
});
