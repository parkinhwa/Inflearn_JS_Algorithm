function solution(n){
  let answer = "";
  function bin(m){
    if(m == 0) return;
    else{
      bin(parseInt(m/2));
      answer+=String(m%2);
    } 
  }
  bin(n);
  return answer;
}
console.log(solution(11))