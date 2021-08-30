//미로 탐색 상(-1, 0) 좌(0, -1) 우(0,1) 하(1,0)
let arr = [[0,0,0,0,0,0,0],
           [0,1,1,1,1,1,0],
           [0,0,0,1,0,0,0],
           [1,1,0,1,0,1,1],
           [1,1,0,0,0,0,1],
           [1,1,0,1,1,0,0],
           [1,0,0,0,0,0,0]];

function solution(arr){
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y){
    if(x == 6 && y == 6){
      answer++;
    }
    else{
      for(let k = 0; k < 4; k++){
        let nx = x + dx[k];
        let ny = y + dy[k];
        if(nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && arr[nx][ny] == 0){
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  return answer;
}
console.log(solution(arr));