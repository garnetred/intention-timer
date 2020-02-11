var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var studyButton = document.getElementById("study");
var meditateButton = document.getElementById("meditate");
var exerciseButton = document.getElementById("exercise");
var boxArray = [studyButton, meditateButton, exerciseButton];
var startActBtn = document.getElementById('start-act-btn');
var activeBtn = document.querySelector('.active');
var warningPopUp = document.getElementById('warning-pop-up');
var timerPage = document.querySelector('.create-new-activity');
var currentActivityHeader = document.querySelector('.new-activity')
var circleColor = null;

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);
document.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('study')) {
    changeColors(event);
    return circleColor = 'green';
    console.log(`${circleColor}`);
  } else if (event.target.classList.contains('meditate')) {
    changeColors(event);
    return circleColor = 'purple';
    console.log(`${circleColor}`)
  } else if (event.target.classList.contains('exercise')) {
    changeColors(event);
    return circleColor = 'red';
    console.log(`${circleColor}`)
  } else if (event.target.classList.contains('start-act-btn')) {
    checkInputFields(event);
    generateTimerPage();
  } else if (event.target.classList.contains("timer-circle")) {
    var minInt = parseInt(minutesInput.value);
    var secInt = parseInt(secondsInput.value);
    countdownTimer(minInt, secInt);
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
  var replaceMinValue = minutesInput.value.replace('e', '');
  var replaceSecValue = secondsInput.value.replace('e', '');
  minutesInput.value = replaceMinValue;
  secondsInput.value = replaceSecValue;
}

function checkInputFields(event) {
  event.preventDefault();
  var areBtnsClicked = checkCategoryBtns();
  if (!minutesInput.value || !secondsInput.value|| !textInput.value || areBtnsClicked === false){
    warningPopUp.innerHTML = `<img src="./assets/warning.svg" class="warning-img" alt="warning img">
    <p class="warning">Please fill out all information!</p>`;
  } else if (minutesInput.value > 0 && secondsInput.value > 0 && textInput.value > 0) {

  }
}

function checkCategoryBtns() {
  if (studyButton.classList.contains('active') || meditateButton.classList.contains('active') || exerciseButton.classList.contains('active')) {
    return true;
  } else {
    return false;
  }
}

function generateTimerPage() {
  var minInt = parseInt(minutesInput.value);
  var secInt = parseInt(secondsInput.value);
  var time = secInt + (minInt * 60);
  repopulateTimerPage(time);
  changeCircleColor();
}

function repopulateTimerPage(time) {
  var remainingSec = time % 60;
  var remainingMin = Math.floor(time/60);
  var minuteHolder = parseInt(remainingMin);
  var secHolder = `${remainingSec < 10 ? '0' : '' }${remainingSec}`;
  timerPage.innerHTML = `<p class="user-activity" id="user-activity">${textInput.value}</p>
  <p class="timer" id="timer"><span id="minutes">${minuteHolder}:</span><span id="seconds">${secHolder}</span></p>
  <div class="timer-circle-holder" id="timer-circle-holder">
    <div class="timer-circle" id="timer-circle" role="button">
      <p class="start-complete" id="start-complete">start</p>
    </div>
  </div>`
  currentActivityHeader.innerText = "Current Activity";
  changeCircleColor();
}

function changeCircleColor() {
  var timerCircle = document.querySelector('#timer-circle');
  if (circleColor === 'green') {
    timerCircle.classList.add('green-circle');
  } else if (circleColor === 'purple') {
    timerCircle.classList.add('purple-circle');
  } else if (circleColor === 'red') {
    timerCircle.classList.add('red-circle');
  }
}

function countdownTimer(minInt, secInt) {
  var time = (minInt * 60) + secInt;
  var intervalId = setInterval(function() {
    if (time < 0) {
      currentActivityHeader.innerText = "Completed Activity";
      clearInterval(intervalId);
      return alert("Congratulations!");
    }
    repopulateTimerPage(time);
    time--;
  }
  ,1000)
}
