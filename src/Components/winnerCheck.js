const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winnerCheck(mark) {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (mark[a] && mark[a] === mark[b] && mark[a] === mark[c]) {
      return mark[a];
    }
  }

  // Check rows
  // for (let i = 0; i < 9; i += 3) {
  //   if (mark[i] && mark[i] === mark[i + 1] && mark[i] === mark[i + 2]) {
  //     return mark[i];
  //   }
  // }

  // Check columns
  // for (let i = 0; i < 3; i++) {
  //   if (mark[i] && mark[i] === mark[i + 3] && mark[i] === mark[i + 6]) {
  //     return mark[i];
  //   }
  // }

  // Check diagonals
  // if (mark[0] && mark[0] === mark[4] && mark[0] === mark[8])
  //   return mark[0];
  // if (mark[2] && mark[2] === mark[4] && mark[2] === mark[6])
  //   return mark[2];

  return null;
}

export default winnerCheck;
