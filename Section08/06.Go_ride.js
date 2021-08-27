let arr = [81, 58, 42, 33, 61];
function solution(kg, arr){
  let answer = 0;
  function DFS(L, sum){
    if(sum > kg) return;
    if(L == arr.length){
      answer = Math.max(answer, sum);
      //console.log(sum);
    } else{
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0,0);
  return answer;
} 
console.log(solution(259, arr))