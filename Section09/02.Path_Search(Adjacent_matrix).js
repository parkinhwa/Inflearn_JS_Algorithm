// 인접 행렬 (노드 개수가 적을 때 적용)
let arr = [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]];
function solution(n, arr){
  let answer = 0;
  let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0));
  let ch = Array.from({length:n+1}, ()=>0);
  //path = []; // 답인 경로들 보기 위함
  function DFS(L){
    for(let [a, b] of arr){
      graph[a][b] = 1; // 인접 행렬
    }
    if(L == n){
      answer++;
      //console.log(path);
    } else{
      for(let i = 1; i <= n; i++){
        if(graph[L][i] == 1 && ch[i] == 0){ // 다시 부모쪽으로 돌아오면 안되므로 check
        //path.push(i)
        ch[i] = 1;
        DFS(i);
        ch[i] = 0;
        //path.pop();
        }
      }
    }
  }
  //path.push(1);
  ch[1] = 1;
  DFS(1);
  return answer;
}
console.log(solution(5, arr));