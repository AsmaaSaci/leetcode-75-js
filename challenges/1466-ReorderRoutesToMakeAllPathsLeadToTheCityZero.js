var minReorder = function(n, connections) {
    let graph = Array.from({length: n}, () => []);
    for (let [u, v] of connections) {
        graph[u].push([v, 1]);
        graph[v].push([u, 0]);
    }

    let visited = new Set();
    let ans = 0;

    function dfs(node) {
        visited.add(node);
        for (let [nei, cost] of graph[node]) {
            if (!visited.has(nei)) {
                ans += cost;
                dfs(nei);
            }
        }
    }

    dfs(0);
    return ans;
};
