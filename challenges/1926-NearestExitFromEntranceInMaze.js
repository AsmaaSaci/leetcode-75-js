var nearestExit = function(maze, entrance) {
  const m = maze.length, n = maze[0].length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const q = [[entrance[0], entrance[1], 0]];
  maze[entrance[0]][entrance[1]] = '+';
  while (q.length) {
    const [x,y,steps] = q.shift();
    for (let [dx,dy] of dirs) {
      const nx = x+dx, ny = y+dy;
      if (nx>=0 && nx<m && ny>=0 && ny<n && maze[nx][ny]==='.') {
        if (nx===0 || nx===m-1 || ny===0 || ny===n-1) return steps+1;
        maze[nx][ny] = '+';
        q.push([nx,ny,steps+1]);
      }
    }
  }
  return -1;
};
