let str = "(()(()))(()"
function solution(str){
  let answer = "YES";
  const stack = [];
  for(let x of str){
    if(x == "(") stack.push(x);
    else if(x == ")") {
      if(stack.length == 0) return answer = "NO";
      stack.pop();
    }
  }
  if(stack.length > 0) return answer = "NO";
  return answer;
}
console.log(solution(str));