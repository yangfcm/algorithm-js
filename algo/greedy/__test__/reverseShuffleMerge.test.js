const { solution } = require("../reverseShuffleMerge");

describe("Test reverseShuffleMerge.js", () => {
  test("Find out the correct string", () => {
    expect(solution("eggegg")).toBe("egg");
    expect(solution("abcdefgabcdefg")).toBe("agfedcb");
    expect(solution("aeiouuoiea")).toBe("aeiou");
    expect(solution("bdabaceadaedaaaeaecdeadababdbeaeeacacaba")).toBe(
      "aaaaaabaaceededecbdb"
    );
  });
});
