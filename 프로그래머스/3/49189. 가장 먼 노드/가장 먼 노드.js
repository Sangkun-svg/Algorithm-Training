function solution(n, edges) {
    // make adjacent list
    const list = edges.reduce((G, [from, to]) => {
        G[from] = (G[from] || []).concat(to);
        G[to] = (G[to] || []).concat(from);
        return G;
    }, {});

    // do BFS
    const queue = [1];
    const visited = {1: true};
    const dist = {1: 0};
    while(queue.length) {
        const vertex = queue.shift();
        if (list[vertex]) {
            list[vertex].forEach(n => {
                if (!visited[n]) {
                    queue.push(n);
                    visited[n] = true;
                    const d = dist[vertex] + 1;
                    if (dist[n] == undefined || d < dist[n]) {
                        dist[n] = d;
                    }
                }
            });
        }
    }
    // console.log(dist)
    const dists = Object.values(dist);
    const maxDist = Math.max(...dists);
    return dists.filter(d => d == maxDist).length;
}