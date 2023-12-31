const fs = require("fs");
const result = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => {
  const [A,B] = v.split(" ").map(Number)
  return A > B ? "Yes" : "No"
});
result.pop();
console.log(result.join("\n"))