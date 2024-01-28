document.addEventListener('DOMContentLoaded', function () {

    let board = Chessboard('chessboard-container', {
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: true
    });
  
    let startingPosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  
    board.position(startingPosition);
  });
  