export default class HashSet {
  constructor(initialSize = 16, loadFactor = 0.75) {
    this.size = initialSize;
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
    this.loadFactor = loadFactor;
    this.count = 0; // track number of keys
  }

  _hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.size;
    }

    return hashCode;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.size *= 2; // Double the size
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
    this.count = 0;

    for (const bucket of oldBuckets) {
      for (const key of bucket) {
        this.add(key); // Rehash all entries
      }
    }
  }

  add(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const existing = bucket.includes(key);

    if (!existing) {
      bucket.push(key);
      this.count++;
    }

    if (this.count / this.size > this.loadFactor) {
      this._resize();
    }
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const keyIndex = bucket.indexOf(key);

    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
      this.count--;
      return true;
    }
    return false;
  }

  has(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    return bucket.includes(key);
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
    this.count = 0;
  }

  keys() {
    return this.buckets.flat();
  }
}
