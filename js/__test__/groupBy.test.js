const groupBy = require("../groupBy");

describe("Test groupBy.js", () => {
  test("groupBy should work as expected", () => {
    expect(groupBy([6.1, 4.2, 6.3, 3.5, 4.9, 4.1], Math.floor)).toEqual({
      4: [4.2, 4.9, 4.1],
      6: [6.1, 6.3],
      3: [3.5],
    });

    expect(
      groupBy(
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
      true: [
        {
          user: "Andy",
          active: true,
        },
        { user: "Mary", active: true },
        { user: "Mike", active: true },
      ],
      false: [
        {
          user: "Bill",
          active: false,
        },
        { user: "John", active: false },
      ],
    });
  });
});
