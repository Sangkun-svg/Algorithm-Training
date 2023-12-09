const fs = require("fs");
const [d, p] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(d - d * (p * 0.01) >= 100 ? 0 : 1);