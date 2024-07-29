export default class HashMap {
  constructor(initialSize = 16, loadFactor = 0.75) {
    this.size = initialSize;
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
    this.loadFactor = loadFactor;
    this.count = 0; // track number of key-value pairs
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
      for (const [key, value] of bucket) {
        this.set(key, value); // Rehash all entries
      }
    }
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const existing = bucket.find(([k]) => k === key);

    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
      this.count++;
    }

    if (this.count / this.size > this.loadFactor) {
      this._resize();
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const entry = bucket.find(([k]) => k === key);
    return entry ? entry[1] : null;
  }
}
