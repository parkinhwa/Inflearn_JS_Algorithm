var str = "BANANA"
function solution(str){
  var answer = str.replace(/A/gi, "#")
  return answer;
}
solution(str)