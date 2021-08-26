function solution(n){
  function DFS(L){
    if(L>7) return;
    else{
      //console.log("전위순회 : " , L);
      DFS(L*2);
      //console.log("중위순회 : ", L);
      DFS(L*2+1);
      console.log("후위순회 : ", L);
    }
  }
  DFS(n)
}
console.log(solution(1));