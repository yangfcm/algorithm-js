const { solution1, solution2, solution3 } = require("../defangingIP");

describe("Test defangingIP.js", () => {
  const address1 = "1.1.1.1";
  const address2 = "255.100.50.0";
  const expected1 = "1[.]1[.]1[.]1";
  const expected2 = "255[.]100[.]50[.]0";

  test("can defang an IP address with solution1", () => {
    expect(solution1(address1)).toBe(expected1);
    expect(solution1(address2)).toBe(expected2);
  });

  test("can defang an IP address with solution2", () => {
    expect(solution2(address1)).toBe(expected1);
    expect(solution2(address2)).toBe(expected2);
  });

  test("can defang an IP address with solution3", () => {
    expect(solution3(address1)).toBe(expected1);
    expect(solution3(address2)).toBe(expected2);
  });
});
