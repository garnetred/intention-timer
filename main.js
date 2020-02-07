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
studyButton.addEventListener('focus', changeStudyColors, true);
meditateButton.addEventListener('focus', changeMeditateColors, true);
exerciseButton.addEventListener('focus', changeExerciseColors, true);
studyButton.addEventListener('blur', inactiveButtons, true);
meditateButton.addEventListener('blur', inactiveButtons, true);
exerciseButton.addEventListener('blur', inactiveButtons, true);
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
//Could create a class for each button and add or remove them?
// function changeStudyColors() {
//   if (document.activeElement!=studyButton) {
//     studyButton.firstElementChild.src="assets/study.svg";
//   } else {
//     studyButton.firstElementChild.src="assets/study-active.svg"
//   }
// }
//
// function changeExerciseColors() {
//   if (document.activeElement.classList.contains="exercise") {
//     exerciseButton.firstElementChild.src="assets/exercise-active.svg";
//   } else {
//     exerciseButton.firstElementChild.src="assets/exercise.svg";
//   }
// }
//
// function changeMeditateColors() {
//   if (document.activeElement.classList.contains="meditate") {
//     meditateButton.firstElementChild.src="assets/meditate-active.svg";
//   } else {
//     meditateButton.firstElementChild.src="assets/meditate.svg";
//   }
// }


// function changeStudyColors() {
//   studyButton.firstElementChild.src = "assets/study-active.svg";
// }
//
function inactiveButtons() {
  // document.activeElement.blur();
  console.log("active elements have been blurred");
  exerciseButton.firstElementChild.src="assets/exercise.svg";
  meditateButton.firstElementChild.src="assets/meditate.svg";
  studyButton.firstElementChild.src="assets/study.svg";

}

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

function changeStudyColors() {
  if (document.activeElement==studyButton) {
    studyButton.firstElementChild.src="assets/study-active.svg"
    meditateButton.firstElementChild.src="assets/meditate.svg";
    exerciseButton.firstElementChild.src="assets/exercise.svg"
    console.log("the study button has focus right now");
  } else {
  studyButton.firstElementChild.src="assets/study.svg";
  console.log("no focus on studyButton right now!");
}
  }

function changeMeditateColors() {
  if (document.activeElement==meditateButton) {
    meditateButton.firstElementChild.src="assets/meditate-active.svg"
    studyButton.firstElementChild.src="assets/study.svg";
    exerciseButton.firstElementChild.src="assets/exercise.svg";
    console.log("the meditate button has focus right now");
  } else {
    meditateButton.firstElementChild.src="assets/meditate.svg";
    console.log("no focus on meditate button right now!");
  }
}
function changeExerciseColors() {
  if (document.activeElement==exerciseButton) {
    exerciseButton.firstElementChild.src="assets/exercise-active.svg"
    meditateButton.firstElementChild.src="assets/meditate.svg";
    studyButton.firstElementChild.src="assets/study.svg";
    console.log("the exercise button has focus right now");
  }   else {
    exerciseButton.firstElementChild.src="assets/exercise.svg";
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
