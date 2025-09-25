var longestSubarray = function(nums) {
    let maxLen = 0, left = 0, zeroCount = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;
        while (zeroCount > 1) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
};
