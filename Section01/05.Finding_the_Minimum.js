function solution(a,b,c,d,e,f,g){
  var answer = [a,b,c,d,e,f,g]
  var min = 99999999
  //var min=Number.MAX_SAFE_INTEGER; 정수 제일 큰 값
  // for (var i = 0; i < answer.length; i++){
  //   if(answer[i] < min){
  //     min = answer[i]
  //   }
  // }

  // 내장 함수로 푸는 법
  // Math.min(배열)은 안됨 인자를 넣어줘야 함
  min = Math.min(...answer) // 위와 같이 펼쳐줘야 함 
  return min
}

console.log(solution(5,3,7,11,2,15,17))