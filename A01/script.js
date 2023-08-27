// Function to generate a random pastel color
function getRandomPastelColor() {
  const maxHue = 360; 
  const minSaturation = 30; 
  const maxSaturation = 60; 
  const minBrightness = 70; 
  const maxBrightness = 90; 

  const hue = Math.floor(Math.random() * maxHue);
  const saturation = Math.floor(Math.random() * (maxSaturation - minSaturation) + minSaturation);
  const brightness = Math.floor(Math.random() * (maxBrightness - minBrightness) + minBrightness);

  const color = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
  return color;
}

// Apply the random pastel color as the background of the body
document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomPastelColor();
});

