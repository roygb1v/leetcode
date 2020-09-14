const exist = (board, word) => {
  let rows = board.length;
  let cols = board[0].length;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (backtrack(board, i, j, word)) {
        return true;
      }
    }
  }
  return false;
}

const backtrack = (board, row, col, suffix) => {
  if (suffix.length === 0) {
    return true;
  }
  let rows = board.length;
  let cols = board[0].length;
  if (row < 0 || row === rows || col < 0 || col === cols || board[row][col] !== suffix[0]) {
    return false;
  }
  board[row][col] = '#';
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  for (let idx in directions) {
    let [rowOffset, colOffset] = directions[idx]
    if (backtrack(board, row + rowOffset, col + colOffset, suffix.slice(1))) {
      return true;
    }
  }
  board[row][col] = suffix[0];
  return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

let word1 = 'ABCCED';
let word2 = 'SEE';
let word3 = 'ABCB';

console.log(exist(board, word1));
console.log(exist(board, word2));
console.log(exist(board, word3));
