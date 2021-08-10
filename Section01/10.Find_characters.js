str = "COMPUTERPROGRAMMING"
s = "R"
function solution(str, s){
  var answer = 0;
  for (let x of str){
    if(x == s) answer++;
  }
  return answer;
  // let answer=str.split(s).length;
  // return answer-1;
}
solution(str, s)