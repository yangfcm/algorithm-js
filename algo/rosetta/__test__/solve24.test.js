const { solution } = require("../solve24");

describe("Test solve24", () => {
  test("should throw error when given invalid arguments", () => {
    expect(() => solution("abcd")).toThrow("Invalid argument");
    expect(() => solution(1234)).toThrow("Invalid argument");
    expect(() => solution({ problem: "1234" })).toThrow("Invalid argument");
    expect(() => solution("12345")).toThrow("Invalid argument");
    expect(() => solution("0394")).toThrow("Invalid argument");
  });
});
