var guessNumber = function(n) {
  let left = 1, right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const g = guess(mid);
    if (g === 0) return mid;
    if (g < 0) right = mid - 1;
    else left = mid + 1;
  }
};
