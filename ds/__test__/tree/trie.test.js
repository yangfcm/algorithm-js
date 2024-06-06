const { Trie } = require("../../tree/trie");

describe("Test trie.js", () => {
  let testTrie;

  beforeEach(() => {
    testTrie = new Trie();
    testTrie.add("and");
    testTrie.add("ant");
    testTrie.add("dad");
  });

  test("Should return all the words in trie", () => {
    const words = testTrie.print();
    expect(words).toEqual(["and", "ant", "dad"]);
  });

  test("Should add a word", () => {
    testTrie.add('music');
    expect(testTrie.isWord('music')).toBe(true);
  });

  test("Should check if a word is in the trie", () => {
    expect(testTrie.isWord('ant')).toBe(true);
    expect(testTrie.isWord('dad')).toBe(true);
    expect(testTrie.isWord('mum')).toBe(false)
  })
});
