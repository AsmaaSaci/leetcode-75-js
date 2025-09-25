var successfulPairs = function(spells, potions, success) {
  potions.sort((a,b)=>a-b);
  const m = potions.length;
  const res = [];
  for (let s of spells) {
    let left = 0, right = m-1, ans = m;
    while (left <= right) {
      const mid = Math.floor((left+right)/2);
      if (BigInt(s) * BigInt(potions[mid]) >= BigInt(success)) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    res.push(m - ans);
  }
  return res;
};
