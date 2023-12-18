const intersectionBy = require("../intersectionBy");

describe("Test intersectionBy.js", () => {
  test("Intersect arrays by iteratee function", () => {
    const arr1 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }];
    const arr2 = [{ x: 2 }, { x: 4 }, { x: 6 }, { x: 8 }];
    const arr3 = [{ x: 1 }, { x: 2 }, { x: 4 }];
    const arr4 = [{ x: 2 }, { x: 4 }, { x: 6 }, { x: 8 }];
    const result = intersectionBy(arr1, arr2, arr3, arr4, (el) => el.x);
    expect(result).toEqual([{ x: 2 }, { x: 4 }]);
  });
});
