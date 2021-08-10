function solution(n){
  var answer = 0
  for(var i = 1; i < n+1; i++){
    answer += i
  }
  return answer
}

console.log(solution(10))