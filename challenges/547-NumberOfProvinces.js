var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let visited = new Set();
    let count = 0;

    function dfs(i) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++;
            dfs(i);
        }
    }

    return count;
};
