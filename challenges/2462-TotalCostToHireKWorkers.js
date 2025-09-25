var totalCost = function(costs, k, candidates) {
    let n = costs.length;
    let left = 0, right = n - 1;
    let leftHeap = [], rightHeap = [];
    let res = 0;
    while (k--) {
        while (leftHeap.length < candidates && left <= right) {
            leftHeap.push(costs[left++]);
        }
        while (rightHeap.length < candidates && left <= right) {
            rightHeap.push(costs[right--]);
        }
        let minLeft = leftHeap.length ? Math.min(...leftHeap) : Infinity;
        let minRight = rightHeap.length ? Math.min(...rightHeap) : Infinity;
        if (minLeft <= minRight) {
            res += minLeft;
            leftHeap.splice(leftHeap.indexOf(minLeft), 1);
        } else {
            res += minRight;
            rightHeap.splice(rightHeap.indexOf(minRight), 1);
        }
    }
    return res;
};
