import { GameState, MainMenuState, PregameDeckSelectionState } from "./state";

export type EngineState = MainMenuState | PregameDeckSelectionState | GameState;

export class Engine {
  private _state: EngineState | null = null;
  public stateDescriptor: string | null = null;
  private context: CanvasRenderingContext2D;

  private readonly mainMenuState = new MainMenuState();
  private readonly pregameDeckSelectionState = new PregameDeckSelectionState();
  private readonly gameState = new GameState();

  public get state(): EngineState {
    return this._state!;
  }

  public set state(descriptor: string) {
    let newState = null;
    switch(descriptor) {
      case MainMenuState.descriptor:
        newState = this.mainMenuState;
        break;
      case PregameDeckSelectionState.descriptor:
        newState = this.pregameDeckSelectionState;
        break;
      case GameState.descriptor:
        newState = this.gameState;
        break;
      default:
        break;
    }

    if(newState != null) {
      console.log("Transitioning to state", descriptor);
      let unbindReturn = null;
      if(this._state != null) {
        console.log("Unbinding state", this.stateDescriptor);
        unbindReturn = this._state.unbindState();
      }
      this._state = newState;
      this.stateDescriptor = descriptor;
      console.log("Binding state", this.stateDescriptor, "with args", unbindReturn);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this._state.bindState(unbindReturn as unknown as any);
    } else {
      console.error("No state found for descriptor", descriptor);
    }
  }

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.state = MainMenuState.descriptor;
    this.context = this.canvas.getContext("2d")!;
  }

  public render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if(this._state) {
      this._state.render(this.context);
    }
  }
}
