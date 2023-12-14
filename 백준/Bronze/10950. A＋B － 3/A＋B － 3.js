const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift()
input.forEach(v => {
    console.log(v.split(" ").map(Number).reduce((a,b) => a+b))
})