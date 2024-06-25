import { IBoardTile } from "./BoardTile";

export class Board {
  // the board, from the top left to the bottom right
  public board: IBoardTile[][];

  constructor() {
    this.board = [
      [
        {pawnCount: 1},
        {pawnCount: 0},
        {pawnCount: 0},
        {pawnCount: 0},
        {pawnCount: 1},
      ],
      [
        {pawnCount: 1},
        {pawnCount: 0},
        {pawnCount: 0},
        {pawnCount: 0},
        {pawnCount: 1},
      ],
      [
        {pawnCount: 1},
        {pawnCount: 0},
        {pawnCount: 0},
        {pawnCount: 0},
        {pawnCount: 1},
      ],
    ]
  }
}