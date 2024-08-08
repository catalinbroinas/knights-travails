function KnightTravails() {
    // Initialize the chessboard (8x8 matrix) with null
    const size = 8;
    const chessBoard = Array(size).fill(null).map(() => Array(size).fill(null));;

    // Show shortest path from current location (start square) to destination (end square)
    const knightMoves = (startSquare, endSquare) => {
        // Define possible moves for a knight
        const directions = [
            [1, 2], [2, 1], [1, -2], [2, -1],
            [-1, 2], [-2, 1], [-1, -2], [-2, -1]
        ];

        // Check if a position is within the bounds of the chessboard
        const isInBounds = (x, y) => x >= 0 && x < size && y >= 0 && y < size;

        // BFS to find the shortest path
        const bfs = (start, end) => {
            // Queue of tuples: [position, path]
            const queue = [[start, [start]]];

            while (queue.length > 0) {
                const [[x, y], path] = queue.shift();

                // Return the path if end is reached
                if (x === end[0] && y === end[1]) {
                    return path;
                }

                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (isInBounds(nx, ny)) {
                        queue.push([[nx, ny], [...path, [nx, ny]]]);
                    }
                }
            }

            // Return an empty array if no path is found
            return [];
        };

        const print = (path) => {
            if (path.length === 0) {
                console.log("No valid path found.");
                return;
            }

            const moves = path.length - 1;

            console.log(`You made it in ${moves} moves!  Here's your path:`);
            path.forEach(element => {
                console.log(element);
            });
        };

        // Validate input positions
        if (!isInBounds(startSquare[0], startSquare[1]) || !isInBounds(endSquare[0], endSquare[1])) {
            console.log("Invalid start or end position.");
            return;
        }

        const start = [startSquare[0], startSquare[1]];
        const end = [endSquare[0], endSquare[1]];
        const path = bfs(start, end);

        print(path);
        return path;
    };

    return { knightMoves };
}

export { KnightTravails };
