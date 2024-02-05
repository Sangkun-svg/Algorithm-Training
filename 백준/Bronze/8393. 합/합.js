const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const result = Array.from({length: Number(input)}, (_,idx) => idx + 1).reduce((a,b) => a + b);
console.log(result);