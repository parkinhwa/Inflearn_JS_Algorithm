//이분검색, 결정알고리즘
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 8, 5, 4, 9, 3, 6, 7]
function count(arr, mid){ //앨범 담은 용량
  let cnt=1, sum=0;
  for(let x of arr){
    if(sum+x > mid){
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution(arr, m){
  let answer;
  let lt = Math.max(...arr);
  let rt = arr.reduce((a, b)=>a+b) //전체합
  //이분검색
  while(lt<=rt){
    let mid = parseInt((lt+rt)/2);
    if(count(arr, mid) <= m){
      answer = mid;
      rt=mid-1;
    } else lt=mid+1
  }
  return answer;

  //내 풀이
  // let answer = 0;
  // let max = 0, sum = 0, a = 0;
  // for(let x of arr){
  //   if(max < x) max = x;
  //   sum += x;
  // }
  // while(max <= sum){
  //   let mid = parseInt((max+sum)/2);
  //   let dvd = [];
  //   let a = 0;
  //   //console.log(max, sum, mid);
  //   for(var i = 0; i < arr.length; i++){
  //     if(a <= mid){
  //       a += arr[i];
  //     } else if(a > mid) {
  //       dvd.push(a-arr[i-1]);
  //       i = i-2;
  //       a = 0; 
  //     }
  //     //console.log(i, a, arr[i], mid)
  //   }
  //   dvd.push(a)
  //   //console.log(dvd, max, sum, dvd.length);
  //   if(dvd.length == m){
  //     answer = Math.max(...dvd);
  //     break;
  //   } else if(dvd.length < m){
  //      sum = mid-1;
  //   } else max = mid-1;
  // }
  // return answer;
}
console.log(solution(arr2, 3))