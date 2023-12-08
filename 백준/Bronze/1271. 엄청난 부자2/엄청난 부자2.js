const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const money = BigInt(input.shift()); // 1000n
const People = BigInt(input.shift()); // 100n
console.log((money / People).toString());
console.log((money % People).toString());
