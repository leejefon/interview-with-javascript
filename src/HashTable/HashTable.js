class HashEntry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  getKey() {
    return this.key;
  }

  getValue() {
    return this.value;
  }
}

class HashTable {
  constructor(table_size = 128) {
    this.TABLE_SIZE = table_size;
    this.table = new Array(this.TABLE_SIZE).fill(null);
  }

  get(key) {
    let hash = key % this.TABLE_SIZE;
    const originalHash = hash;

    while (this.table[hash] && this.table[hash].getKey() !== key) {
      hash = (hash + 1) % this.TABLE_SIZE;
      if (hash === originalHash) {
        hash = -1;
        break;
      }
    }

    if (hash === -1 || !this.table[hash]) {
      return null;
    } else {
      return this.table[hash].getValue();
    }
  }

  put(key, value) {
    let hash = key % this.TABLE_SIZE;
    const originalHash = hash;

    while (this.table[hash] && this.table[hash].getKey() !== key) {
      hash = (hash + 1) % this.TABLE_SIZE;
      if (hash === originalHash) {
        hash = -1;
        break;
      }
    }

    if (hash === -1) {
      throw new Error('Table is full');
    } else {
      this.table[hash] = new HashEntry(key, value);
    }
  }
}

module.exports = {
  HashEntry,
  HashTable
};
