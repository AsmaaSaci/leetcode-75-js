var maxScore = function(nums1, nums2, k) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++) arr.push([nums2[i], nums1[i]]);
    arr.sort((a,b) => b[0] - a[0]);

    class MinHeap {
        constructor() { this.heap = []; }
        size() { return this.heap.length; }
        push(val) {
            this.heap.push(val);
            let i = this.heap.length - 1;
            while (i > 0) {
                let p = Math.floor((i-1)/2);
                if (this.heap[p] <= this.heap[i]) break;
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            }
        }
        pop() {
            let top = this.heap[0];
            let end = this.heap.pop();
            if (this.heap.length === 0) return top;
            this.heap[0] = end;
            let i = 0;
            while (true) {
                let left = 2*i+1, right = 2*i+2, smallest = i;
                if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
                if (smallest === i) break;
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
            return top;
        }
        peek() { return this.heap[0]; }
    }

    let heap = new MinHeap();
    let sum = 0, res = 0;

    for (let [b, a] of arr) {
        heap.push(a);
        sum += a;
        if (heap.size() > k) sum -= heap.pop();
        if (heap.size() === k) res = Math.max(res, sum * b);
    }

    return res;
};
