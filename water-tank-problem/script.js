
/* =====================================
   EVERQUINT - WATER TANK PROBLEM
   Calculation and SVG Visualization
===================================== */

const input = document.getElementById("heights");
const button = document.getElementById("calculateBtn");
const totalDisplay = document.getElementById("total");
const chart = document.getElementById("chart");
const errorDisplay = document.getElementById("error");

const SVG_NS = "http://www.w3.org/2000/svg";

const BLOCK_COLOR = "#FFEB00";
const WATER_COLOR = "#08B5E8";
const GRID_COLOR = "#111111";

/* Calculate trapped water using two pointers */
function calculateWater(heights) {
    const n = heights.length;
    const water = new Array(n).fill(0);

    if (n < 3) {
        return { total: 0, water };
    }

    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let total = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            leftMax = Math.max(leftMax, heights[left]);

            water[left] = Math.max(
                0,
                leftMax - heights[left]
            );

            total += water[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, heights[right]);

            water[right] = Math.max(
                0,
                rightMax - heights[right]
            );

            total += water[right];
            right--;
        }
    }

    return { total, water };
}

/* Create an SVG rectangle */
function addRect(x, y, width, height, fill) {
    const rect = document.createElementNS(SVG_NS, "rect");

    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("stroke", GRID_COLOR);
    rect.setAttribute("stroke-width", "1");

    chart.appendChild(rect);
}

/* Draw blocks, trapped water, and empty grid cells */
function drawChart(heights, water) {
    const cellWidth = 44;
    const cellHeight = 28;
    const padding = 10;

    const n = heights.length;

    const maxHeight = Math.max(
        1,
        ...heights.map((height, index) => height + water[index])
    );

    const width = padding * 2 + n * cellWidth;
    const height = padding * 2 + maxHeight * cellHeight;

    chart.replaceChildren();

    chart.setAttribute(
        "viewBox",
        `0 0 ${width} ${height}`
    );

    chart.setAttribute(
        "preserveAspectRatio",
        "xMidYMid meet"
    );

    chart.setAttribute(
        "aria-label",
        `Water tank visualization. Total trapped water: ${
            water.reduce((sum, value) => sum + value, 0)
        } units.`
    );

    /*
       Draw every grid cell from the top row to the bottom row.
       Empty cells are white, water is blue, and blocks are yellow.
    */
    for (let row = 0; row < maxHeight; row++) {
        const level = maxHeight - row - 1;
        const y = padding + row * cellHeight;

        for (let col = 0; col < n; col++) {
            const x = padding + col * cellWidth;

            let fill = "#FFFFFF";

            if (level < heights[col]) {
                fill = BLOCK_COLOR;
            } else if (
                level < heights[col] + water[col]
            ) {
                fill = WATER_COLOR;
            }

            addRect(
                x,
                y,
                cellWidth,
                cellHeight,
                fill
            );
        }
    }
}

/* Validate input and calculate the result */
function runCalculation() {
    errorDisplay.textContent = "";

    const rawInput = input.value.trim();

    if (rawInput === "") {
        showError("Please enter the block heights.");
        return;
    }

    const parts = rawInput.split(",").map(
        part => part.trim()
    );

    if (
        parts.some(
            part => !/^\d+$/.test(part)
        )
    ) {
        showError(
            "Enter non-negative whole numbers separated by commas."
        );
        return;
    }

    const heights = parts.map(Number);

    if (heights.length > 100) {
        showError(
            "Please enter no more than 100 block heights."
        );
        return;
    }

    if (heights.some(height => height > 100)) {
        showError(
            "Each block height must be 100 or less."
        );
        return;
    }

    const result = calculateWater(heights);

    totalDisplay.textContent = `${result.total} Units`;

    drawChart(heights, result.water);
}

/* Display an error message */
function showError(message) {
    errorDisplay.textContent = message;
}

/* Calculate when the button is clicked */
button.addEventListener("click", runCalculation);

/* Also calculate when Enter is pressed */
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        runCalculation();
    }
});

/* Display the initial example when the page loads */
runCalculation();
