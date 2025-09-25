var longestZigZag = function(root) {
    let maxLen = 0;
    const dfs = (node, direction, length) => {
        if (!node) return;
        maxLen = Math.max(maxLen, length);
        if (direction === "left") {
            dfs(node.left, "right", length + 1);
            dfs(node.right, "left", 1);
        } else {
            dfs(node.right, "left", length + 1);
            dfs(node.left, "right", 1);
        }
    };
    dfs(root.left, "right", 1);
    dfs(root.right, "left", 1);
    return maxLen;
};
