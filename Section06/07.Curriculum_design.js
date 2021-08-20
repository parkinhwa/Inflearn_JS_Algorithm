let sub = "CBA"
let cls = "CBDGE"
function solution(sub, cls){
  let answer = "YES";
  let queue = sub.split("");
  for(let x of cls){
    if(queue.includes(x)){ // cls가 sub에 포함되어있으면
      if(x !== queue.shift()) return answer = "NO";
    }
  }
  if(queue.length>0) return "NO"; 
  return answer;

  // 내 풀이
  // let answer = "YES"
  // queue = [];
  // for(let x of cls){
  //   for(let y of sub){
  //     if(x == y) queue.push(x);
  //   }
  // }
  // if(queue.join("") != sub) return answer = "NO";
  // return answer;
}
console.log(solution(sub, cls))