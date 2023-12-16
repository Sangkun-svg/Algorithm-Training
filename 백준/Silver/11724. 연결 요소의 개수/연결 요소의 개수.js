const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
let count = 0;
const visited = {};
const graph = {};
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
input.forEach((v) => {
  const [from, to] = v.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  const queue = [start];
  while (queue.length) {
    const vertex = queue.shift();
    graph[vertex].forEach((v) => {
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
      }
    });
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    count++;
  }
}
console.log(count);