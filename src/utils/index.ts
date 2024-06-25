export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {constructor};
}

export function shuffle<T>(array: T[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

/**
 * Return the x value to center your item with width w in the view
 */
export const getCenterX = (w: number): number => {
  const canvasWidth = document.getElementById("canvas")?.clientWidth || 0;
  return (canvasWidth / 2) - (w / 2);
}

/**
 * Return the y value to center your item of height h
 */
export const getCenterY = (h: number): number => {
  const canvasHeight = document.getElementById("canvas")?.clientHeight || 0;
  return (canvasHeight / 2) + (h / 2);
}
