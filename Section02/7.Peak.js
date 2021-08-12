// arr = [[0,0,0,0,0,0,0],[0,5,3,7,2,3,0],[0,3,7,1,6,1,0],[0,7,2,5,3,4,0],[0,4,3,6,4,1,0],[0,8,7,3,5,2,0],[0,0,0,0,0,0,0]]
let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
        
function solution(arr){
  var answer = 0;
  let n=arr.length;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        let flag=1;
          for(let k=0; k<4; k++){
              let nx=i+dx[k];
              let ny=j+dy[k];
              if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                  flag=0;
                  break;
              }
          }
          if(flag) answer++;
      }
  } 
  // 내 풀이
  // var up = 0; down = 0; right = 0; left = 0;
  // for (var i = 1; i < arr.length-1; i++){
  //   for(var j = 1; j < arr.length-1; j++){
  //     if(i > 0){
  //      up = arr[i-1][j];
  //      down = arr[i+1][j];
  //     }
  //     if(j > 0){
  //      right = arr[i][j+1];
  //      left = arr[i][j-1];
  //     }
  //     if(arr[i][j] > up && arr[i][j] > down && arr[i][j] > right && arr[i][j] > left) answer++;
  //   }
  // }
  return answer;
}
console.log(solution(arr))