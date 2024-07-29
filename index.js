import HashMap from "./hash-map.js";

const hash = new HashMap();

hash.set("Cloud", "Strife");
hash.set("Tifa", "Lockhart");

console.log(hash.get("Cloud"));
console.log(hash.get("Tifa"));

console.log(hash.has("Cloud"));
console.log(hash.has("Tifa"));

console.log(hash.remove("Aerith"));

hash.set("Aerith", "Gainsborough");
console.log(hash.get("Aerith"));
console.log(hash.has("Aerith"));

console.log(hash.remove("Aerith"));

console.log(hash.buckets);
