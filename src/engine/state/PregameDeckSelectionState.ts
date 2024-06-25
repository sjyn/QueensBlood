import { ICard } from "../../data";
import { staticImplements } from "../../utils";
import { IDescriptorProviderState, IState } from "./IState";

@staticImplements<IDescriptorProviderState<never, ICard[] | undefined>>()
export class PregameDeckSelectionState implements IState<never, ICard[] | undefined> {
  public static readonly descriptor = "pregame-deck-selection";

  constructor() {

  }

  bindState() {

  }

  unbindState(): ICard[] | undefined {
    return [];
  }

  public render(context: CanvasRenderingContext2D) {
    
  }
}