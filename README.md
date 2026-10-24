# EverQuint – Water Tank Problem

## Project Overview

The **Water Tank Problem** is a frontend web application developed as part of the EverQuint Interview Assignment.

The application calculates the amount of water that can be trapped between blocks of different heights. Users can enter block heights as a comma-separated list and view the total trapped water along with a visual representation of the blocks and water.

The application is built using HTML, CSS, and vanilla JavaScript without any external libraries or frameworks.

## Objective

- Calculate the total units of water trapped between blocks of different heights.
- Display the calculated result dynamically based on user input.
- Visualize the blocks and trapped water using an SVG-based grid.
- Provide a simple, responsive, and user-friendly interface.

## Technologies Used

- **HTML5:** Creates the structure of the web application.
- **CSS3:** Styles the page, input fields, buttons, results, and visualization layout.
- **Vanilla JavaScript:** Implements the water-trapping algorithm, validates input, calculates the result, and generates the SVG visualization.
- **SVG (Scalable Vector Graphics):** Draws the blocks, trapped water, and empty grid cells.

## Project Structure

```text
water-tank-problem/
│
├── index.html    # Webpage structure
├── style.css     # Styling and responsive layout
├── script.js     # Calculation logic and visualization
└── README.md     # Project documentation
```

## How the Application Works

1. The user enters block heights separated by commas.
2. JavaScript validates the input to ensure that it contains non-negative whole numbers.
3. The application calculates the trapped water using the two-pointer algorithm.
4. The total amount of water is displayed in units.
5. An SVG visualization represents blocks in yellow, trapped water in blue, and empty spaces in white.
6. The result and visualization update when the user clicks the **Calculate Water** button.

## Algorithm Used

The application uses the **Two-Pointer Algorithm** to calculate trapped water efficiently.

Two pointers start at the leftmost and rightmost blocks. The algorithm tracks the maximum height encountered from each side and calculates the water that can be stored at each position.

For each position, the amount of trapped water is calculated using:

```text
Water at position i =
max(0, min(leftMax, rightMax) - height[i])
```

Where:

- `leftMax` is the maximum block height from the left up to the current position.
- `rightMax` is the maximum block height from the right up to the current position.
- `height[i]` is the height of the current block.

The total trapped water is the sum of the water calculated at every position.

### Complexity Analysis

- **Time Complexity:** O(n), because each position is processed at most once.
- **Space Complexity:** O(n), because an array stores the water levels needed for visualization.

Here, `n` represents the number of block heights.

## Sample Input and Output

### Input

```text
0,4,0,0,0,6,0,6,4,0
```

### Output

```text
Total Water Stored: 18 Units
```

### Visualization Legend

- **Yellow:** Physical blocks
- **Blue:** Trapped water
- **White:** Empty spaces

## How to Run the Project

### Prerequisites

- A modern web browser, such as Google Chrome or Microsoft Edge.
- A code editor such as Visual Studio Code.

No additional packages, installations, or backend server are required.

### Steps

1. Download or clone the project repository.
2. Open the `water-tank-problem` folder in Visual Studio Code.
3. Ensure that `index.html`, `style.css`, and `script.js` are present in the same folder.
4. Open `index.html` directly in your browser, or use the Live Server extension in Visual Studio Code.
5. Enter the block heights as comma-separated values.
6. Click **Calculate Water** to view the total trapped water and visualization.

## Features

- Accepts user-defined block heights.
- Calculates trapped water dynamically.
- Uses an efficient two-pointer algorithm.
- Displays a visual grid using SVG.
- Uses distinct colors for blocks and trapped water.
- Validates invalid input and displays error messages.
- Provides a responsive interface for desktop and mobile screens.

## Limitations

- Block heights must be non-negative whole numbers.
- The current implementation supports a maximum of 100 block heights.
- Each block height must be 100 or less.
- The application runs entirely in the browser and does not require a database or backend.

## Conclusion

The EverQuint Water Tank Problem demonstrates the application of an efficient algorithm to solve a common programming problem through an interactive frontend application.

It combines algorithmic problem-solving, JavaScript-based calculations, input validation, and SVG visualization to present the result in a clear and understandable way.

---

**Assignment:** EverQuint Interview Assignment  
**Project:** Water Tank Problem  
**Technologies:** HTML5, CSS3, Vanilla JavaScript, SVG
