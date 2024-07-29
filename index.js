import HashMap from "./hash-map.js";

const hash = new HashMap();

hash.set("Tifa", "LOCKHART");
console.log(hash.get("Tifa")); // LOCKHART

hash.set("Tifa", "Lockhart");
console.log(hash.get("Tifa")); // Lockhart

hash.clear();
console.log(hash.entries()); // []

console.log(hash.get("Tifa")); // null
console.log(hash.has("Tifa")); // false
console.log(hash.remove("Tifa")); // false

hash.set("Cloud", "Strife");
hash.set("Tifa", "Lockhart");

console.log(hash.get("Cloud")); // Strife
console.log(hash.get("Tifa")); // Lockart

console.log(hash.has("Cloud")); // true
console.log(hash.has("Tifa")); // true

hash.set("Aerith", "Gainsborough");
console.log(hash.get("Aerith")); // Gainsborough
console.log(hash.has("Aerith")); // true
console.log(hash.keys()); // ['Tifa', 'Cloud', 'Aerith']
console.log(hash.values()); // ['Lockhart', 'Strife', 'Gainsborough']
console.log(hash.entries()); // [['Tifa', 'Lockhart'], ['Cloud', 'Strife'], ['Aerith', 'Gainsborough']]

console.log(hash.remove("Aerith")); // true
console.log(hash.get("Aerith")); // null
console.log(hash.has("Aerith")); // false

console.log(hash.length()); // 2
console.log(hash.keys()); // ['Tifa', 'Cloud']
console.log(hash.values()); // ['Lockhart', 'Strife']
console.log(hash.entries()); // [['Tifa', 'Lockhart'], ['Cloud', 'Strife']]
