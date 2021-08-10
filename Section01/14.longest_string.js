str = ["teacher", "time", "student", "beautiful", "good"]
function solution(str){
  var max = 0;
  var answer = "";
  for (let x of str){
    if(max < x.length){
      max = x.length;
      answer = x
    }
  }
  return answer;
}

console.log(solution(str));