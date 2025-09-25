var removeStars = function(s) {
    let stack = [];
    for (let c of s) {
        if (c === '*') stack.pop();
        else stack.push(c);
    }
    return stack.join('');
};
