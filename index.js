import HashMap from "./hash-map.js";

const hash = new HashMap();

hash.set("Tifa", "Lockhart");
hash.set("TIFA", "LOCKHART");
hash.set("Cloud", "Strife");
hash.set("CLOUD", "STRIFE");

console.log(hash.buckets);
