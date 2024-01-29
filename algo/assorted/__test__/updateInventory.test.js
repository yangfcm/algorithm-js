const { solution } = require("../updateInventory");

describe("Test updateInventory.js", () => {
  test("should update inventory correctly", () => {
    const curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ];
    const newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ];
    const updatedInv = solution(curInv, newInv);
    expect(updatedInv.length).toBe(6);
    expect(updatedInv[0]).toEqual([88, "Bowling Ball"]);
    expect(updatedInv[1]).toEqual([2, "Dirty Sock"]);
    expect(updatedInv[2]).toEqual([3, "Hair Pin"]);
    expect(updatedInv[3]).toEqual([3, "Half-Eaten Apple"]);
    expect(updatedInv[4]).toEqual([5, "Microphone"]);
    expect(updatedInv[5]).toEqual([7, "Toothpaste"]);
  });
});
