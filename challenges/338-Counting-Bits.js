var countBits = function(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        res.push(i.toString(2).split('0').join('').length);
    }
    return res;
};
