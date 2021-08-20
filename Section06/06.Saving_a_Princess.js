function solution(n, k){
  let queue = Array.from({length:n}, (v, i)=>++i);
  while(queue.length){
    for(var j = 0; j < k-1; j++){
        queue.push(queue.shift());
      }
      queue.shift();
      if(queue.length == 1) answer = queue.shift();
    }
  return answer;
}

console.log(solution(8, 3))