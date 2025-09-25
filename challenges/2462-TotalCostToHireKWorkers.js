var totalCost = function(costs, k, candidates) {
    const MinHeap = function() {
        this.data = [];
        this.size = () => this.data.length;
        this.push = (val) => {
            this.data.push(val);
            let i = this.data.length - 1;
            while (i > 0) {
                let p = Math.floor((i-1)/2);
                if (this.data[p] <= this.data[i]) break;
                [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
                i = p;
            }
        };
        this.pop = () => {
            if (this.data.length === 1) return this.data.pop();
            let top = this.data[0];
            this.data[0] = this.data.pop();
            let i = 0;
            while (true) {
                let left = 2*i+1, right = 2*i+2, smallest = i;
                if (left < this.data.length && this.data[left] < this.data[smallest]) smallest = left;
                if (right < this.data.length && this.data[right] < this.data[smallest]) smallest = right;
                if (smallest === i) break;
                [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
                i = smallest;
            }
            return top;
        };
        this.peek = () => this.data[0];
    };

    let left = 0, right = costs.length - 1;
    let total = 0;
    let leftHeap = new MinHeap(), rightHeap = new MinHeap();

    for (let i = 0; i < candidates && left <= right; i++) leftHeap.push(costs[left++]);
    for (let i = 0; i < candidates && left <= right; i++) rightHeap.push(costs[right--]);

    for (let i = 0; i < k; i++) {
        if (!rightHeap.size() || (leftHeap.size() && leftHeap.peek() <= rightHeap.peek())) {
            total += leftHeap.pop();
            if (left <= right) leftHeap.push(costs[left++]);
        } else {
            total += rightHeap.pop();
            if (left <= right) rightHeap.push(costs[right--]);
        }
    }
    return total;
};
