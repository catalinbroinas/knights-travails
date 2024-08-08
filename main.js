import { KnightTravails } from "./knightsTravails.js";

// Create an instance of KnightTravails
const game = KnightTravails();

// Function to test knightMoves with different start and end positions
const testKnightMoves = (start, end) => {
    console.log(`Testing from [${start}] to [${end}]:`);
    game.knightMoves(start, end);
};

// Test knightMoves function with various positions
testKnightMoves([3, 3], [4, 3]);
testKnightMoves([0, 0], [3, 3]);
testKnightMoves([3, 3], [0, 0]);
testKnightMoves([0, 0], [7, 7]);
