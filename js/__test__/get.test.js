const get = require("../get");

describe("Test get.js", () => {
  const user = {
    name: "John",
    active: true,
    address: {
      number: "3",
      street: "View St.",
      city: "New York",
      country: "US",
    },
    hobbies: ["fishing", "racing"],
    friends: [
      {
        name: "Mary",
        gender: "F",
        hobbies: ["painting", "cooking"],
      },
      {
        name: "Mike",
        gender: "M",
        hobbies: ["hocky"],
      },
    ],
  };

  test("Get value from array path", () => {
    expect(get(user, ["name"])).toBe("John");
    expect(get(user, ["address", "country"])).toBe("US");
    expect(get(user, ["hobbies", "0"])).toBe("fishing");
    expect(get(user, ["friends", "1", "name"])).toBe("Mike");
    expect(get(user, ["address"])).toEqual({
      number: "3",
      street: "View St.",
      city: "New York",
      country: "US",
    });
  });

  test("Get value from string path", () => {
    expect(get(user, "name")).toBe("John");
    expect(get(user, "address.country")).toBe("US");
    expect(get(user, "hobbies.0")).toBe("fishing");
    expect(get(user, "friends.1.name")).toBe("Mike");
    expect(get(user, "address")).toEqual({
      number: "3",
      street: "View St.",
      city: "New York",
      country: "US",
    });
  });

  test("Return default value when path does not exist", () => {
    expect(get(user, ["address", "postCode"], "Not provided")).toBe(
      "Not provided"
    );
    expect(get(user, "address.postCode", "Not provided")).toBe("Not provided");
    expect(get(user, ["friends", "9", "name"], "No such friend")).toBe(
      "No such friend"
    );
    expect(get(user, "friends.9.name", "No such friend")).toBe(
      "No such friend"
    );
  });
});
