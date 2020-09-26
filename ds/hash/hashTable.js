class HashTable {
  constructor() {
    this.table = []; // The entire hash table.
    this.count = 0; // How many key-value pairs in the hash table
    this.size = 8; // The default size of hash table
  }

  /**
   * Hash function: given the key and hash it
   * @param {string} key
   * @returns {number} the number hashed
   */
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      let letter = key[i];
      hash = (hash << 5) + letter.charCodeAt(0);
      hash = (hash & hash) % this.size;
    }
    return hash;
  }

  /**
   * Add a key-value pair into the hash table
   * @param {string} key
   * @param {any} value
   * @returns {any} the value added to the hash table
   */
  put(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      // If bucket doesn't exist, create one.
      bucket = [];
      this.table[index] = bucket;
    }

    // Iterate through bucket to see if there are any conflicting key value pairs within the bucket.
    // If there's any, override them.
    for (let i = 0; i < bucket.length; i++) {
      const node = bucket[i];
      if (node[0] === key) {
        // Override value stored at this key and return early.
        node[1] = value;
        return value;
      }
    }

    bucket.push([key, value]); // Add a new key-value pair into bucket
    this.count++;
    // Now that a new key-value pair is added, check to see if table's size needs to be increased
    if (this.count > this.size * 0.75) {
      this.resize(this.size * 2);
    }
    return value;
  }

  /**
   * Given the key, get the value associated with the key
   * @param {string} key
   * @returns {any} the value associated with the key, if the key doesn't exist return null.
   */
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      const node = bucket[i];
      if (node[0] === key) {
        return node[1];
      }
    }
    return null;
  }

  /**
   * Given the key, remove the node associated with the key
   * @param {string} key
   * @returns {any} the value associated with the key to remove, if the key doesn't exist, return null.
   */
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      const node = bucket[i];
      // Check to see if the key is inside the bucket
      if (node[0] === key) {
        // If it is, remove the node from the bucket
        bucket.splice(i, 1);
        this.count--;
        if (this.count < this.size * 0.25) {
          this.resize(this.size / 2);
        }
        return node[1];
      }
    }
    return null;
  }

  /**
   * Resize the hash table
   * @param {number} newSize
   */
  resize(newSize) {
    const oldTable = this.table;
    this.size = newSize;
    this.count = 0;
    this.table = [];

    oldTable.forEach((bucket) => {
      if (!bucket) {
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        const node = bucket[i];
        this.put(node[0], node[1]);
      }
    });
  }

  /** Print the entire hash table */
  print() {
    console.log(this.table);
  }
}

// const table = new HashTable();

// table.put("Alex", 123);
// table.put("John", 456);
// table.print();
// console.log(table.get("Alex"));

module.exports = HashTable;
