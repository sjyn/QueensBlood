export interface ICard {
  get pattern(): string[][];
  get pawnCount(): number;
  get power(): number;
  get cardNumber(): number;
  get cardType(): "standard" | "legendary";
  get id(): string;
  get assetUrl(): string;

  serialize(): string;
}

export interface IDeserializeableCard {
  new(_id: string): ICard;
  deserialize(serialized: string): ICard;
}
