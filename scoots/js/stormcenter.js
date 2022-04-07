var slider = document.getElementById("range");
var output = document.getElementById("numbers");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}