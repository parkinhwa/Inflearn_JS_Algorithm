function solution(s, e){
    let answer = 0;
    let ch = Array.from({length:10001}, ()=>0);
    let dis = Array.from({length:10001}, ()=>0);
    let queue = [];
    ch[s] = 1;
    queue.push(s);
    dis[s] = 0;
    while(queue.length){
      let x = queue.shift();
      for(let nx of [x-1, x+1, x+5]){
        if(nx === e) return dis[x] + 1;
        if(nx>0 && nx<=10000 && ch[nx] === 0){
          ch[nx] = 1;
          queue.push(nx);
          dis[nx] = dis[x]+1; 
        }
      }
  }
  return answer;
  // let answer = 0;
  // function BFS(s){
  //   if(s == e) return;
  //   if(s > e) {
  //       s = s - 1;
  //       answer++;
  //       console.log("-1", s, answer);
  //   } else {
  //     if(e-s >= 3){
  //       s = s + 5;
  //       answer++;
  //       console.log("5", s, answer);
  //     } else{
  //       s = s + 1;
  //       answer++;
  //       console.log("1", s, answer);
  //     }
  //   }
  //   BFS(s);
  // }
  // BFS(s);
  // return answer;
}
console.log(solution(8, 3));