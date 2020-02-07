var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var studyButton = document.getElementById("study");
var meditateButton = document.getElementById("meditate");
var exerciseButton = document.getElementById("exercise");
// var studyImg = document.querySelector(".study-img");
// var meditateImg = document.querySelector(".meditate-img");
// var exerciseImg = document.querySelector(".exercise-img");

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);
// studyButton.addEventListener('click', changeStudyBox);
// meditateButton.addEventListener('click', changeMeditateBox);
// exerciseButton.addEventListener('click', changeExerciseBox);
studyButton.addEventListener('click', changeStudyColors);
meditateButton.addEventListener('click', changeMeditateColors);
exerciseButton.addEventListener('click', changeExerciseColors);
// studyButton.addEventListener('blur', inactiveButtons);
// meditateButton.addEventListener('blur', inactiveButtons);
// exerciseButton.addEventListener('blur', inactiveButtons);
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
//   // document.activeElement.blur();
//   console.log("active elements have been blurred");
//
//
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

function changeStudyColors(event) {
  if (document.activeElement==studyButton) {
    studyButton.classList.add("active");
    studyButton.firstElementChild.src="assets/study-active.svg"
    meditateButton.classList.remove("active");
    meditateButton.firstElementChild.src="assets/meditate.svg";
    exerciseButton.classList.remove("active");
    exerciseButton.firstElementChild.src="assets/exercise.svg"
    console.log("the study button has focus right now");
  } else {
    studyButton.firstElementChild.src="assets/study.svg";
    // studyButton.classList.remove("hasactive");
    // event.target.classList.remove("active");
    console.log("no focus on studyButton right now!");
    meditateButton.blur();
    exerciseButton.blur();
}
  }

function changeMeditateColors(event) {
  if (document.activeElement==meditateButton) {
    meditateButton.classList.add("active");
    meditateButton.firstElementChild.src="assets/meditate-active.svg"
    studyButton.classList.remove("active");
    studyButton.firstElementChild.src="assets/study.svg";
    exerciseButton.classList.remove("active");
    exerciseButton.firstElementChild.src="assets/exercise.svg";
    console.log("the meditate button has focus right now");
  } else {
    meditateButton.firstElementChild.src="assets/meditate.svg";
    // meditateButton.classList.remove("hasactive");
    event.target.classList.remove("active");
    console.log("no focus on meditate button right now!");
  }
}
function changeExerciseColors(event) {
  if (document.activeElement==exerciseButton) {
    exerciseButton.classList.add("active");
    exerciseButton.firstElementChild.src="assets/exercise-active.svg"
    meditateButton.classList.remove("active");
    meditateButton.firstElementChild.src="assets/meditate.svg";
    studyButton.classList.remove("active");
    studyButton.firstElementChild.src="assets/study.svg";
    console.log("the exercise button has focus right now");
  }   else {
    exerciseButton.firstElementChild.src="assets/exercise.svg";
    exerciseButton.classList.remove("hasactive");
    event.target.classList.remove("active");
    console.log("no focus on exercise button right now!");
  }
}

// function changeStudyColors() {
//   if (studyButton.classList.contains("active")) {
//     studyButton.classList.remove("active");
//     studyButton.firstElementChild.src = "assets/study.svg"
// //   } else if (document.activeElement!=studyButton) {
// //       studyButton.classList.remove("active");
// //       studyButton.firstElementChild.src = "assets/study.svg"
// // } else {
//     studyButton.classList.add("active");
//     studyButton.firstElementChild.src = "assets/study-active.svg";
//   }
// }
//
// function changeMeditateColors() {
//   if (meditateButton.classList.contains("active")) {
//     meditateButton.classList.remove("active");
//     meditateButton.firstElementChild.src = "assets/meditate.svg"
//   } else if ((exerciseButton.classList.contains("active")) || (studyButton.classList.contains("active"))) {
//       meditateButton.classList.remove("active");
//       meditateButton.firstElementChild.src = "assets/meditate.svg"
//   } else {
//     meditateButton.classList.add("active");
//     meditateButton.firstElementChild.src = "assets/meditate-active.svg";
//   }
// }
//
// function changeExerciseColors() {
//   if (exerciseButton.classList.contains("active")) {
//     exerciseButton.classList.remove("active");
//     exerciseButton.firstElementChild.src = "assets/exercise.svg"
//   } else if ((meditateButton.classList.contains("active")) || (studyButton.classList.contains("active"))) {
//       exerciseButton.classList.remove("active");
//       exerciseButton.firstElementChild.src = "assets/exercise.svg"
//     } else {
//     exerciseButton.classList.add("active");
//     exerciseButton.firstElementChild.src = "assets/exercise-active.svg";
// }
// }
