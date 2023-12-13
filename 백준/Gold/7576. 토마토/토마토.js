const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split(" ").map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const dfs = (row, col, maze) => {
  const queue = [];
  const visited = Array.from({ length: col }, () => Array(row).fill(0));
  let head = 0;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      // -1에 관한 내용은 없음
      // -1 자리가 0으로 된 이유는 위의 visited를 선언할 때 모든 값을 0으로 만들어서
      if (maze[i][j] === 1) queue.push([i, j]);
      if (maze[i][j] === 0) visited[i][j] = -1;
    }
  }
  // 시간초과로 인해 (queue.length)가 아닌 queue.length > head 로 변경한다
  while (queue.length > head) {
    const [x, y] = queue[head++];
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
      // 초기값이 1 혹은 -1 인값들 제외
      // && 방문처리된것들 제외
      if (visited[nx][ny] >= 0) continue;
      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  let result = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (visited[i][j] === -1) return -1;
      result = Math.max(result, visited[i][j]);
    }
  }
  return result;
};
console.log(dfs(N, M, maze));