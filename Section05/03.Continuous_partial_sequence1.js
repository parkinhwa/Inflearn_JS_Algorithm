const arr = [1, 2, 1, 3, 1, 1, 1, 2];
const m = 6;
function solution(arr, m){
  let answer = 0;
  let sum = 0;
  let idx = -1;
  for(var i = 0; i < arr.length; i++){
    //console.log(arr[i], sum , i, idx, answer)
    if(sum < m) {
      sum += arr[i];
    } else if(sum == m) {
      answer++; 
      sum = 0;
      idx += 1; 
      i = idx;
    } else if(sum > m) {
      sum = 0; 
      idx += 1; 
      i = idx;
    }
  }
  return answer;
}
console.log(solution(arr, m))