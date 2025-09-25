var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(c => c + extraCandies >= max);
};
