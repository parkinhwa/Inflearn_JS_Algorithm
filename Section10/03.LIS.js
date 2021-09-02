let arr = [5, 3, 7, 8, 6, 2, 9, 4];
let arr2 = [2, 7, 5, 8, 6, 4, 7, 12, 3];
function solution(arr){
  let answer = 0;
  let n = arr.length;
  let dy = Array.from({length:n-1}, ()=>1);
  for(let i = 0; i < n; i++){
    let max = 0;
    for(let j = 0; j < i; j++){
      if(arr[i] > arr[j]){
        if(max < dy[j]) max = dy[j];
      }
    }
    dy[i] = max+1;
    answer = Math.max(answer, dy[i]);
  }
  console.log(dy);
  return answer;
}
console.log(solution(arr));