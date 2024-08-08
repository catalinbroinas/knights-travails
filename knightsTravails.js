function KnightTravails() {
    // Initialize the chessboard (8x8 matrix) with null
    const size = 8;
    const chessBoard = Array(size).fill(null).map(() => Array(size).fill(null));;

    const getBoard = () => chessBoard;

    // Show shortest path from current location (start square) to destination (end square)
    const knightMoves = (startSquare, endSquare) => {
        // Define possible moves for a knight
        const directions = [
            [1, 2], [2, 1], [1, -2], [2, -1],
            [-1, 2], [-2, 1], [-1, -2], [-2, -1]
        ];

        // Check if a position is within the bounds of the chessboard
        const isInBounds = (x, y) => x >= 0 && x < size && y >= 0 && y < size;
    };

    return { knightMoves };
}

export { KnightTravails };
