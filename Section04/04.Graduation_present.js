var arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]
var m = 28
function solution(m, product){
    let answer=0;
    let n=product.length;
    product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1])); // 상품가격과 배송비 순서로 정렬
    for(let i=0; i<n; i++){
        let money=m-(product[i][0]/2+product[i][1]);
        let cnt=1;
        for(let j=0; j<n; j++){
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }  
    return answer;
}

//내 풀이 
// function solution(arr, m){
//   var max = 0;
//   for(var i = 0; i < arr.length; i++){
//     var raw = arr[i][0];
//     var sum = [];
//     var answer = 1;
//     var present = m - (arr[i][0]/2+arr[i][1]);
//     for(var j = 0; j < arr.length; j++){
//       if(i != j) sum.push(arr[j][0]+arr[j][1]); sum.sort(function(a, b) {return a - b}); // sort를 늦게함으로써 아래 for문이 또 필요했음
//     }

//     for(var k = 0; k < sum.length; k++){
//       if(present >= sum[k]) {
//         present = present - sum[k]; 
//         answer++;
//       }
//     }
//     if(max < answer) max = answer;
//     arr[i][0] = raw;
//   }
//   return max;
// }

console.log(solution(arr, m))