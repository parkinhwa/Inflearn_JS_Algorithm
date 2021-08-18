let arr1 = "AbaAeCe";
let arr2 = "baeeACA";
function solution(arr1, arr2){
  let answer="YES"; 
  let sH = new Map();
  for(let x of arr1){ //arr1 알파벳 수 모두 세고
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  for(let x of arr2){ //arr2에도 있는 알파벳을 arr1 value에서 빼줌
      if(!sH.has(x) || sH.get(x)==0) return "NO";// arr2에 있는 알파벳이 arr1에 없거나 arr2에 알파벳을 빼야하는데 arr1의 그 알파벳 수가 이미 0일때
      sH.set(x, sH.get(x)-1);
  }
  return answer;

  //내 풀이
  // arr1 = arr1.split("").sort(); arr2 = arr2.split("").sort();
  // const result1 = new Map();
  // const result2 = new Map();
  // arr1.forEach((x) => {
  //   result1[x] = (result1[x] || 0)+1;
  // })
  // arr2.forEach((x) => {
  //   result2[x] = (result2[x] || 0)+1;
  // })
  // let length = Object.keys(result1).length
  // for(var i = 0; i < length; i++){
  //   if(Object.values(result1)[i] == Object.values(result2)[i]) {
  //     return "YES";
  //   }else return "NO";
  }
}
console.log(solution(arr1, arr2));