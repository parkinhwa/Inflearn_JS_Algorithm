arr = [1, 4, 2, -3, -2, 5, 6, -6];
function solution(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length-i-1; j++){
      if(arr[j] > 0 && arr[j+1] < 0) { //앞이 양수 뒤가 음수일때 
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; //바꿈
      }
    }
  }
  return arr;
}
console.log(solution(arr))