import HashMap from "./hash-map.js";

const hash = new HashMap();

hash.set("Cloud", "Strife");
hash.set("Tifa", "Lockhart");

hash.clear();

console.log(hash.get("Cloud")); // null
console.log(hash.get("Tifa")); // null

console.log(hash.has("Cloud")); // false
console.log(hash.has("Tifa")); // false

hash.set("Cloud", "Strife");
hash.set("Tifa", "Lockhart");

console.log(hash.get("Cloud")); // Strife
console.log(hash.get("Tifa")); // Lockart

console.log(hash.has("Cloud")); // true
console.log(hash.has("Tifa")); // true

console.log(hash.remove("Aerith")); // false

hash.set("Aerith", "Gainsborough");
console.log(hash.get("Aerith")); // Gainsborough
console.log(hash.has("Aerith")); // true

console.log(hash.remove("Aerith"));
console.log(hash.get("Aerith")); // null
console.log(hash.has("Aerith")); // false

console.log(hash.length()); // 2
console.log(hash.keys()); // ['Tifa', 'Cloud']
console.log(hash.values()); // ['Lockhart', 'Strife']
console.log(hash.buckets);
