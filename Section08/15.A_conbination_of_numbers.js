let arr = [2, 4, 5, 8, 12];
function solution(arr, k, m){
let answer = 0;
function DFS(L, s, sum){
  if(L === k){
    if(sum%m == 0){
      answer++;
    }
  } else{
    for(let i = s; i < arr.length; i++){
      DFS(L+1, i+1, sum+arr[i]);
    }
  }
}
DFS(0,0,0);
return answer;

  // 내 풀이
  // let answer = 0;
  // let ch = Array.from({length:arr.length}, ()=>0)
  // function DFS(v, sum){
  //   if(v == k) {
  //     console.log(v, sum, answer);
  //     if(sum%m==0) answer++;
  //     sum = 0;
  //     return;
  //   } else{
  //     for(let i = 0; i < arr.length; i++){
  //       if(ch[i] == 0){
  //         ch[i] = 1;
  //         DFS(v+1, sum+arr[i]);
  //         ch[i] = 0;
  //       }
  //     }
  //   }
  // }
  // DFS(0, 0);
  // return answer/m;
}
console.log(solution(arr, 3, 6));