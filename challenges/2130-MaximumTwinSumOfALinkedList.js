var pairSum = function(head) {
    let vals = [];
    let node = head;
    while (node) {
        vals.push(node.val);
        node = node.next;
    }
    let maxSum = 0, n = vals.length;
    for (let i = 0; i < n / 2; i++) {
        maxSum = Math.max(maxSum, vals[i] + vals[n - 1 - i]);
    }
    return maxSum;
};
