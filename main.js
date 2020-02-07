var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var studyButton = document.getElementById("study");
var meditateButton = document.getElementById("meditate");
var exerciseButton = document.getElementById("exercise");
var boxArray = [studyButton, meditateButton, exerciseButton];

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);
// studyButton.addEventListener('click', changeColors)
// meditateButton.addEventListener('click', changeColors)
// exerciseButton.addEventListener('click', changeColors)
document.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.classList.contains('study')) {
    changeColors(event);
  } else if (event.target.classList.contains('meditate')) {
    changeColors(event);
  } else if (event.target.classList.contains('exercise')) {
    changeColors(event);
  }
}

function changeColors(event) {
  var clickedId = event.target.id;
  if(event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    event.target.firstElementChild.src = `./assets/${clickedId}.svg`;
  } else {
    event.target.classList.add('active');
    event.target.firstElementChild.src = `./assets/${clickedId}-active.svg`;
  }
  removeActiveState(clickedId);
}

function removeActiveState(clickedId) {
  for (var i = 0; i < boxArray.length; i++) {
    if (boxArray[i].id !== clickedId) {
      boxArray[i].classList.remove('active');
      boxArray[i].firstElementChild.src = `./assets/${boxArray[i].id}.svg`;
    }
  }
}

function onlyNumbersCheck() {
  var validChars = "0123456789.";
  if (minutesInput.value !== validChars) {
    minutesInput.value = "";
  }
  if (secondsInput.value !== validChars) {
    secondsInput.value = "";
  }
}
