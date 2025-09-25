var largestAltitude = function(gain) {
    let max = 0, alt = 0;
    for (let g of gain) {
        alt += g;
        if (alt > max) max = alt;
    }
    return max;
};
