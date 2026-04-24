const root = document.documentElement;
const rootStyles = getComputedStyle(root);
const grid = document.querySelector("#grid");
const generateGridBtn = document.querySelector("#create-grid");
const numberInput = document.querySelector("#grid-size");

createGrid(16);

generateGridBtn.addEventListener("click", () => {
  if (window.confirm("Are you sure, this will delete the current grid?")) {
    createGrid(numberInput.value);
  }
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
      etchRow.addEventListener("mouseover", (event) => {
        const targetSquare = getComputedStyle(event.target);

        if (targetSquare.filter === "saturate(0)") {
          console.log("Target square is empty: True");

          event.target.style.backgroundColor = getRandomColor();
          event.target.style.filter = "saturate(0.1)";
        } else {
          let currentSaturation = targetSquare.filter;

          console.log(currentSaturation);

          currentSaturation = parseFloat(
            currentSaturation.replace("saturate(", ""),
          );

          console.log(currentSaturation);

          if (currentSaturation < 1) {
            currentSaturation += 0.1;
          }

          currentSaturation = `saturate(${currentSaturation})`;

          console.log(currentSaturation);

          event.target.style.filter = currentSaturation;
        }
      });
    }
  }

  return console.log("Grid created.");
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
