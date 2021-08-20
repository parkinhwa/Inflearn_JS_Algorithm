let bar1 = "()(((()())(())()))(())";
let bar2 = "(((()(()()))(())()))(()())";
function solution(bar){
  let answer = 0;
  stack = [];
  for(var i = 0; i < bar.length; i++){
    //console.log(bar[i])
    if(bar[i] == "(") {
      stack.push(bar[i]);
      //console.log(stack);
    } else {
      stack.pop();
      if(bar[i-1] == ")") answer += 1
      else{
      answer += stack.length;
      //console.log(stack, stack.length);
      }
    }
  }
  return answer;
}
console.log(solution(bar2));