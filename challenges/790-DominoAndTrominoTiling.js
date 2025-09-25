var numTilings = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 5;
    let mod = 1e9 + 7;
    let dp = [1, 2, 5];
    for (let i = 4; i <= n; i++) {
        let next = (2 * dp[2] + dp[0]) % mod;
        dp[0] = dp[1];
        dp[1] = dp[2];
        dp[2] = next;
    }
    return dp[2];
};
