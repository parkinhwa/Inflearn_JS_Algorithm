let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7]
function solution(n, arr){
    let answer=Array.from({length:n}, ()=>0);
  arr.forEach(x => {
      let pos=-1;
      for(let i=0; i<n; i++) if(x===answer[i]) pos=i; // Hit
      if(pos===-1){ //Miss
          for(let i=n-1; i>=1; i--){
              answer[i]=answer[i-1];
          }
      }
      else{
          for(let i=pos; i>=1; i--){
              answer[i]=answer[i-1];
          }
      }
      // console.log(answer); 
      answer[0]=x;
      console.log(answer);  
  });

  return answer;
  
  //내 풀이
  // let memory = [];
  // for(var i = 0; i < arr.length; i++){
  //     if(memory.length < n){
  //       memory.unshift(arr[i])
  //       for(var j = 0; j < memory.length; j++){
  //         if(arr[i+1] == memory[j]){
  //           //console.log(memory)
  //           memory.splice(j, 1)
  //         }
  //       }
  //     } else {
  //       memory.pop();
  //       memory.unshift(arr[i]);
  //     }
  //   //console.log(memory);
  // }
  // return memory;
}
console.log(solution(5, arr));