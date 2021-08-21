arr = [13, 5, 11, 7, 23, 15];
function solution(arr){
  for(var i = 0; i < arr.length-1; i++){
    for(var j = 0; j < arr.length-i-1; j++){
      if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
  }
  return arr;
}
console.log(solution(arr))