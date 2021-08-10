function solution(a, b, c){
  var min
  if(a < b) min = a
  else if (c < min) min = c 
  else min = b
  return min
}

console.log(solution(6, 5, 11))