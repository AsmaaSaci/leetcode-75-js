var reverseVowels = function(s) {
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (!vowels.has(arr[i])) { i++; continue; }
        if (!vowels.has(arr[j])) { j--; continue; }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr.join('');
};
