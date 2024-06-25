import { Board, ICard } from "../../data";
import { shuffle, staticImplements } from "../../utils";
import { IDescriptorProviderState, IState } from "./IState";

interface IGameStateBindArgs {
  readonly playerDeck: ICard[];
  readonly opponentDeck: ICard[];
}

@staticImplements<IDescriptorProviderState<IGameStateBindArgs, never>>()
export class GameState implements IState<IGameStateBindArgs, never> {
  public static readonly descriptor = "game";
  public board: Board = new Board();
  public playerHand: ICard[] = [];
  public opponentHand: ICard[] = [];
  public playerDeck: ICard[] = [];
  public opponentDeck: ICard[] = [];

  public drawPlayerCards(numCards: number) {
    for(let i = 0; i < numCards && this.playerDeck.length > 0; i++) {
      this.playerHand.push(this.playerDeck.pop()!);
    }
  }

  public drawOpponentCards(numCards: number) {
    for(let i = 0; i < numCards && this.opponentDeck.length > 0; i++) {
      this.opponentHand.push(this.opponentDeck.pop()!);
    }
  }

  public bindState(args: IGameStateBindArgs) {
    this.board = new Board();
    this.playerDeck = [...args.playerDeck];
    this.opponentDeck = [...args.opponentDeck];

    shuffle(this.playerDeck);
    shuffle(this.opponentDeck);

    this.drawPlayerCards(5);
    this.drawOpponentCards(5);
  };

  public unbindState() {

  }

  public render(context: CanvasRenderingContext2D) {
    
  }

}