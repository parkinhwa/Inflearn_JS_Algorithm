let arr = [[1, 4],[2, 3],[3, 5],[4, 6],[5, 7]];
let arr2 = [[3, 3], [1, 3], [2, 3]];
//let arr3 = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
function solution(arr){
  let cnt = 1, answer = 0;
  arr.sort((a,b)=>{
    if(a[0]===b[0]) return a[1]-b[1];
    else return a[0]-b[0];
  });
  //console.log(arr);
  for(var i = 0; i < arr.length; i++){
    let end = arr[i][1];
    for(var j = i+1; j < arr.length; j++){
      if(end <= arr[j][0]) {
        end = arr[j][1];
        cnt++;
    }
  }
  if(answer < cnt){
    answer = cnt;
  }
  cnt = 1;
 }
 return answer;
}
console.log(solution(arr));