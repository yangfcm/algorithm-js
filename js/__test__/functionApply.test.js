const functionApply = require("../functionApply");

describe("Test functionApply.js", () => {
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function (greeting) {
      const greetingMessage = `${greeting}, My name is ${this.name}. I'm ${this.age} years old`;
      return greetingMessage;
    };
  }
  const pMike = new Person("Mike", 20);
  const pJane = new Person("Jane", 25);
  const pBill = new Person("Bill", 30);

  test("Test functionApply: call pMike.say with pJane as this value.", () => {
    const result = functionApply(pMike.say, pJane, ["Hi"]);
    expect(result).toContain(pJane.name);
    expect(result).toContain(pJane.age.toString());
    expect(result).toContain("Hi");
  });

  test("Test functionApply: call pMike.say with pBill as this value.", () => {
    const result = functionApply(pMike.say, pBill, ["G'day"]);
    expect(result).toContain(pBill.name);
    expect(result).toContain(pBill.age.toString());
    expect(result).toContain("G'day");
  });
});
