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

  for (i = 0; i < number; i++) {
    const etchColumn = document.createElement("div");

    grid.appendChild(etchColumn);
    etchColumn.setAttribute("class", "grid-column");

    for (j = 0; j < number; j++) {
      const etchRow = document.createElement("div");

      etchColumn.appendChild(etchRow);
      etchRow.setAttribute("class", "grid-row");
    }
  }

  return console.log("Grid created.");
}
