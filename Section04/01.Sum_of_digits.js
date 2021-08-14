arr = [128, 460, 603, 40, 521, 137, 123]
function solution(arr){
  var max = 0;
  var answer = 0;
  for(var x of arr){
    var sum = 0; tmp = x;
    var length = x.toString().length;
    for(var i = 0; i < length; i++){
      sum += tmp%10;
      tmp = parseInt(x/10);
    }
    if(max < sum){
      max = sum;
      answer = x;
    } else if(max == sum){
      if(x > answer) answer = x;
    }
  }
  return answer;
}
console.log(solution(arr))