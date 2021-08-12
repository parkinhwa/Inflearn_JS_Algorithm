arr = [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [70, 13, 30, 13, 19]]
function solution(arr){
  var max = 0; garo = 0; sero = 0; degack_l = 0; degack_r = 0;
  var k = arr.length-1;
  for (var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      garo += arr[i][j];
      sero += arr[j][i];
      if(i == j){
        degack_l += arr[i][j];
      } 
    }
    degack_r += arr[i][k--]; // k == arr.length-i-1
    if(max < garo){max = garo;}
    else if(max < sero){max = sero;}
    garo = 0; sero = 0;
  }
  if(max < degack_l && degack_l > degack_r) {max = degack_l;}
  else if(max < degack_r && degack_r > degack_l) {max = degack_r;}
  return max;
}
console.log(solution(arr))