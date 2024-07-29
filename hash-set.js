export default class HashSet {
  constructor(initialSize = 16, loadFactor = 0.75) {
    this.size = initialSize;
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
    this.loadFactor = loadFactor;
    this.count = 0; // track number of keys
  }
}
