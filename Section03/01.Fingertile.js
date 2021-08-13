let str = "gootG"
function solution(str){
  var answer = "YES";
  let s = str.toLowerCase()
  for(var i = 0; i < Math.floor(s.length/2); i++){
    if(s[i] !== s[s.length-i-1]){
      return answer = "NO";
    }
  }
}
console.log(solution(str))