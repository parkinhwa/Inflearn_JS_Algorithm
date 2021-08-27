let arr = [1, 3, 5, 6, 7, 10]
function solution(arr){
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a,b)=>a+b, 0);
    function DFS(L, sum){
      if(flag) return;
      if(L == arr.length) {
        if(total - sum == sum){
          answer = "YES";
          console.log(sum);
          flag = 1;
          //return; 이러면 여러 번 돔
        }
      }
      else{
         DFS(L+1, sum+arr[L]);
         DFS(L+1, sum);
      }
    }
  DFS(0, 0);
  return answer;
}
console.log(solution(arr))