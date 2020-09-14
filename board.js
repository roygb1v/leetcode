const checkWord = (board, word) => {
  let k = 0;
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      let cell = board[i][j];
      let char = word[k];
      if (cell === char) {
        let found = dfs(board, i, j, k, word)
        if (found) {
          return true;
        }
      }
    }
  }
  return false;
}

const dfs = (board, i, j, index, word) => {
  if (word.length === index) return true;
  if (i >= 0 && j >= 0 && i < board.length && j < board[0].length) {
    let cell = board[i][j];
    let char = word[index];
    if (cell === char) {
      board[i][j] = '#';
      for (let x = -1; x < 2; x += 1) {
        for (let y = -1; y < 2; y += 1) {
          let ok = dfs(board, i + x, j + y, index + 1, word);
          if (ok) {
            return true;
          }
        }
      }
      return false;
    }
  }
}

const board = [
  ['E', 'B', 'Y', 'S'],
  ['L', 'D', 'R', 'A'],
  ['R', 'A', 'D', 'T'],
  ['C', 'W', 'H', 'I']
]

console.log(checkWord(board, 'CARBY'));
// console.log(checkWord(board, 'CARP'));
// console.log(checkWord(board, 'BRAT'));
console.log('board', board)
