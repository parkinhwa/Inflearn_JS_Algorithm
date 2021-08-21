arr = [13, 5, 11, 7, 23, 15];
function solution(arr){
  for(var i = 0; i < arr.length-1; i++){
    let idx = i;
    for(var j = i+1; j < arr.length; j++){
      if(arr[idx] > arr[j]) {
        idx = j;
    }
  }
  console.log(arr, idx);
  [arr[i], arr[idx]] = [arr[idx], arr[i]];
  console.log(arr);
 }
  return arr;
}
console.log(solution(arr))