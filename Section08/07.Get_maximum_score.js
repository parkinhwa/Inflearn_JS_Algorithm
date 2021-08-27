let q = [10, 25, 15, 6, 7];
let a = [5, 12, 8, 3, 4]
function solution(q, a, m){
  let answer = 0;
  function DFS(L, sol, bun){
    if(bun > m) return;
    if(L == q.length){
      answer = Math.max(answer, sol);
    } else{
      DFS(L+1, sol+q[L], bun+a[L]);
      DFS(L+1, sol, bun);
    }
  }
  DFS(0, 0, 0);
  return answer;
}
console.log(solution(q, a, 20));