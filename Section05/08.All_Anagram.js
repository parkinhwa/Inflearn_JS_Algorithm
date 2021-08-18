const s = "bacaAacba";
const t = "abc";

function compareMaps(map1, map2){
    if(map1.size!==map2.size) return false; //ex)aca abc ==> 2 3
    for(let [key, val] of map1){
        if(!map2.has(key) || map2.get(key)!==val) return false;
    }
    return true;
}

function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){ // t 알파벳 관련 해시맵
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){ //첫번째 0부터 t.length-1전까지의 해시맵
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }

  //슬라이딩 기법, 투 포인터
  let lt=0; //rt는 t.length-1
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1); //뒤에 원소 추가
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1); //앞에 원소 빼고
      if(sH.get(s[lt])===0) sH.delete(s[lt]);//value = 0 되면 삭제
      lt++;
  }
  return answer;

  //내 풀이
  // var cut_s = [];
  // var answer = 0;
  // let tlength = t.length;
  // s = s.split("")
  // t = t.split("").sort().join("");
  // for(var i = 0; i < s.length-tlength+1; i++){
  //   for(var j = i; j < tlength+i; j++){
  //     cut_s.push(s[j])
  //   }
  //   cut_s = cut_s.sort().join("");
  //   if(cut_s == t) answer++;
  //   //console.log(cut_s);
  //   cut_s = [];
  // }
  // return answer;
}
console.log(solution(s, t));
