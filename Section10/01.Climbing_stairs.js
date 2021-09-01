// 앞에 두 계단 방식을 더하는 방법
// 7층은 = 8(5층) + 13(6층)
function solution(n){
  let answer = 0;
  let dy = Array.from({length:n+1}, ()=>0);
  dy[1] = 1;
  dy[2] = 2;
  for(let i = 3; i <= n; i++){
    dy[i] = dy[i-2]+dy[i-1];
  }
  answer = dy[n];
  return answer;
}

// 내 풀이
// 두 칸씩 올라간게 몇번이냐 따라 구함
//function combi(n, r){
//   //console.log(n, r);
//   if(r === 1 || r === n-1) return n;
//   if(n === r || n === 0) return 1;
//   else return combi(n-1, r-1) + combi(n-1, r);
// }
// function solution(m){
//   let answer = 1;
//   for(let i = 1; i <= Number(m/2); i++){
//     let na = Number(m-(i*2));
//     length = i + na;
//     //console.log(i, na, length); 
//     if(m < 2) return answer = 1;
//     else{
//         answer += combi(length, i)
//         //console.log(answer);
//       }
//     }
//   return answer;
//}
console.log(solution(7));