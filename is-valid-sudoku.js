// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.

// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","8",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]

// Output: true

// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","1",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]

// Output: false

function isValidSudoku(board) {
  function checkRows(board) {
    for (let i = 0; i < board.length; i++) {
      const helper = new Set();

      for (let j = 0; j < board[i].length; j++) {
        const value = board[i][j];

        if (value !== '.') {
          if (helper.has(value)) {
            return false;
          } else {
            helper.add(value);
          }
        }
      }
    }

    return true;
  }

  function checkColumns(board) {
    for (let i = 0; i < board.length; i++) {
      const helper = new Set();

      for (let j = 0; j < board[i].length; j++) {
        const value = board[j][i];

        if (value !== '.') {
          if (helper.has(value)) {
            return false;
          } else {
            helper.add(value);
          }
        }
      }
    }

    return true;
  }

  function checkSubGrids(board) {
    const gridStart = [
      [0, 0],
      [0, 3],
      [0, 6],
      [3, 0],
      [3, 3],
      [3, 6],
      [6, 0],
      [6, 3],
      [6, 6],
    ];

    for (let x = 0; x < gridStart.length; x++) {
      let gs = gridStart[x];
      let y = gs[0];
      let z = gs[1];

      const helper = new Set();

      for (let i = y; i < y + 3; i++) {
        for (let j = z; j < z + 3; j++) {
          const value = board[i][j];

          if (value !== '.') {
            if (helper.has(value)) {
              return false;
            } else {
              helper.add(value);
            }
          }
        }
      }
    }
    return true;
  }

  let result = checkRows(board);
  if (!result) return result;

  result = checkColumns(board);
  if (!result) return result;

  result = checkSubGrids(board);

  return result;
}

// let board = [
//   ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
//   ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
//   ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
//   ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

// let result = isValidSudoku(board);
// result;

// board = [
//   ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
//   ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
//   ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
//   ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];
// result = isValidSudoku(board);
// result;
