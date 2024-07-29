import HashMap from "./hash-map.js";

const hash = new HashMap();

hash.set("Tifa", "Lockhart");
hash.set("Cloud", "Strife");

console.log(hash.get("Cloud"));
console.log(hash.get("Tifa"));
console.log(hash.get("Aerith"));

console.log(hash.has("Cloud"));
console.log(hash.has("Tifa"));
console.log(hash.has("Aerith"));

console.log(hash.buckets);
