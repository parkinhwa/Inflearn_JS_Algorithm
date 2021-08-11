arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]
function solution(arr){
  var answer = 0; cnt = 0;
  for(var x of arr){
    if(x == 1) {
        cnt++;
        answer += cnt;
        
      }
    else cnt = 0;
  }
  return answer;
}
console.log(solution(arr));