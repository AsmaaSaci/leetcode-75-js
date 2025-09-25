var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    let stack = [0];
    while (stack.length) {
        let room = stack.pop();
        if (!visited.has(room)) {
            visited.add(room);
            for (let key of rooms[room]) {
                if (!visited.has(key)) stack.push(key);
            }
        }
    }
    return visited.size === rooms.length;
};
