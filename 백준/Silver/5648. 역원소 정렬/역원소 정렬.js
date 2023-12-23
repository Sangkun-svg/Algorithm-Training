const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];
for (const v of input) {
  const nums = v.split(" ");
  for (const num of nums) {
    const reverseNumber = Number(num.split("").reverse().join(""));
    if(reverseNumber !== 0){
        result.push(Number(num.split("").reverse().join("")));
    }
  }
}
console.log(result.slice(1).sort((a, b) => a - b).join("\n"));