// 인접 리스트 방법 (노드 개수가 많을 때 적용)
let arr = [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]];
function solution(n, arr){
  let answer = 0;
  let graph = Array.from(Array(n+1), ()=>Array());
  let ch = Array.from({length:n+1}, ()=>0);
  //path = [];
  for(let [a, b] of arr){
    graph[a].push(b); // 인접리스트
  }
  function DFS(L){
    if(L === n){
      answer++;
      //console.log(path)
    }else{
      for(let i = 0; i < graph[L].length; i++){
        if(ch[graph[L][i]] === 0){
          //path.push(graph[L][i]);
          ch[graph[L][i]] = 1;
          DFS(graph[L][i]);
          ch[graph[L][i]] = 0;
          //path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  //path.push(1);
  DFS(1);
  return answer;
}
console.log(solution(5, arr));