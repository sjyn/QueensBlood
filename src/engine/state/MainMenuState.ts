import { CanterburyFont } from "../../asset/font";
import { GreenPawn, Pawn } from "../../asset/image";
import { canvasHeight, canvasWidth, FillColors, getCenterX, staticImplements } from "../../utils";
import { IDescriptorProviderState, IState } from "./IState";
import { PregameDeckSelectionState } from "./PregameDeckSelectionState";

@staticImplements<IDescriptorProviderState<never, never>>()
export class MainMenuState implements IState<never, never> {
  public static readonly descriptor = "main-menu";
  public selectedMenuItem: "new-game" | "options";
  readonly menuItemWidth = 200;
  readonly menuItemHeight = 40;
  readonly menuItemYStart = 300;
  readonly menuItemPadding = 10;
  readonly pawnImage: HTMLImageElement;
  private nextState: string | undefined;

  constructor() {
    this.selectedMenuItem = "new-game";
    this.pawnImage = new Image();
    this.pawnImage.src = GreenPawn.default;
  }

  public requestedState(): string | undefined {
    return this.nextState;
  }

  public bindState() {
    this.nextState = undefined;
    window.onkeydown = this.onKeyDown.bind(this);
  }

  public unbindState() {
    window.onkeydown = () => {};
  }

  private onKeyDown(event: KeyboardEvent) {
    console.log(event.key)
    switch(event.key) {
      case "ArrowDown":
      case "KeyS":
        this.onDownArrow();
        break;
      case "ArrowUp":
      case "KeyW":
        this.onUpArrow();
        break;
      case "Enter":
        this.onEnter();
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

  private onEnter() {
    switch(this.selectedMenuItem) {
      case "new-game":
        this.nextState = PregameDeckSelectionState.descriptor;
        break;
    }
  }

  public render(context: CanvasRenderingContext2D) {
    this.drawBackground(context);
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

    context.fillStyle = FillColors.GREEN_PAWN;
    context.drawImage(this.pawnImage, getCenterX(this.menuItemWidth) - 30, this.menuItemYStart + offsetY + 10, 20, 20);
  }

  private drawBackground(context: CanvasRenderingContext2D) {
    const width = canvasWidth();
    const height = canvasHeight();
    let currColor = FillColors.TILE_WHITE;

    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 3; j++) {
        context.fillStyle = currColor;
        const x = (width / 5) * i;
        const y = (height / 3) * j;
        context.fillRect(x, y, width / 5, height / 3);
        if(currColor === FillColors.TILE_WHITE) {
          currColor = FillColors.TILE_BLUE;
        } else {
          currColor = FillColors.TILE_WHITE;
        }
      }
    }
  }

  private drawLogo(context: CanvasRenderingContext2D) {
    const oldFont = context.font;
    context.font = "100px Canterbury";
    context.fillStyle = FillColors.LOGO_COLOR;
    const logoText = "Queen's Blood";
    const metrics = context.measureText(logoText);
    context.fillText(logoText, getCenterX(metrics.width), 200);
    context.fillStyle = FillColors.BLACK;
    context.strokeText(logoText, getCenterX(metrics.width), 200);
    context.font = oldFont;
  }

  private drawNewGameMenuItem(context: CanvasRenderingContext2D) {
    const oldFont = context.font;
    context.strokeStyle = FillColors.BLACK;
    context.beginPath();
    context.roundRect(
      getCenterX(this.menuItemWidth),
      this.menuItemYStart,
      this.menuItemWidth,
      this.menuItemHeight,
      20
    );
    context.stroke();

    context.font = "24px Canterbury";
    context.fillStyle = FillColors.LOGO_COLOR;
    const textDims = context.measureText("New Game");
    context.fillText(
      "New Game",
      getCenterX(this.menuItemWidth) + (textDims.width / 2), 
      this.menuItemYStart + 26,
    );
    context.font = oldFont;
  }

  private drawOptionsMenuItem(context: CanvasRenderingContext2D) {
    const offsetY = this.menuItemYStart + this.menuItemHeight + this.menuItemPadding;
    context.strokeStyle = FillColors.BLACK;
    context.beginPath();
    context.roundRect(
      getCenterX(this.menuItemWidth),
      offsetY,
      this.menuItemWidth,
      this.menuItemHeight,
      20,
    );
    context.stroke();

    context.font = "24px Canterbury";
    context.fillStyle = FillColors.LOGO_COLOR;
    const textDims = context.measureText("Options");
    context.fillText(
      "Options",
      getCenterX(this.menuItemWidth) + (textDims.width / 2), 
      offsetY + 26,
    );
  }
}