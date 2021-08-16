arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]
k = 3
function solution(card, k){
    let answer;
    let tmp = new Set(); // Set 자체가 중복제거
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    let a=Array.from(tmp).sort((a, b)=>b-a); //Set을 역순정렬함
    answer=a[k-1];
    return answer;
}
//내 풀이
// function solution(arr, k){
//   var com = []
//   for(var i = 0; i < arr.length-2; i++){
//     for(var j = i+1; j < arr.length-1; j++){
//       for(var r = j+1; r < arr.length; r++){
//           var sum = arr[i]+arr[j]+arr[r];
//           com.push(sum);
//           }
//       }
//     }
//   }
//   var answer = overlap(com)
//   answer = answer[answer.length-k]
//   return answer;
// }

// function overlap(arr, k){
//   const result = {};
//   arr.forEach((x)=>{
//     result[x] = (result[x] || 0)+1;
//   });
//   return Object.keys(result);
// }

console.log(solution(arr, k))