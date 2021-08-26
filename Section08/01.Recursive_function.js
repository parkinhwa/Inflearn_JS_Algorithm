function solution(n){
  function re(L){
    if(L == 0) return;
    else {
      re(L-1);
      console.log(L);
    }
  }  
  re(n);
}
console.log(solution(3));