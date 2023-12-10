const fs = require("fs");
const [A, P] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const arr = [A];

while (true) {
  const next = arr[arr.length - 1]
    .toString()
    .split("")
    .map((v) => Number(v) ** P)
    .reduce((a, b) => a + b);
  if (arr.includes(next)) {
    console.log(arr.indexOf(next));
    break;
  }
  arr.push(next);
}