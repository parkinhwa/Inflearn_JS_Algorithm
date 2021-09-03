let arr = [1, 2, 5];
function solution(arr, m){
  let answer;
  let dy = Array.from({length:m+1}, ()=>500);
  dy[0] = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = arr[i]; j < dy.length; j++){
      dy[j] = Math.min(dy[j], dy[j-arr[i]]+1);
      // if(dy[j] > dy[j-arr[i]]+1){
      //   dy[j] = dy[j-arr[i]]+1;
      // }
      console.log(dy, arr[i]);
    }
  }
  answer = dy[m];
  return answer;
}
console.log(solution(arr, 15))
