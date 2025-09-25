var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    let count1 = new Map(), count2 = new Map();
    for (let c of word1) count1.set(c, (count1.get(c) || 0) + 1);
    for (let c of word2) count2.set(c, (count2.get(c) || 0) + 1);
    if (![...count1.keys()].every(k => count2.has(k))) return false;
    let freq1 = [...count1.values()].sort((a,b)=>a-b);
    let freq2 = [...count2.values()].sort((a,b)=>a-b);
    return freq1.join(',') === freq2.join(',');
};
