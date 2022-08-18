const { solution } = require("../commonChild");
const testCases = [
  ["AA", "BB", 0],
  ["HARRY", "SALLY", 2],
  ["SHINCHAN", "NOHARAAA", 3],
  ["OUDFRMYMAW", "AWHYFCCMQX", 2],
  [
    "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS",
    "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC",
    15,
  ],
];

describe("Test commonChild.js", () => {
  test("Find out the length of the longest of common child string", () => {
    testCases.forEach((test) => {
      expect(solution(test[0], test[1])).toBe(test[2]);
    });
  });
});
