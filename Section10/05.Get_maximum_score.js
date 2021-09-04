// 중복이 가능하지 않을 때 냅색 알고리즘
let pro = [10, 25, 15, 6, 7];
let min = [5, 12, 8, 3, 4];
function solution(m, pro, min){
  let answer;
  let dy = Array.from({length:m+1}, ()=>0);
  for(let i = 0; i < pro.length; i++){
    for(let j = m; j >= min[i]; j--){
      dy[j] = Math.max(dy[j], dy[j-min[i]]+pro[i]);
      console.log(dy);
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution(20, pro, min));
