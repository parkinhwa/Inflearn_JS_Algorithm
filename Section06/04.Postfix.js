let postfix = "352+*9-"
// let postfix = 3*(5+2)-9;
function solution(postfix){
  let stack = [];
  for(x of postfix){
    //숫자만 참
    if(!isNaN(x)) stack.push(Number(x)); 
    else{
      let b=stack.pop();
      let a=stack.pop();
      if(x==='+') stack.push(a+b);
      else if(x==='-') stack.push(a-b);
      else if(x==='*') stack.push(a*b);
      else if(x==='/') stack.push(a/b);
    }
  }
  answer = stack[0];
  return answer;
}
console.log(solution(postfix));