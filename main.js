var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var studyButton = document.getElementById("study");
var meditateButton = document.getElementById("meditate");
var exerciseButton = document.getElementById("exercise");
var boxArray = [studyButton, meditateButton, exerciseButton];
var startActBtn = document.getElementById("start-act-btn");
var activeBtn = document.querySelector(".active");

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);
document.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.classList.contains('study')) {
    changeColors(event);
  } else if (event.target.classList.contains('meditate')) {
    changeColors(event);
  } else if (event.target.classList.contains('exercise')) {
    changeColors(event);
  } else if (event.target.classList.contains('start-act-btn')) {
    checkInputFeilds(event)
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

function onlyNumbersCheck(event) {
  var replaceValue = minutesInput.value.replace("e", "");
  console.log(minutesInput.value);
  minutesInput.value = replaceValue;
  console.log(minutesInput.value);
}

function checkInputFeilds(e) {
  e.preventDefault();
  if ((minutesInput.value === 0) || (secondsInput.value === 0) || (textInput.value === 0)) {
    alert("Did it!!")
  }
}
