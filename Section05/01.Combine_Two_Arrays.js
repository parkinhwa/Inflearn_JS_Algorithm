const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
function solution(arr1, arr2){
  const arr3 = [...arr1, ...arr2];
  arr3.sort(function(a, b) {return a-b;});
  return arr3
}
console.log(solution(arr1, arr2));