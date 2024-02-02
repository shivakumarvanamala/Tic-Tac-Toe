function winnerCheck(mark) {

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (mark[a] && mark[a] === mark[b] && mark[a] === mark[c]) {
      return mark[a];
    }
  }

  if (mark.every(cell => cell !== null)) {
    return "tie";
  }
  return null;

}

export default winnerCheck;
