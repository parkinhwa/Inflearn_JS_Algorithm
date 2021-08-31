let arr = [[1,1,0,0,0,1,0],
           [0,1,1,0,1,1,0],
           [0,1,0,0,0,0,0],
           [0,0,0,1,0,1,1],
           [1,1,0,1,1,0,0],
           [1,0,0,0,1,0,0],
           [1,0,1,0,1,0,0]];

function solution(arr){
  let answer = 0;
  let n = arr.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1]; //상 상우 우 하우 하 하좌 좌 상좌 
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  function DFS(x, y){
    arr[x][y] = 0;
    for(let i = 0; i < 8; i++){
      let nx = x + dx[i];
      let ny = y + dy[i];
      if(nx>=0 && nx < n && ny>=0 && ny < n && arr[nx][ny] === 1){
        DFS(nx, ny);
      }
    }
  }
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(arr[i][j] == 1){
        answer++;
        DFS(i, j)
        console.log(i, j, "DFS_End", answer)
      }
    }
  }
  return answer;
}
console.log(solution(arr));