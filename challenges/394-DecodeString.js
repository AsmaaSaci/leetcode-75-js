var decodeString = function(s) {
    let stackNum = [], stackStr = [], currNum = 0, currStr = '';
    for (let c of s) {
        if (!isNaN(c)) {
            currNum = currNum * 10 + Number(c);
        } else if (c === '[') {
            stackNum.push(currNum);
            stackStr.push(currStr);
            currNum = 0;
            currStr = '';
        } else if (c === ']') {
            let repeat = stackNum.pop();
            let prevStr = stackStr.pop();
            currStr = prevStr + currStr.repeat(repeat);
        } else {
            currStr += c;
        }
    }
    return currStr;
};
