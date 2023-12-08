const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const start = 1;
const vertices = Number(input.shift());
const edgeSize = Number(input.shift());
const result = [];
const list = {};

// Add Verteces
for (let i = 1; i <= vertices; i++) {
  list[i] = [];
}

// Add Edges
input.forEach((v) => {
  const [vertex1, vertex2] = v.split(" ").map(Number);
  list[vertex1].push(vertex2);
  list[vertex2].push(vertex1);
});

const dfs = (start) => {
  const result = [];
  const visitied = {};
  const queue = [start];
  visitied[start] = true;

  while (queue.length) {
    const vertex = queue.shift();
    result.push(vertex);

    list[vertex].forEach((v) => {
      if (!visitied[v]) {
        visitied[v] = true;
        queue.push(v);
      }
    });
  }
  return result;
};

console.log(dfs(start).length - 1);