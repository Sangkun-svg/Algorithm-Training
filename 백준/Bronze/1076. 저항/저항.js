const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const table = {
  black: { v: 0, m: 1 },
  brown: { v: 1, m: 10 },
  red: { v: 2, m: 100 },
  orange: { v: 3, m: 1000 },
  yellow: { v: 4, m: 10000 },
  green: { v: 5, m: 100000 },
  blue: { v: 6, m: 1000000 },
  violet: { v: 7, m: 10000000 },
  grey: { v: 8, m: 100000000 },
  white: { v: 9, m: 1000000000 },
};
const result = input.map((v, idx) => {
  if (idx === input.length - 1) {
    return table[v].m;
  }
  return table[v].v + "";
});

console.log(parseInt(result[0] + result[1]) * result[2]);