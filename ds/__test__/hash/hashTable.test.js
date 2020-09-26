const HashTable = require("../../hash/hashTable");

describe("Test init hash table", () => {
  test("HashTable class is defined", () => {
    expect(HashTable).toBeDefined();
  });

  test("The instance of hashTable should be initialized", () => {
    const hashTable = new HashTable();
    expect(hashTable).toBeDefined();
    expect(hashTable.table).toEqual([]);
    expect(hashTable.size).toBe(8);
    expect(hashTable.count).toBe(0);
  });
});

describe("Test operations in HashTable", () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable();
    hashTable.put("Alex", 92);
    hashTable.put("Bob", 82);
    hashTable.put("Carl", 70);
  });

  test("can add element into hash table", () => {
    const nodeToAdd = ["David", 80];
    const valueAdded = hashTable.put(nodeToAdd[0], nodeToAdd[1]);
    expect(valueAdded).toBe(nodeToAdd[1]);
    expect(hashTable.count).toBe(4);
  });

  test("can get value associated with key", () => {
    expect(hashTable.get("Alex")).toBe(92);
    expect(hashTable.get("john")).toBe(null);
  });

  test("can remove value associated with key", () => {
    expect(hashTable.remove("Bob")).toBe(82);
    expect(hashTable.remove("john")).toBe(null);
    expect(hashTable.count).toBe(2);
  });

  test("can resize hash table", () => {
    hashTable.resize(10);
    expect(hashTable.size).toBe(10);
    // Make sure data is still there after resizing.
    expect(hashTable.get("Alex")).toBe(92);
    expect(hashTable.get("Bob")).toBe(82);
    expect(hashTable.get("Carl")).toBe(70);
  });
});
