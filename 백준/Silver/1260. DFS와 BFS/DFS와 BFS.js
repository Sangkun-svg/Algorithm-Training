const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [size, edgeSize, start] = input.shift().split(" ").map(Number);
const result = [];
const adjacencyList = {};
const sortedList = {};

// AddVertex()
for (let i = 1; i <= size; i++) {
  adjacencyList[i] = [];
}

// addEdge()
input.forEach((v) => {
  const [vertex1, vertex2] = v.split(" ").map(Number);
  adjacencyList[vertex1].push(vertex2);
  adjacencyList[vertex2].push(vertex1);
});

// sort Edges
Object.entries(adjacencyList).forEach((v) => {
  const [key, value] = v;
  const sortedValue = value.sort((a, b) => a - b);
  sortedList[key] = sortedValue;
});

// DFS
const dfs = (start) => {
  const result = [];
  const visited = {};
  const recusion = (vertex) => {
    if (!vertex) return null;
    result.push(vertex);
    visited[vertex] = true;
    sortedList[vertex].forEach((v) => {
      if (!visited[v]) {
        return recusion(v);
      }
    });
  };
  recusion(start);
  return result.join(" ");
};

// BFSR
const bfs = (start) => {
  const result = [];
  const visited = {};
  const queue = [];

  queue.push(start);
  visited[start] = true;

  while (queue.length) {
    const vertex = queue.shift();
    result.push(vertex);

    sortedList[vertex].forEach((v) => {
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
      }
    });
  }

  return result.join(" ");
};

result.push(dfs(start));
result.push(bfs(start));

console.log(result.join("\n"));