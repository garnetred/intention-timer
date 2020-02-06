var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var invalidChars = ["+", "-", "e"];

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);

function onlyNumbersCheck() {
  var validChars = "0123456789.";
  if (minutesInput.value !== validChars) {
    minutesInput.value = "";
  }
  if (secondsInput.value !== validChars) {
    secondsInput.value = "";
  }
}
