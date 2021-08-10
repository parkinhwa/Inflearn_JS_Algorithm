arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
function solution(arr){
  var sum = arr.reduce((a,b)=>a+b, 0)
  for(var i = 0; i < arr.length-1; i++){
    for(var j = 1; j < arr.length; j++){
      if(sum - (arr[i] + arr[j]) == 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

solution(arr)
