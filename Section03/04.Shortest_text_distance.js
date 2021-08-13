s = "teachermode"
t = "e"
function solution(s, t){
  var answer = [];
  var cnt = 0;
  for(let x of s){
    if(x === t){
      cnt = 0;
      answer.push(cnt);
    } else answer.push(++cnt);
  }
  for(var i = s.length-1; i >= 0; i--){
    if(s[i] === t){
    cnt = 0;
    } else {
      cnt++;
      answer[i] = Math.min(answer[i], cnt);
      } //둘 중 작은 값으로 교체
  }
  return answer;
}
console.log(solution(s, t))