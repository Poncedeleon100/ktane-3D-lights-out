$(function() {
    const cellElements = new Array(3);
    const cellCircleElements = new Array(3);

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    function toggleCellEvent(cell) {
        toggleCell(cell.target);
    }

    function toggleCell(cell) {
        const gridIndex = parseInt(cell.id.substring(0,1));
        const rowIndex = parseInt(cell.id.substring(1,2));
        const columnIndex = parseInt(cell.id.substring(2));
        // Toggle the selected cell
        toggleColor(cell);
        // Toggle cells on the same row
        if (columnIndex - 1 >= 0) {
            toggleColor(cellElements[gridIndex][rowIndex][columnIndex - 1]);
        }
        if (columnIndex + 1 <= 2) {
            toggleColor(cellElements[gridIndex][rowIndex][columnIndex + 1]);
        }
        // Toggle cells in the same column
        if (rowIndex - 1 >= 0) {
            toggleColor(cellElements[gridIndex][rowIndex - 1][columnIndex]);
        }
        if (rowIndex + 1 <= 2) {
            toggleColor(cellElements[gridIndex][rowIndex + 1][columnIndex]);
        }
        // Toggle cells in the same position on other grids
        if (gridIndex - 1 >= 0) {
            toggleColor(cellElements[gridIndex - 1][rowIndex][columnIndex]);
        }
        if (gridIndex + 1 <= 2) {
            toggleColor(cellElements[gridIndex + 1][rowIndex][columnIndex]);
        }
    }

    function toggleColor(cell) {
        const cellCircle = document.getElementById("c" + cell.id);
        cell.classList.toggle("black");
        cell.classList.toggle("green");
        cellCircle.classList.toggle("white");
        cellCircle.classList.toggle("black");
    }

    function toggleCellCircles(cell) {
        const gridIndex = parseInt(cell.target.id.substring(0,1));
        const rowIndex = parseInt(cell.target.id.substring(1,2));
        const columnIndex = parseInt(cell.target.id.substring(2));
        // Toggle the selected cell
        toggleCircle(cell.target);
        // Toggle cells on the same row
        if (columnIndex - 1 >= 0) {
            toggleCircle(cellElements[gridIndex][rowIndex][columnIndex - 1]);
        }
        if (columnIndex + 1 <= 2) {
            toggleCircle(cellElements[gridIndex][rowIndex][columnIndex + 1]);
        }
        // Toggle cells in the same column
        if (rowIndex - 1 >= 0) {
            toggleCircle(cellElements[gridIndex][rowIndex - 1][columnIndex]);
        }
        if (rowIndex + 1 <= 2) {
            toggleCircle(cellElements[gridIndex][rowIndex + 1][columnIndex]);
        }
        // Toggle cells in the same position on other grids
        if (gridIndex - 1 >= 0) {
            toggleCircle(cellElements[gridIndex - 1][rowIndex][columnIndex]);
        }
        if (gridIndex + 1 <= 2) {
            toggleCircle(cellElements[gridIndex + 1][rowIndex][columnIndex]);
        }
    }

    function toggleCircle(cell) {
        const cellCircle = document.getElementById("c" + cell.id);
        cellCircle.classList.toggle("off");
    }

    for (let i = 0; i < 3; i++) {
        cellElements[i] = new Array(3);
        cellCircleElements[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            cellElements[i][j] = new Array(3);
            cellCircleElements[i][j] = new Array(3);
            for (let k = 0; k < 3; k++) {
                cellElements[i][j][k] = document.getElementById(i.toString() + j.toString() + k.toString());
                cellElements[i][j][k].addEventListener("click", toggleCellEvent);
                cellElements[i][j][k].addEventListener("mouseenter", toggleCellCircles);
                cellElements[i][j][k].addEventListener("mouseleave", toggleCellCircles);
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                if (random(1) == 0) {
                    toggleCell(cellElements[i][j][k]);
                }
            }
        }
    }
});