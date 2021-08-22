let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2 = [120, 130, 150, 150, 130, 150];
function solution(arr){
  let answer = [];
  //깊은 복사
  let sortArr = arr.slice();
  sortArr.sort((a,b)=>a-b);
  for(var i = 0; i < arr.length; i++){
    if(arr[i]!=sortArr[i]) answer.push(i+1);
  }
  return answer;
}
console.log(solution(arr2));