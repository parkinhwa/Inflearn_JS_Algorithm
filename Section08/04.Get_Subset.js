function solution(n){
  let answer = [];
  let ch = Array.from({length:n+1}, ()=>0);
  function DFS(v){
    if(v == n+1) {
      let tmp="";
      for(let i = 1; i <= n; i++){
        if(ch[i] == 1) tmp+=i+" ";
      }
      if(tmp.length>0) answer.push(tmp.trim()); //공집합 제외
    } else {
      ch[v]=1; //앞으로 전진
      DFS(v+1); // 부모원소 포함 
      ch[v]=0; // (부모로)뒤로 백
      DFS(v+1); // 부모원소 비포함
    }
  }
  DFS(1);
  return answer;
}
console.log(solution(3));