const { solution } = require("../specialString");

describe("Test specialString.js", () => {
  test("Count the correct number of special substring.", () => {
    expect(solution("aaaa")).toBe(10);
    expect(solution("abcbaba")).toBe(10);
    expect(solution("asasd")).toBe(7);
    expect(solution("abcde")).toBe(5);
  });
});
