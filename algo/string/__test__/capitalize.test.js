const { solution1, solution2 } = require("../capitalize");

describe("Test capitalize.js", () => {
  test("capitalize function defined", () => {
    expect(solution1).toBeDefined();
    expect(solution2).toBeDefined();
  });

  test("capitalizes the first letter of every word in a sentence - case 1", () => {
    expect(solution1("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
    expect(solution2("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
  });

  test("capitalizes the first letter of every word in a sentence - case 2", () => {
    expect(solution1("i love breakfast at bill miller bbq")).toEqual(
      "I Love Breakfast At Bill Miller Bbq"
    );
    expect(solution2("i love breakfast at bill miller bbq")).toEqual(
      "I Love Breakfast At Bill Miller Bbq"
    );
  });
});
