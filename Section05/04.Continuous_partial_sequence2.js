const arr = [1, 3, 1, 2, 3];
const m = 5;
function solution(arr, m){
  let answer = 0, sum = 0, lt = 0;
  for(let rt = 0; rt < arr.length; rt++){
    sum += arr[rt];
    while(sum > m){
      sum -= arr[lt++];
    }
    answer += (rt-lt+1);
    //console.log(answer);
  }
  return answer;
}
console.log(solution(arr, m));