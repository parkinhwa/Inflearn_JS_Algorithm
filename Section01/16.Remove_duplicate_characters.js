str = "ksekkset"
function solution(str){
  let answer = "";
  for(let i=0; i<str.length; i++){
    if(str.indexOf(str[i]) == i) answer += str[i]; //indexOf("k", 2)는 인덱스 2부터 k를 처음 발견한 인덱스를 저장함 
  }
  
  return answer;
}
console.log(solution(str))