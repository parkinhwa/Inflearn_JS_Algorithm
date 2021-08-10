str1 = "study"
str2 = "good"
function solution(str){
  var answer = str.split(""); 
  var center = parseInt(answer.length/2); // ==> Math.floor(answer.length/2)
  if(str.length%2 == 1) answer=str.substring(center, center+1); // center부터 center+1전까지
  else answer = str.substring(center-1, center+1)

  //if(str.length%2 == 1) answer=str.substr(mid, 1);
  //else answer=str.substr(mid-1, 2);
  return answer;

  // 내 풀이
  // if(answer.length%2 == 1) return answer[center]; 
  // else return [answer[center-1], answer[center]].join("");
}
console.log(solution(str2))
