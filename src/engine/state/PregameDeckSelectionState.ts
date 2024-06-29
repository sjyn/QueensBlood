import { ICard } from "../../data";
import { staticImplements } from "../../utils";
import { IDescriptorProviderState, IState } from "./IState";

@staticImplements<IDescriptorProviderState<never, ICard[] | undefined>>()
export class PregameDeckSelectionState implements IState<never, ICard[] | undefined> {
  public static readonly descriptor = "pregame-deck-selection";

  constructor() {

  }

  public requestedState(): string | undefined {
    return undefined;
  }

  bindState() {
    window.onkeydown = this.onKeyDown.bind(this);
  }

  unbindState(): ICard[] | undefined {
    window.onkeydown = () => {};
    return [];
  }

  private onKeyDown(event: KeyboardEvent) {
    switch(event.key) {
      case "ArrowDown":
      case "KeyS":
        this.onDownArrow();
        break;
      case "ArrowUp":
      case "KeyW":
        this.onUpArrow();
        break;
    } 
  }

  private onDownArrow() {
    
  }

  private onUpArrow() {
    
  }

  public render(context: CanvasRenderingContext2D) {
    
  }
}