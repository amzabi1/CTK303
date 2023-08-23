// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Apply the random color as the background of the body
document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomColor();
});

