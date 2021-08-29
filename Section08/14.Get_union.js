function solution(n, m){
  let answer = [];
  let tmp = Array.from({length:m}, ()=>0);
  function DFS(L, s){
    if(L === m){
      answer.push(tmp.slice());
    }else{
      for(let i = s; i <= n; i++){ // 앞에 수보다 뒤에 수가 커야함
        tmp[L] = i;
        DFS(L+1, i+1);
      }
    }
  }
  DFS(0, 1);
  return answer;

  //내 풀이
  // let answer = [];
  // let ch = Array.from({length:n+1}, ()=>0);
  // let tmp = [];
  // let a = 0;
  // function DFS(v){
  //   if(v == m){
  //     answer.push(tmp.slice());
  //   }
  //   else{
  //     for(let i = 1; i <= n; i++){
  //       if(v%(n-1) == 0){
  //           a = i;
  //       }
  //       if(ch[i] == 0 && a <= i){
  //         tmp[v] = i;
  //         ch[i] = 1;
  //         DFS(v+1);
  //         ch[i] = 0;
  //       }
  //    }
  //   }
  // }
  // DFS(0);
  // return answer.length;
}
console.log(solution(4, 2));