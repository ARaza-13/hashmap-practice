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
}
