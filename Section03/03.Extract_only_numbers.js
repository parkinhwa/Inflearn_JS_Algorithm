str = "g0en2T0s8eSoft"
function solution(str){
  let answer="";
  for(let x of str){
      if(!isNaN(x)) answer+=x; // 숫자인지 아닌지 판별하는 함수 isNaN()
  }  
  return parseInt(answer);
  //내 풀이
  // var s=str.replace(/[^0-9]/g,'');
  // s = Number(s);
  //return s;
}
console.log(solution(str));