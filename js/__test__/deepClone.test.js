const deepClone = require("../deepClone");

describe("Test deepClone.js", () => {
  test("Deep clone primitive value", () => {
    expect(deepClone("foo")).toEqual("foo");
    expect(deepClone(123)).toEqual(123);
    expect(deepClone(true)).toEqual(true);
    expect(deepClone(null)).toEqual(null);
  });

  test("Deep clone non-nesting array", () => {
    expect(deepClone([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(deepClone(["foo", 9, false, null])).toEqual(["foo", 9, false, null]);
  });

  test("Deep clone non-nesting object", () => {
    const user = {
      name: "Mike",
      age: 18,
      active: true,
    };
    const clonedUser = deepClone(user);

    user.name = "John"; // Change a property of object to make sure clonedUser is not impacted.

    expect(clonedUser).toEqual({
      name: "Mike",
      age: 18,
      active: true,
    });
  });

  test("Deep clone nesting array", () => {
    const users = [
      {
        name: "Mike",
        age: 18,
        active: true,
        hobbies: ["fishing", "racing"],
        friends: [
          {
            name: "John",
            gender: "M",
          },
          {
            name: "Mary",
            gender: "F",
          },
        ],
      },
      {
        name: "Jen",
        age: 22,
        active: false,
        hobbies: ["painting", "tennis"],
        friends: [
          {
            name: "Ben",
            gender: "M",
          },
          {
            name: "Cam",
            gender: "M",
          },
        ],
      },
    ];
    const clonedUsers = deepClone(users);
    users[1] = undefined;
    expect(clonedUsers).toEqual([
      {
        name: "Mike",
        age: 18,
        active: true,
        hobbies: ["fishing", "racing"],
        friends: [
          {
            name: "John",
            gender: "M",
          },
          {
            name: "Mary",
            gender: "F",
          },
        ],
      },
      {
        name: "Jen",
        age: 22,
        active: false,
        hobbies: ["painting", "tennis"],
        friends: [
          {
            name: "Ben",
            gender: "M",
          },
          {
            name: "Cam",
            gender: "M",
          },
        ],
      },
    ]);
  });

  test("Deep clone nesting object", () => {
    const user = {
      name: "Mike",
      age: 18,
      active: true,
      hobbies: ["fishing", "racing"],
      friends: [
        {
          name: "John",
          gender: "M",
        },
        {
          name: "Mary",
          gender: "F",
        },
      ],
      preferences: {
        allowMessage: true,
        searchable: false,
        allowNotifications: ["today", "yesterday"],
      },
    };
    const clonedUser = deepClone(user);
    delete user.preferences;
    expect(clonedUser).toEqual({
      name: "Mike",
      age: 18,
      active: true,
      hobbies: ["fishing", "racing"],
      friends: [
        {
          name: "John",
          gender: "M",
        },
        {
          name: "Mary",
          gender: "F",
        },
      ],
      preferences: {
        allowMessage: true,
        searchable: false,
        allowNotifications: ["today", "yesterday"],
      },
    });
  });
});
