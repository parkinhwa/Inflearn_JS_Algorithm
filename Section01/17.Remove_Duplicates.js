str = ["good", "time", "good", "time", "student"]
function solution(str){
  var answer;

  answer=str.filter(function(v, i){ // v = str의 value, i = index
    console.log(v, i)
    return str.indexOf(v)===i;
  });

  //내 풀이
  // for (var i = 0; i < str.length; i++){
  //   // console.log(i, str[i], str.indexOf(str[i]))
  //   if(str.indexOf(str[i]) == i) answer.push(str[i]);
  // }
  return answer;
}
console.log(solution(str))