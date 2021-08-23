let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
function solution(arr){
  let answer = 0, cnt = 0;
  let T_line = [];
  for(let x of arr){
    T_line.push([x[0], "start"]);
    T_line.push([x[1], "end"]);
  }

  T_line.sort((a,b)=>{
    if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt(); //아스키코드 순서로 정렬
    else return a[0]-b[0];
  });

  for(let x of T_line){
    console.log(x[0],x[1],cnt)
    if(x[1] == "start") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt)
  }
  return answer;
}
console.log(solution(arr));