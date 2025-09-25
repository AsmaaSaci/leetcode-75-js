var maxScore = function(nums1, nums2, k) {
  const n = nums1.length;
  const arr = [];
  for (let i=0;i<n;i++) arr.push([nums2[i], nums1[i]]);
  arr.sort((a,b)=>b[0]-a[0]);
  let heap = [], sum = 0, ans = 0;
  for (let [v2,v1] of arr) {
    heap.push(v1);
    sum += v1;
    heap.sort((a,b)=>a-b);
    if (heap.length > k) sum -= heap.shift();
    if (heap.length === k) ans = Math.max(ans, sum * v2);
  }
  return ans;
};
