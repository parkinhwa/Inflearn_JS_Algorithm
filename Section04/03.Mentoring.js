arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]
function solution(arr){
    let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let nTest = arr[i];
    if (i === 0) { // 첫번째 시험 등수로 만들 수 있는 모든 멘토멘티
      for (let x = 0; x < nTest.length - 1; x++) {
        for (let y = x + 1; y < nTest.length; y++) {
          answer.push([nTest[x], nTest[y]]);
        }
      }
    } else { // 두번째 시험등수와 첫번째 시험등수를 비교하여 answer 다시 넣음
      let prevArr = [...answer];
      answer = [];
      for (let x = 0; x < prevArr.length; x++) { 
        let first = prevArr[x][0];
        let second = prevArr[x][1];
        if (nTest.indexOf(first) < nTest.indexOf(second)) { // 첫번째 멘토가 두번째 세번째 시험에서도 멘티보다 높으면 answer에 다시 넣음
          answer.push([first, second]);
        }
      }
    }
  }
  return answer.length;

  // 내 풀이
  // var com = [];
  // for(var i = 0; i < arr.length; i++){
  //   for(var j = 0; j < arr[0].length; j++){
  //     for(var k = 1; k < arr[0].length; k++){
  //       if(k > j){
  //         //모든 경우의 수
  //         com.push([arr[i][j], arr[i][k]]);
  //       } 
  //     }
  //   }
  // }
  // var over = overlap(com);
  // var answer = 0;
  // for(var i = 0; i < over.length; i++){
  //   if(over[i] == arr.length) answer++;
  // }
  // return answer;
}

// 중복 횟수 구하기
// function overlap(arr){
//   const result = {};
//   arr.forEach((x) => { 
//     result[x] = (result[x] || 0)+1; 
//   });
//   return Object.values(result);
// }
console.log(solution(arr))