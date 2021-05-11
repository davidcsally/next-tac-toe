const checkWin = (board) => {
  // check rows
  for (let i = 0; i < board.length; i += 3) {
    if (board[i] === 'x' || board[i] === 'o') {
      if (board[i] === board[i + 1] && board[i] === board[i + 2]) return true;
    }
  }

  // check columns
  for (let i = 0; i < 3; i += 1) {
    if (board[i] === 'x' || board[i] === 'o') {
      if (board[i] === board[i + 3] && board[i] === board[i + 6]) return true;
    }
  }

  // check diag
  if (board[0] === 'x' || board[0] === 'o') {
    if (board[0] === board[4] && board[0] === board[8]) return true;
  }

  if (board[2] === 'x' || board[2] === 'o') {
    if (board[2] === board[4] && board[2] === board[6]) return true;
  }

  return false;
};

export default checkWin;
