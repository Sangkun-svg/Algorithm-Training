const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const size = input.shift();
const result = input.map(v =>v.split(",").map(Number).reduce((a,b) => a+b))
console.log(result.join("\n"))