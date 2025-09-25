var maxLevelSum = function(root) {
    if (!root) return 0;
    let queue = [root];
    let level = 1, bestLevel = 1, maxSum = -Infinity;
    while (queue.length) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (sum > maxSum) {
            maxSum = sum;
            bestLevel = level;
        }
        level++;
    }
    return bestLevel;
};
