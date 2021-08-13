str = "found7, time: study; Yduts; emit, 7Dnuof";
function solution(str){
    let answer="YES";
    str=str.toLowerCase().replace(/[^a-z]/g, '');
    console.log(str)
    if(str.split('').reverse().join('')!==str) return "NO";
    return answer;
}
console.log(solution(str))