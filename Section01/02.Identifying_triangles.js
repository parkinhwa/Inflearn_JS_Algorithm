function solution(a, b, c){
  var max, res
  if(a > b) max = a, res = b+c
  else if (c > max) max = c, res = a+b
  else max = b, res = a+c

  if(max < res) return "YES"
  else return "NO"
}

console.log(solution(13, 33, 17))