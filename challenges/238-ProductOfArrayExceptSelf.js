var productExceptSelf = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(1);
    let prefix = 1, suffix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }
    return res;
};
