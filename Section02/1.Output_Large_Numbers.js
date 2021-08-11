arr =[7, 3, 9, 5, 6, 12]
function solution(arr){
  var answer = [];
  answer.push(arr[0])
  for(var i = 1; i < arr.length; i++){
    if(arr[i]>arr[i-1]) answer.push(arr[i]);
    // if(0 < i < arr.length-1 && arr[i] < arr[i+1]) answer.push(arr[i+1])
  }
  return answer;
}
console.log(solution(arr))