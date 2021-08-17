const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let k = 3;
function solution(arr, k){
  // 슬라이딩 윈도우 기법
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=arr[i]; // 12+15+11
  answer=sum;
  for(let i=k; i<arr.length; i++){
      sum+=(arr[i]-arr[i-k]); // 12+15+11+20-12 이런식으로 한칸씩 밈
      answer=Math.max(answer, sum);
  }                    
  return answer;
  // 내 풀이
  // var answer = 0, max = 0; 
  // for(var i = 0; i < arr.length; i++){
  //   for(var j = i; j < i+k; j++){
  //     answer += arr[j];
  //   }
  //   if(max < answer) max = answer;
  //   answer = 0;
  // }
  // return max;
}
console.log(solution(arr, k));