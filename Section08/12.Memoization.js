// 이미 구한 조합 다시 구하지 않도록하는 방법
function solution(n, r){
  let answer = [];
  let dy= Array.from(Array(35), () => Array(35).fill(0)); //3행 5열
  function DFS(n, r){
      if(dy[n][r]>0) return dy[n][r];
      if(n===r || r===0) return 1;
      else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
  }
  answer = DFS(n, r);
  return answer;
}

// function solution(n, m){
//   let answer = 0;
//   function DFS(n, m){
//     if(n == m || m == 0){
//       return 1;
//     } else{
//       return DFS(n-1, m-1) + DFS(n-1, m)
//     }
//   }
//   answer = DFS(n, m);
//   return answer;
// }
console.log(solution(5, 3))