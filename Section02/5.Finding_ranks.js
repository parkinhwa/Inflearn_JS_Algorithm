//arr = [87, 89, 92, 100, 76]
arr2 = [100, 100, 89, 100, 100]
function solution(arr){
  var n = arr.length;
  var answer = Array.from({length:n}, ()=>1); //길이 n인 원소가 모두 1로 초기화된 배열
  for(var i = 0; i < n; i++){
    for(var j = 1; j < n; j++){
      if(arr[i] < arr[j]) answer[i]++;
    }
  }
  // var answer = [];
  // var rank = 1;
  // for(var i = 0; i < 5; i++){
  //   var max = 0;
  //   var max_idx = 0;
  //   for(var j = 0; j < arr.length; j++){
  //     if(max < arr[j]) {
  //       max = arr[j]; 
  //       max_idx = j;
  //     }
  //   }
  //   console.log(max, max_idx);
  //   answer[max_idx] = rank;
  //   rank++;
  //   arr[max_idx] = 0;
  //   console.log(arr)
  // }
  return answer;
}
console.log(solution(arr2))