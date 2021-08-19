let board = [[0,0,0,0,0], [0,0,1,0,3], [0,2,5,0,1], [4,2,4,4,2], [3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];
function solution(board, moves){
  let stack = [];
  let answer = 0;
  for(let x of moves){
    for(var i = 0; i < board.length; i++){
      if(board[i][x-1] != 0) {
        stack.push(board[i][x-1]);
        board[i][x-1] = 0; 
        break;
      }
    }
    if(stack.length > 1){
      let a = stack.pop();
      let b = stack.pop();
      if(a == b) answer++;
      else {stack.push(b); stack.push(a);}
    }
  }
  return answer*2;
}
console.log(solution(board, moves));