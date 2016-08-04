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
  var board = new Board({n: n});
  // var index = 0;
  // for (var i = 0; i < n; i++) {
  //   var row = board.get(i);
  //   row[index] = 1;
  //   index++;
  // }

  // console.log(board);
  // console.log(board.rows());

  //var board = createBoard(n);

  for (var i = 0; i < n; i++) {
    var row = board.get(i);
    for (var j = 0; j < n; j++) {
      row[j] = 1;
      rooks++;
      if (board.hasAnyRooksConflicts()) {
        row[j] = 0;
        rooks--;
      }
      if (rooks === n) {
        break;
      }
    }
  }
  //console.log("hello", board);
  // //console.log("get", board.get(0));

  var solution = board.rows(); //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  // var rooks = 0;
  // var board = new Board({n: n});
  var solutionCount = 0;

  var combinations = function(n) {
    
  };


  // for (var i = 0; i < n; i++) {
  //   var row = board.get(i);
  //   for (var j = 0; j < n; j++) {
  //     row[j] = 1;
  //     rooks++;
  //     if (board.hasAnyRooksConflicts()) {
  //       row[j] = 0;
  //       rooks--;
  //     }
  //     if (rooks === n) {
  //       solutionCount++;
  //       break;
  //     }
  //   }
  // }
  var solution = undefined; //fixme


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
