var compress = function(chars) {
    let write = 0, count = 1;
    for (let read = 0; read < chars.length; read++) {
        if (read + 1 < chars.length && chars[read] === chars[read + 1]) {
            count++;
        } else {
            chars[write++] = chars[read];
            if (count > 1) {
                for (let c of count.toString()) {
                    chars[write++] = c;
                }
            }
            count = 1;
        }
    }
    return write;
};
