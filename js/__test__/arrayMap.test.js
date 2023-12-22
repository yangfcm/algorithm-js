const arrayMap = require("../arrayMap");

describe("Test arrayMap.js", () => {
  test("arrayMap can work as expected with pure array", () => {
    const arr = [1, 3, 5, 7, 9];
    const result = arrayMap(arr, (el) => el * 2);
    expect(result).toEqual([2, 6, 10, 14, 18]);
  });

  test("arrayMap can work as expected with object array", () => {
    const users = [
      {
        name: "John",
        lastLogin: "2023-12-01",
      },
      {
        name: "Mary",
        lastLogin: "",
      },
      {
        name: "Andy",
        lastLogin: "2023-12-22",
      },
    ];

    const result = arrayMap(users, (user) => {
      return {
        ...user,
        activated: !!user.lastLogin,
      };
    });
    expect(result).toEqual([
      {
        name: "John",
        lastLogin: "2023-12-01",
        activated: true,
      },
      {
        name: "Mary",
        lastLogin: "",
        activated: false,
      },
      {
        name: "Andy",
        lastLogin: "2023-12-22",
        activated: true,
      },
    ]);
  });

  test("arrayMap can work as expected with sparse array", () => {
    const arr = new Array(10);
    arr[2] = 1;
    arr[7] = 2;
    const result = arrayMap(arr, (el) => el * 2);
    expect(result).toEqual([
      undefined,
      undefined,
      2,
      undefined,
      undefined,
      undefined,
      undefined,
      4,
      undefined,
      undefined,
    ]);
  });
});
