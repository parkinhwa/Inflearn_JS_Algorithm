function solution(a,b,c,d,e,f,g){
  var answer = [a,b,c,d,e,f,g]
  var sum = 0
  var min = 101
  for(let x of answer){
    if(x%2 != 0){
      sum += x
      if(x < min){
        min = x
      }
    }
  }

  // for(var i = 0; i < answer.length; i++){
  //   if(answer[i]%2 != 0){
  //     sum += answer[i]
  //     if(answer[i] < min){
  //       min = answer[i]
  //     }
  //   }
  // }
  console.log(sum)
  console.log(min)
}

console.log(solution(12,77,38,41,53,92,85))