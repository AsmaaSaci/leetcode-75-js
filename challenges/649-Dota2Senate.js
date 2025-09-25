var predictPartyVictory = function(senate) {
    let rQueue = [], dQueue = [];
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') rQueue.push(i);
        else dQueue.push(i);
    }
    let n = senate.length;
    while (rQueue.length && dQueue.length) {
        let rIndex = rQueue.shift();
        let dIndex = dQueue.shift();
        if (rIndex < dIndex) rQueue.push(rIndex + n);
        else dQueue.push(dIndex + n);
    }
    return rQueue.length ? "Radiant" : "Dire";
};
