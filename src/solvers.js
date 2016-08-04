/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var rooks = 0;
  var boardObject = new Board({n: n});
  var board = boardObject.rows();


  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board[i][j] = 1;
      rooks++;
      if (boardObject.hasAnyRooksConflicts()) {
        board[i][j] = 0;
        rooks--;
      }
      if (rooks === n) {
        break;
      }
    }
  }

  var solution = board; 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var numRooksInCol = function(colIndex, board) {
    var count = 0;
    for (var i = 0; i < n; i++) {
      if (board[i][colIndex] === 1) {
        count++;
      }
    }
    return count; 
  };

  var solutionCount = 0;
  if (n === 1) { 
    solutionCount = 1;
    return solutionCount;
  }

  var boardObject = new Board({n: n});

  var countSolutions = function(boardObject, rooks, I) {
    var board = boardObject.rows();

    if (rooks === n) {
      solutionCount++;
      return; 
    }
    for (var i = I; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (numRooksInCol(j, board) < 1) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
            rooks++;
            // if (boardObject.hasAnyRooksConflicts()) {
            //   board[i][j] = 0;
            //   rooks--;
            // } else {
              countSolutions(boardObject, rooks, i + 1);
              board[i][j] = 0;
              rooks--;
            // }
          }
        }
      }
    }
  };

  countSolutions(boardObject, 0, 0);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //n = 4;

  // var queens = 0;
  var solution = 0;
  // var boardObject = new Board({n: n});
  // var board = boardObject.rows();
  // console.log("board: ", board);

  // var findSolution = function(board, queens) {
  //   for (var i = 0; i < n; i++) {
  //     for (var j = 0; j < n; j++) {
  //       board[i][j] = 1;
  //       queens++;
  //       if (boardObject.hasAnyQueensConflicts()) {
  //         board[i][j] = 0;
  //         queens--;
  //       }
  //       if (queens === n) {
  //         break;
  //       } 
  //     }
  //   }
  //   return queens;
  // };

  // for (var i = 0; i < n; i++) {
  //   board[0][i] = 1;
  //   queens = 1;
  //   queens = findSolution(board, queens);
  //   if (queens === n) {
  //     solution = board;
  //     break;
  //   }
  // }
  // console.log("nnnnnnn", n);
  // if (n === 0) {
  //   solution = 0;
  //   console.log("soooool", solution);
  // }

  var boardObject = new Board({n: n});
  var countSolutions = function(boardObject, queens, I) {
    var board = boardObject.rows();
    if (queens === n) {
      //solutionCount++;
      var boardCopy = [];
      for (var i = 0; i < n; i++) {
        boardCopy.push(board[i].slice());
      }
      solution = boardCopy; 
      return;
    }
    for (var i = I; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (!boardObject.hasColConflictAt(j)) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
            queens++;
            if (boardObject.hasAnyQueensConflicts()) {
              board[i][j] = 0;
              queens--;
            } else {
              countSolutions(boardObject, queens, i + 1);
              if (solution !== 0) {
                return;
              }
              board[i][j] = 0;
              queens--;
            }
          }
        }
      }
    }
  };
  countSolutions(boardObject, 0, 0);
  if (n === 1) { 
    solution = [[1]];
  }
  if (solution === 0) {
    solution = {n: n};
  }

  // if (n === 3) {
  //   solution = {n: 3};
  // }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  if (n === 1) { 
    solutionCount = 1;
    return solutionCount;
  }

  var boardObject = new Board({n: n});
  var countSolutions = function(boardObject, queens, I) {
    var board = boardObject.rows();
    if (queens === n) {
      solutionCount++;
      return; 
    }
    for (var i = I; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (!boardObject.hasColConflictAt(j)) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
            queens++;
            if (boardObject.hasAnyQueensConflicts()) {
              board[i][j] = 0;
              queens--;
            } else {
              countSolutions(boardObject, queens, i + 1);
              board[i][j] = 0;
              queens--;
            }
          }
        }
      }
    }
  };

  countSolutions(boardObject, 0, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
