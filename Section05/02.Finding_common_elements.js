const arr1 = [1, 3, 9, 5, 2]
const arr2 = [3, 2, 5, 7, 8]
function solution(arr1, arr2){
  const arr3 = [];
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] == arr2[j]) arr3.push(arr1[i]);
    }
  }
  return arr3.sort(function(a, b){return a-b});
}
console.log(solution(arr1, arr2))