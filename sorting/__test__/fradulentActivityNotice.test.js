const fradulentActivityNotice = require("../fradulentActivityNotice");

describe("Test fradulentActivityNotice.js", () => {
  const exp1 = [2, 3, 4, 2, 3, 6, 8, 4, 5];
  d1 = 5;
  const exp2 = [1, 2, 3, 4, 4];
  d2 = 4;
  const exp3 = [10, 20, 30, 40, 50];
  d3 = 3;

  test("Return correct count of notice", () => {
    expect(fradulentActivityNotice(exp1, d1)).toBe(2);
    expect(fradulentActivityNotice(exp2, d2)).toBe(0);
    expect(fradulentActivityNotice(exp3, d3)).toBe(1);
  });
});
