arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}
function solution(arr){
    let answer=[];
    for(let x of arr){
        let res=0;
        while(x){ // 역순 취함
            let t=x%10;
            res=res*10+t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}
//내 풀이            
// function solution(arr){
//   var rev = [];
//   for(var x of arr){
//     x = parseInt(x.toString().split("").reverse().join(""));
//     rev.push(x)
//   }
//   for(var i = 0; i < rev.length; i++){
//     if(rev[i] < 2){
//       rev.splice(i, 1);
//       i--;
//     }
//     for(var j = 2; j < rev[i]; j++){
//       if(rev[i]%j == 0){
//         rev.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   return rev;
// }
console.log(solution(arr)) 