str = "KoreaTimeGood"
function solution(str){
  var answer = 0;
  for(let x of str){
    if(x == x.toUpperCase()) answer++;
  }
  return answer;
}
solution(str);