let piece;
switch (piece.toLowerCase();) {
    case bishop:
        console.log("Move any number of squares in the current diagonal");
        break;
    case knight:
        console.log("Move in L-shape; can jump over pieces");
        break;
    case pawn:
        console.log("1 square forward; can move 2 squares forward if it's the piece's first move");
        break;
    case hook:
        console.log("Move any number of squares in the current file or row");
        break;
    case king:
        console.log("Move one square in the current file or row");
        break;
    case queen:
        console.log("Move any number of squares in the current file, row or diagonal");
        break;
    default:
        console.log("Error: invalid piece.");
}