import { getCenterX, staticImplements } from "../../utils";
import { IDescriptorProviderState, IState } from "./IState";

@staticImplements<IDescriptorProviderState<never, never>>()
export class MainMenuState implements IState<never, never> {
  public static readonly descriptor = "main-menu";
  public selectedMenuItem: "new-game" | "options";
  readonly menuItemWidth = 200;
  readonly menuItemHeight = 40;
  readonly menuItemYStart = 300;
  readonly menuItemPadding = 10;

  constructor() {
    this.selectedMenuItem = "new-game";
  }

  public bindState() {
    window.onkeydown = this.onKeyDown.bind(this);
  }

  public unbindState() {
    window.onkeydown = () => {};
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
    switch(this.selectedMenuItem) {
      case "new-game":
        this.selectedMenuItem = "options";
        break;
      case "options":
        this.selectedMenuItem = "new-game";
        break;
    }
  }

  private onUpArrow() {
    switch(this.selectedMenuItem) {
      case "new-game":
        this.selectedMenuItem = "options";
        break;
      case "options":
        this.selectedMenuItem = "new-game";
        break;
    }
  }

  public render(context: CanvasRenderingContext2D) {
    this.drawCursor(context);
    this.drawLogo(context);
    this.drawNewGameMenuItem(context);
    this.drawOptionsMenuItem(context);
  }

  private drawCursor(context: CanvasRenderingContext2D) {
    let offsetY = 0;

    switch(this.selectedMenuItem) {
      case "new-game":
        break;
      case "options":
        offsetY = this.menuItemHeight + this.menuItemPadding;
        break;
    }

    context.fillStyle = "black";
    context.fillRect(
      getCenterX(this.menuItemWidth) - 30,
      this.menuItemYStart + offsetY + 10,
      20,
      20,
    );
  }

  private drawLogo(context: CanvasRenderingContext2D) {
    
  }

  private drawNewGameMenuItem(context: CanvasRenderingContext2D) {
    context.strokeStyle = "black";
    context.beginPath();
    context.roundRect(
      getCenterX(this.menuItemWidth),
      this.menuItemYStart,
      this.menuItemWidth,
      this.menuItemHeight,
      20
    );
    context.stroke();

    context.font = "20px Arial";
    const textDims = context.measureText("New Game");
    context.fillText(
      "New Game",
      getCenterX(this.menuItemWidth) + (textDims.width / 2), 
      this.menuItemYStart + 26,
    );
  }

  private drawOptionsMenuItem(context: CanvasRenderingContext2D) {
    const offsetY = this.menuItemYStart + this.menuItemHeight + this.menuItemPadding;
    context.strokeStyle = "black";
    context.beginPath();
    context.roundRect(
      getCenterX(this.menuItemWidth),
      offsetY,
      this.menuItemWidth,
      this.menuItemHeight,
      20,
    );
    context.stroke();

    context.font = "20px Arial";
    const textDims = context.measureText("Options");
    context.fillText(
      "Options",
      getCenterX(this.menuItemWidth) + (textDims.width / 2), 
      offsetY + 26,
    );
  }
}