arr = [[2,3,3,1,3], [1,1,2,2,3]]
function solution(arr){
  var answer = "";
  console.log(arr[0].length)
    for (var j = 0; j < arr[0].length; j++){
      if(arr[0][j] == 3 && arr[1][j] == 1) answer += "B"
      else if(arr[0][j] == 1 && arr[1][j] == 3) answer += "A"
      else if(arr[0][j] > arr[1][j]) answer += "A";
      else if(arr[0][j] < arr[1][j]) answer += "B";
      else answer += "D";
    }
  return answer;
}

console.log(solution(arr))