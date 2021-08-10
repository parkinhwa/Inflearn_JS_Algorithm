function solution(n, a, b, c, d, e, f, g){
  var arr = [a,b,c,d,e,f,g]
  var answer = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i]%10 == n){
      answer += 1
    }
  }
  return answer
}

console.log(solution(3, 25, 23, 11, 47, 53, 17, 33))