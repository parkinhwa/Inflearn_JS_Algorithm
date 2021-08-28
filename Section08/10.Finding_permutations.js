let arr = [3, 6, 9]
function solution(n, m){
  let answer = [];
  let ch = Array.from({length:arr.length}, ()=>0)
  let tmp = Array.from({length:m}, ()=>0);
  function DFS(L){
    if(L == m){
      answer.push(tmp.slice());
    }
    else{
      for(let i = 0; i < arr.length; i++){
        if(ch[i] == 0){
        //console.log(tmp[L], arr[i])
        ch[i] = 1;
        tmp[L] = arr[i];
        DFS(L+1);
        ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer.length;
}
console.log(solution(arr, 2))