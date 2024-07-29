import HashMap from "./hash-map.js";
import HashSet from "./hash-set.js";

// TESTING FOR HASHMAP
console.log(
  "\n",
  "--------------------HASHMAP TESTING--------------------",
  "\n",
);

const map = new HashMap();

map.set("Tifa", "LOCKHART");
console.log(map.get("Tifa")); // LOCKHART

map.set("Tifa", "Lockhart");
console.log(map.get("Tifa")); // Lockhart

map.clear();
console.log(map.entries()); // []

console.log(map.get("Tifa")); // null
console.log(map.has("Tifa")); // false
console.log(map.remove("Tifa")); // false

map.set("Cloud", "Strife");
map.set("Tifa", "Lockhart");

console.log(map.get("Cloud")); // Strife
console.log(map.get("Tifa")); // Lockart

console.log(map.has("Cloud")); // true
console.log(map.has("Tifa")); // true

map.set("Aerith", "Gainsborough");
console.log(map.get("Aerith")); // Gainsborough
console.log(map.has("Aerith")); // true
console.log(map.keys()); // ['Tifa', 'Cloud', 'Aerith']
console.log(map.values()); // ['Lockhart', 'Strife', 'Gainsborough']
console.log(map.entries()); // [['Tifa', 'Lockhart'], ['Cloud', 'Strife'], ['Aerith', 'Gainsborough']]

console.log(map.remove("Aerith")); // true
console.log(map.get("Aerith")); // null
console.log(map.has("Aerith")); // false

console.log(map.length()); // 2
console.log(map.keys()); // ['Tifa', 'Cloud']
console.log(map.values()); // ['Lockhart', 'Strife']
console.log(map.entries()); // [['Tifa', 'Lockhart'], ['Cloud', 'Strife']]

// TESTING FOR HASHSET
console.log(
  "\n",
  "--------------------HASHSET TESTING--------------------",
  "\n",
);

const set = new HashSet();

set.add("Tifa");
set.add("Cloud");
console.log(set.buckets);
