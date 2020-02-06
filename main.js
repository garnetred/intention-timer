var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var studyButton = document.getElementById("study");
var meditateButton = document.getElementById("meditate");
var exerciseButton = document.getElementById("exercise");
var studyImg = document.querySelector(".study-img");
var meditateImg = document.querySelector(".meditate-img");
var exerciseImg = document.querySelector(".exercise-img");

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);
studyButton.addEventListener('click', changeStudyBox);
meditateButton.addEventListener('click', changeMeditateBox);
exerciseButton.addEventListener('click', changeExerciseBox);
// window.addEventListener('load', inactiveButtons);

function onlyNumbersCheck() {
  var validChars = "0123456789.";
  if (minutesInput.value !== validChars) {
    minutesInput.value = "";
  }
  if (secondsInput.value !== validChars) {
    secondsInput.value = "";
  }
}

// function inactiveButtons() {
//   studyImg.classList.toggle("hidden");
//   meditateImg.classList.toggle("hidden");
//   exerciseImg.classList.toggle("hidden");
// }

// function changeColorsStudy() {
//   studyImg.classList.add("hidden");
// }
//
// function changeColorsMeditate() {
//   meditateImg.classList.add("hidden");
// }
//
// function changeColorsExercise() {
//   exerciseImg.classList.add("hidden");
// }

function changeStudyBox() {
  if (studyButton.classList.contains("active")) {
    studyButton.classList.remove("active");
    studyButton.firstElementChild.src = "assets/study.svg"
  } else if (meditateButton.classList.contains("active") || (exerciseButton.classList.contains("active"))) {
      studyButton.classList.remove("active");
      studyButton.firstElementChild.src = "assets/study.svg"
} else {
    studyButton.classList.add("active");
    studyButton.firstElementChild.src = "assets/study-active.svg";
  }
}

function changeMeditateBox() {
  if (meditateButton.classList.contains("active")) {
    meditateButton.classList.remove("active");
    meditateButton.firstElementChild.src = "assets/meditate.svg"
  } else if ((exerciseButton.classList.contains("active")) || (studyButton.classList.contains("active"))) {
      meditateButton.classList.remove("active");
      meditateButton.firstElementChild.src = "assets/meditate.svg"
  } else {
    meditateButton.classList.add("active");
    meditateButton.firstElementChild.src = "assets/meditate-active.svg";
  }
}

function changeExerciseBox() {
  if (exerciseButton.classList.contains("active")) {
    exerciseButton.classList.remove("active");
    exerciseButton.firstElementChild.src = "assets/exercise.svg"
  } else if ((meditateButton.classList.contains("active")) || (studyButton.classList.contains("active"))) {
      exerciseButton.classList.remove("active");
      exerciseButton.firstElementChild.src = "assets/exercise.svg"
    } else {
    exerciseButton.classList.add("active");
    exerciseButton.firstElementChild.src = "assets/exercise-active.svg";
}
}
