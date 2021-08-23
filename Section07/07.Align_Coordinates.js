let arr = [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
function solution(arr){
  let answer = [];
  answer = arr.sort((a,b)=>{ //2차원 배열 정렬
    if(a[0]===b[0]) return a[1]-b[1];
    else return a[0]-b[0];
  });
  return answer;
}
console.log(solution(arr));