let str = "gooG"
function solution(str){
  let s = str.toLowerCase().split("")
  for(var i = 0; i < s.length; i++){
    if(s[i] == s[s.length-i-1]){
      return "YES";
    } else return "NO";
  }
}
console.log(solution(str))