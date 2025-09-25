var orangesRotting = function(grid) {
  const m = grid.length, n = grid[0].length;
  const q = [];
  let fresh = 0, minutes = 0;
  for (let i=0;i<m;i++){
    for (let j=0;j<n;j++){
      if (grid[i][j] === 2) q.push([i,j,0]);
      else if (grid[i][j] === 1) fresh++;
    }
  }
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  while (q.length){
    const [x,y,t] = q.shift();
    minutes = Math.max(minutes,t);
    for (let [dx,dy] of dirs){
      const nx=x+dx, ny=y+dy;
      if (nx>=0 && nx<m && ny>=0 && ny<n && grid[nx][ny]===1){
        grid[nx][ny]=2;
        fresh--;
        q.push([nx,ny,t+1]);
      }
    }
  }
  return fresh===0 ? minutes : -1;
};
