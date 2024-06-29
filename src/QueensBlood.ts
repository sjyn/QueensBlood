import { Engine } from "./engine";

export class QueensBlood {
  private engine: Engine;
  private lastRender: number;
  private updateClock: number;

  constructor(
    private canvas: HTMLCanvasElement,
  ) {
    this.canvas.setAttribute("height", window.innerHeight.toString());
    this.canvas.setAttribute("width", window.innerWidth.toString());
    this.engine = new Engine(this.canvas);
    this.lastRender = 0;
    this.updateClock = Date.now();
  }

  private update() {
    this.updateClock = Date.now();
    this.engine.update();
  }

  private draw() {
    if(this.updateClock - this.lastRender > (1000 / 60)) {
      this.lastRender = Date.now();
      this.engine.render();
    }
  }

  private loop() {
    this.update();
    this.draw();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  public run() {
    console.log("run initial render");
    window.requestAnimationFrame(this.loop.bind(this));
  }
}
