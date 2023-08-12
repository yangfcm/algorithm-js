const { solution } = require("../firstUniqueChar");

describe("Test firstUniqueChar.js", () => {
  test("find the index of the first unique character in a string", () => {
    expect(solution("leetcode")).toBe(0);
    expect(solution("loveleetcode")).toBe(2);
    expect(solution("aabbccc")).toBe(-1);
  });
});
