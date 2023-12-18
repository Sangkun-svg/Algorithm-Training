const fs = require('fs');
const [n,m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(Math.abs(n - m))