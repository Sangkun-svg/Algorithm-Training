const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const count = 2 ** input - 1;
const result = [];

function hanoiTower(num, from, other, to) {
  if (num === 0) return;
  hanoiTower(num - 1, from, to, other);
  result.push([from, to]);
  hanoiTower(num - 1, other, from, to);
}

hanoiTower(Number(input), "1", "2", "3");
console.log(count);
console.log(result.map((el) => el.join(" ")).join(" \n"));