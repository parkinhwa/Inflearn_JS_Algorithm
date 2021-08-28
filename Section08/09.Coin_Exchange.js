let n = [1, 2, 5]
function solution(n, m){
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum){
    if(sum > m || L > answer) return;
    if(sum == m) {
      console.log(L, sum);
      answer = Math.min(answer, L);
    } else{
      for(let i = 0; i < n.length; i++){
        DFS(L+1, sum+n[i]);
      }
    }
  }
  DFS(0,0);
  return answer;
}
console.log(solution(n, 15));