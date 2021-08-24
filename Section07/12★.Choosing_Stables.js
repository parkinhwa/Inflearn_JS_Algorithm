let arr = [1, 2, 8, 4, 9];
let arr2 = [1, 2, 4, 6, 8, 9];
let arr3 = [1, 2, 4, 6, 9]; // m = 4
let arr4 = [1, 4, 6, 8, 9]; // m = 4

function count(arr, dist){ 
  let cnt=1, ep = arr[0];
  //console.log(dist)
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - ep >= dist){
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
}

function solution(arr, m){
  let answer;
  let lt = 1;
  let rt = arr[arr.length-1];
  arr.sort((a,b)=>a-b);
  //이분검색
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2);
    console.log(mid)
    if(count(arr, mid) >= m){
      answer = mid;
      lt=mid+1;
    } else rt=mid-1
  }
  return answer;
}
console.log(solution(arr, 3));