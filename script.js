const root = document.documentElement;
const rootStyles = getComputedStyle(root);
const grid = document.querySelector("#grid");
const generateGridBtn = document.querySelector("#create-grid");
const numberInput = document.querySelector("#grid-size");

createGrid(16);

generateGridBtn.addEventListener("click", () => {
  createGrid(numberInput.value);
});

function createGrid(number = 16) {
  number = Number(number);

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }

  console.log("Input is: " + number);

  let totalSquares = number * number;
  let pctFlexBasis = 0;
  console.log("grid square: " + pctFlexBasis);

  pctFlexBasis = number + 1;
  console.log("grid square: " + pctFlexBasis);

  pctFlexBasis = 100 / pctFlexBasis;
  console.log("grid square: " + pctFlexBasis);

  //   pctFlexBasis = Math.round(pctFlexBasis);
  //   console.log("grid square: " + pctFlexBasis);

  pctFlexBasis = pctFlexBasis + "%";
  console.log("grid square: " + pctFlexBasis);

  console.log("Total grid size: " + totalSquares);

  for (i = 0; i < totalSquares; i++) {
    const etchSquare = document.createElement("div");
    grid.appendChild(etchSquare);
    etchSquare.setAttribute("class", "grid-square");
    etchSquare.textContent = i + 1;
  }

  root.style.setProperty("--grid-size", pctFlexBasis);
  console.log(
    "The value of --grid-size is: " +
      rootStyles.getPropertyValue("--grid-size"),
  );

  return console.log("Grid created.");
}
