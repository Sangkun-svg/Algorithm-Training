const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  const visited = Array.from({ length: N }, () => Array(M).fill(0));
  visited[startX][startY] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (visited[nx][ny] === 0 && maze[nx][ny] === 1) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return visited[N - 1][M - 1];
};
console.log(bfs(0, 0));