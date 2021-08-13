str = "KKHSSSSSSSE"
function solution(str){
  var cnt = 1; answer = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] == str[i+1]) cnt++;
    else {
      answer += str[i]; 
      if(cnt > 1) answer += cnt; cnt = 1;}
  }
  return answer;
}
console.log(solution(str))