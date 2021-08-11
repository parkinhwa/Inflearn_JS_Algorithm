arr = [130, 135, 148, 140, 145, 150, 150, 153]
function solution(arr){
  var answer = arr.length;
  for(var i = 0; i < arr.length; i++){
    if(i < arr.length-1 && arr[i] >= arr[i+1]) {
      arr.splice(i+1, 1);
      i--;
      answer--;
    }
  }
  return answer;
}

console.log(solution(arr))