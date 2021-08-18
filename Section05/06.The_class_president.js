const arr = "BACBACCACCBDEDE";
function solution(arr){
  let answer;
  let sH = new Map();
  for(let x of arr){
      if(sH.has(x)) sH.set(x, sH.get(x)+1); // 그 알파벳을 가지고있으면 value+1
      else sH.set(x, 1); // 아니면 value = 1
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){ //해쉬 반복문 돌리기
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;

  //내 풀이
  // const result = {};
  // arr = arr.split("");
  // arr.forEach((x)=>{
  //   result[x] = (result[x] || 0)+1;
  // });
  // var max = 0;
  // for(let x of Object.values(result)){
  //   if(max < x){
  //     max = x;
  //   }
  
  // var answer = Object.keys(result).find(key => result[key] === max);
  // return answer;
}
console.log(solution(arr))