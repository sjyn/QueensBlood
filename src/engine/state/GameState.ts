import { Board, ICard, SecurityOfficerCard } from "../../data";
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

  static readonly CARD_WIDTH = 150;
  static readonly CARD_HEIGHT = GameState.CARD_WIDTH * 1.4;
  static readonly CARD_PADDING = 15;

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

  public requestedState(): string | undefined {
    return undefined;
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

  private drawPlayerHand(context: CanvasRenderingContext2D) {
    this.playerHand.forEach((card, idx) => {
      const cardImage = new Image();
      cardImage.src = card.assetUrl;
      
    });
  }

  public render(context: CanvasRenderingContext2D) {
    this.drawPlayerHand(context);
    // const image = new Image(100, 140);
    // const officer = SecurityOfficerCard.deserialize("asdf");
    // image.src = officer.assetUrl;
    // context.drawImage(image, 0, 0, 200, 280);
  }

}