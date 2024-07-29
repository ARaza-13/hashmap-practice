import HashMap from "./hash-map.js";

const hash = new HashMap();

hash.set("Tifa", "Lockhart");
hash.set("TIfa", "Lockhart");
hash.set("TiFa", "Lockhart");
hash.set("TifA", "Lockhart");
hash.set("tifa", "Lockhart");
hash.set("TIfa", "Lockhart");
hash.set("TIFa", "Lockhart");
hash.set("TiFA", "Lockhart");
hash.set("TIFA", "LOCKHART");
hash.set("Cloud", "Strife");
hash.set("Cloud", "Strife");
hash.set("CLoud", "Strife");
hash.set("ClOud", "Strife");
hash.set("CloUd", "Strife");
hash.set("ClouD", "Strife");
hash.set("cloud", "Strife");
hash.set("cLoud", "Strife");
hash.set("cloUd", "Strife");
hash.set("clouD", "Strife");
hash.set("CLOUD", "STRIFE");

console.log(hash.buckets);
