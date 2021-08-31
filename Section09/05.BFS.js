function solution(n){
  let answer = "";
  let queue = [];
  queue.push(1);
  while(queue.length){
    let v = queue.shift();
    answer += v+" ";
    for(let nv of [v*2, v*2+1]){
      if(nv>7) break;
      queue.push(nv);
    }
  }
  return answer;
  
  // function BFS(L){
  //   if(L == 7) return;
  //   queue.push(L+1);
  //   BFS(L+1);
  // }
  // queue.push(1)
  // BFS(n);
  // return queue;
}
console.log(solution(1))