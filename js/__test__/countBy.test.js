const countBy = require("../countBy");

describe("Test countBy.js", () => {
  test("Should be able to work as expected", () => {
    expect(countBy([6.1, 4.2, 6.3, 3.5, 4.9, 4.1], Math.floor)).toEqual({
      4: 3,
      6: 2,
      3: 1,
    });

    expect(
      countBy(
        [
          {
            user: "Andy",
            active: true,
          },
          {
            user: "Bill",
            active: false,
          },
          { user: "John", active: false },
          { user: "Mary", active: true },
          { user: "Mike", active: true },
        ],
        (value) => value.active
      )
    ).toEqual({
      true: 3,
      false: 2,
    });
  });
});
