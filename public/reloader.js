// Get the input field
var input = document.getElementById("nameinput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    window.location.href = "https://pokemon.androdsy.ch/"+input.value;
  }
});