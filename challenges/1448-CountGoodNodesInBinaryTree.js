var goodNodes = function(root) {
    let count = 0;
    const dfs = (node, maxVal) => {
        if (!node) return;
        if (node.val >= maxVal) count++;
        let newMax = Math.max(maxVal, node.val);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    };
    dfs(root, root.val);
    return count;
};
