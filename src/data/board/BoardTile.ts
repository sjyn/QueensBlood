import { ICard } from "../cards";

export interface IBoardTile {
  owner?: string;
  pawnCount: number;
  card?: ICard;
}
