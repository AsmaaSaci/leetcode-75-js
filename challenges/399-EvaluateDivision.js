var calcEquation = function(equations, values, queries) {
    let graph = {};
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let val = values[i];
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    function dfs(src, dst, visited) {
        if (!(src in graph) || !(dst in graph)) return -1;
        if (src === dst) return 1;
        visited.add(src);
        for (let [nei, val] of graph[src]) {
            if (!
