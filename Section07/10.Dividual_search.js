let arr = [23, 87, 65, 12, 57, 32, 99, 81]
function solution(arr, m){
  let answer = 0;
  arr.sort((a,b)=>a-b)
  for(var i = 0; i < arr.length; i++){
    if(m == arr[i]){
      answer = i+1;
      break;
    }
  }
  return answer;
}
console.log(solution(arr, 32));