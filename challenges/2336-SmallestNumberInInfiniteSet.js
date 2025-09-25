var SmallestInfiniteSet = function() {
  this.curr = 1;
  this.added = new Set();
  this.heap = [];
};

SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.heap.length) {
    const val = this.heap.shift();
    this.added.delete(val);
    return val;
  }
  return this.curr++;
};

SmallestInfiniteSet.prototype.addBack = function(num) {
  if (num < this.curr && !this.added.has(num)) {
    this.added.add(num);
    this.heap.push(num);
    this.heap.sort((a,b)=>a-b);
  }
};
