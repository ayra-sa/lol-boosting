// Slider

const slider = document.getElementById("range");
const sliderIron = document.getElementById("rangeIron");
const outputIron = document.getElementById("valueRangeIron");
const output = document.getElementById("valueRange");
outputIron.innerHTML = sliderIron.value; // Display the default slider value
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderIron.oninput = function() {
  outputIron.innerHTML = this.value;
}

slider.oninput = function() {
  output.innerHTML = this.value;
}