import { QueensBlood } from "./QueensBlood";

console.log("Running queensblood");
const queensBlood = new QueensBlood(document.getElementById("canvas") as HTMLCanvasElement);
queensBlood.run();
