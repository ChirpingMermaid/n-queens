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
  // var createBoard = function(n) {
  //   var board = [];
  //   for (var i = 0; i < n; i++) {
  //     board.push([]);
  //     var row = board[i];
  //     for (var j = 0; j < n; j++) {
  //       row.push(0);
  //     }
  //   }
  //   return board;
  // };
  //n = 4;
  var rooks = 0;
  var boardObject = new Board({n: n});
  var board = boardObject.rows();
  //var board = new Board({n: n});
  // var index = 0;
  // for (var i = 0; i < n; i++) {
  //   var row = board.get(i);
  //   row[index] = 1;
  //   index++;
  // }

  //var board = createBoard(n);

  for (var i = 0; i < n; i++) {
    //var row = board.get(i);
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
  //console.log("hello", board);
  // //console.log("get", board.get(0));

  var solution = board; 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  // var rooks = 0;
  // var board = new Board({n: n});
  // var factorial = function(number) {
  //   var num = number;
  //   var answer = 1;
  //   while (num > 1) {
  //     answer *= num;
  //     num--;
  //   }
  //   return answer;
  // };

  //n = 2;
  //console.log("nnnnnn", n);
  var solutionCount = 0;
  if (n === 1) { 
    solutionCount = 1;
    return solutionCount;
  }

  var boardObject = new Board({n: n});
  //var firstRowCount = n;
  //var container = [];
  var countSolutions = function(boardObject, rooks, I, J) {
    var board = boardObject.rows();
    //console.log("board: ", board);
    // var boardCopy = [];
    // for (var i = 0; i < board.length; i++) {
    //   boardCopy.push(board[i].slice());
    // }
    if (rooks === n) {
      solutionCount++;
      //container.push(boardCopy);
      return; 
    }
    for (var i = I; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (!boardObject.hasColConflictAt(j)) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
            rooks++;
            if (boardObject.hasAnyRooksConflicts()) {
              board[i][j] = 0;
              rooks--;
              //changed = false;
            } else {
              countSolutions(boardObject, rooks, i + 1);
              board[i][j] = 0;
              rooks--;
            }
          }
        }
      }
    }
  };

  countSolutions(boardObject, 0, 0, 0);

  // var uniq = function(array) {
  //   var result = [];

  //   for (var i = 0; i < array.length; i++) {
  //     var elem = JSON.stringify(array[i]);
  //     if (result.indexOf(elem) === -1) {
  //       result.push(elem);
  //     }
  //   }
  //   return result;
  // };

  // var newContainer = uniq(container);

  // solutionCount = newContainer.length;



  // console.log('container: ', JSON.stringify(container));
  // console.log('solutionCount: ', solutionCount);
  //var solution = solutionCount; 


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //n = 4;
  var queens = 0;
  var solution;
  var boardObject = new Board({n: n});
  var board = boardObject.rows();
  console.log("board: ", board);

  var findSolution = function(board, queens) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        board[i][j] = 1;
        queens++;
        if (boardObject.hasAnyQueensConflicts()) {
          board[i][j] = 0;
          queens--;
        }
        if (queens === n) {
          break;
        } 
      }
    }
    return queens;
  };

  for (var i = 0; i < n; i++) {
    board[0][i] = 1;
    queens = 1;
    queens = findSolution(board, queens);
    if (queens === n) {
      solution = board;
    }
  }
 
  //console.log("sol", solution);
  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
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
  //var firstRowCount = n;
  //var container = [];
  var countSolutions = function(boardObject, rooks, I, J) {
    var board = boardObject.rows();
    //console.log("board: ", board);
    // var boardCopy = [];
    // for (var i = 0; i < board.length; i++) {
    //   boardCopy.push(board[i].slice());
    // }
    if (rooks === n) {
      solutionCount++;
      //container.push(boardCopy);
      return; 
    }
    for (var i = I; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (!boardObject.hasColConflictAt(j)) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
            rooks++;
            if (boardObject.hasAnyQueensConflicts()) {
              board[i][j] = 0;
              rooks--;
              //changed = false;
            } else {
              countSolutions(boardObject, rooks, i + 1);
              board[i][j] = 0;
              rooks--;
            }
          }
        }
      }
    }
  };

  countSolutions(boardObject, 0, 0, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
