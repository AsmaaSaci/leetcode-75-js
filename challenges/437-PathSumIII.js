var pathSum = function(root, targetSum) {
    let count = 0;
    const dfs = (node, path) => {
        if (!node) return;
        path.push(node.val);
        let sum = 0;
        for (let i = path.length - 1; i >= 0; i--) {
            sum += path[i];
            if (sum === targetSum) count++;
        }
        dfs(node.left, path);
        dfs(node.right, path);
        path.pop();
    };
    dfs(root, []);
    return count;
};
