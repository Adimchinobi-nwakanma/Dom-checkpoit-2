// Adding event listener to the button
document
  .getElementById("change-color-btn")
  .addEventListener("click", function () {
    // Get the color-box element
    const colorBox = document.getElementById("color-box");
    // Change the background color to a random color
    colorBox.style.backgroundColor = getRandomColor();
  });

// Function to generate a random color
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
