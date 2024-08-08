import { KnightTravails } from "./knightsTravails.js";

// Create an instance of KnightTravails
const game = KnightTravails();

// Test knightMoves function
let start = [3, 3];
let end = [4, 3];
game.knightMoves(start, end);

start = [0, 0];
end = [3, 3];
game.knightMoves(start, end);

start = [3, 3];
end = [0, 0];
game.knightMoves(start, end);

start = [7, 7];
end = [7, 7];
game.knightMoves(start, end);
