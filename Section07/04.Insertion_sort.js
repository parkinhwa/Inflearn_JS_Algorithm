arr = [13, 5, 11, 7, 23, 15];
function solution(arr){
  for(var i = 0; i < arr.length; i++){
    let tmp = arr[i];
    for(var j = i-1; j >= 0; j--){
      if(arr[j]>tmp) arr[j+1] = arr[j]
      else break;
    }
    arr[j+1] = tmp;
  }
  return arr;
}
console.log(solution(arr))