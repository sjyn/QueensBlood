import { staticImplements } from "../../utils";
import { ICard, IDeserializeableCard } from "./ICard";

@staticImplements<IDeserializeableCard>()
export class SecurityOfficerCard implements ICard {
  public constructor(
    private readonly _id: string,
  ) {

  }

  get pattern(): string[][] {
    return [
      ["-", "-", "-", "-", "-"],
      ["-", "-", "+", "-", "-"],
      ["-", "+", "*", "+", "-"],
      ["-", "-", "+", "-", "-"],
      ["-", "-", "-", "-", "-"],
    ]
  }

  get pawnCount(): number {
    return 1;
  }

  get power(): number {
    return 1;
  }

  get cardNumber(): number {
    return 1;
  }

  get cardType(): "standard" | "legendary" {
    return "standard";
  }

  get id(): string {
    return this._id;
  }

  serialize(): string {
    return this._id;
  }

  static deserialize(serialized: string): SecurityOfficerCard {
    return new SecurityOfficerCard(serialized);
  }

}