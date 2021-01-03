const { gridTravelerSln1, gridTravelerSln2 } = require("../gridTraveler");

describe("Test gridTraveler.js", () => {
  test("gridTravelerSln1 function is defined", () => {
    expect(gridTravelerSln1).toBeDefined();
  });

  test("gridTravelerSln2 function is defined", () => {
    expect(gridTravelerSln2).toBeDefined();
  });

  test("gridTravelerSln1 can return correct value", () => {
    expect(gridTravelerSln1(1, 1)).toBe(1);
    expect(gridTravelerSln1(2, 3)).toBe(3);
    expect(gridTravelerSln1(3, 2)).toBe(3);
    expect(gridTravelerSln1(3, 3)).toBe(6);
    expect(gridTravelerSln1(12, 13)).toBe(1352078);
  });

  test("gridTravelerSln2 can return correct value and can handle big number", () => {
    expect(gridTravelerSln2(1, 1)).toBe(1);
    expect(gridTravelerSln2(2, 3)).toBe(3);
    expect(gridTravelerSln2(3, 2)).toBe(3);
    expect(gridTravelerSln2(3, 3)).toBe(6);
    expect(gridTravelerSln2(12, 13)).toBe(1352078);
    expect(gridTravelerSln2(18, 18)).toBe(2333606220);
  });
});
