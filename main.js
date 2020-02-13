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
var categoryName = null;
var categoryColor = null;

minutesInput.addEventListener('keyup', onlyNumbersCheck);
secondsInput.addEventListener('keyup', onlyNumbersCheck);
document.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('study')) {
    changeColors(event);
    circleColor = 'green';
    categoryName = 'Study';
  } else if (event.target.classList.contains('meditate')) {
    changeColors(event);
    circleColor = 'purple';
    categoryName = 'Meditate';
  } else if (event.target.classList.contains('exercise')) {
    changeColors(event);
    circleColor = 'red';
    categoryName = 'Exercise';
  } else if (event.target.classList.contains('start-act-btn')) {
    checkInputFields(event);
    generateTimerPage();
  } else if (event.target.classList.contains("timer-circle")) {
    var minInt = parseInt(minutesInput.value);
    var secInt = parseInt(secondsInput.value);
    countdownTimer(minInt, secInt);
  } else if (event.target.classList.contains('log-activity-btn')) {
    logActivity();
  } else if (event.target.classList.contains('create-new-activity-btn')) {
    returnToHomePage(event);
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
  if (!minutesInput.value || !secondsInput.value || !textInput.value || areBtnsClicked === false){
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
  </div>
  <div class="log-activity-holder">
  </div>`
  currentActivityHeader.innerText = "Current Activity";
  changeCircleColor();
}

function changeCircleColor() {
  var timerCircle = document.querySelector('#timer-circle');
  if (circleColor === 'green') {
    timerCircle.classList.add('green-circle');
    categoryColor = 'green-stripe';
  } else if (circleColor === 'purple') {
    timerCircle.classList.add('purple-circle');
    categoryColor = 'purple-stripe';
  } else if (circleColor === 'red') {
    timerCircle.classList.add('red-circle');
    categoryColor = 'red-stripe';
  }
}

function countdownTimer(minInt, secInt) {
  var time = (minInt * 60) + secInt;
  var intervalId = setInterval(function() {
    if (time < 0) {
      currentActivityHeader.innerText = "Completed Activity";
      clearInterval(intervalId);
      return completedTimer();
    }
    repopulateTimerPage(time);
    time--;
  }
  ,1000)
}

function completedTimer() {
  var startComplete = document.querySelector('#start-complete');
  var logActivityHolder = document.querySelector('.log-activity-holder');
  logActivityHolder.innerHTML = `<button class="log-activity-btn">Log Activity</button>`;
  startComplete.innerHTML = "Complete!"
}

function logActivity() {
  var minInt = parseInt(minutesInput.value);
  var secInt = parseInt(secondsInput.value);
  var pastActivitiesLog = document.querySelector('.past-activities-log');
  pastActivitiesLog.innerHTML = `<section class="activity-log-card"><div class = "activity-card-text"><div class=log-card-border id=${categoryColor}><h1 class="card-heading">${categoryName}</h1>
  <p class="time-card">${minInt} min ${secInt} seconds</p></div><p class="activity-name-card">${textInput.value}</p></div></section>`
  timerPage.innerHTML = `<button class="create-new-activity-btn">Create A New Activity</button>`;
  currentActivityHeader.innerText = "Completed Activity";
}

function returnToHomePage() {
  var homePage = document.getElementsByTagName('main')[0];
  homePage.innerHTML = `<h2 class="new-activity">New Activity</h2>
        <section class="create-new-activity card-shadow">
          <p>Select a category:</p>
          <section class="category-btn">
            <button id = "study" class="study focus" type = "button" >
              <img class="study-img" src="./assets/study.svg" alt="study-img">
              <p class="labels study-label">Study</p>
            </button>
            <button id = "meditate" class="meditate" type = "button" >
              <img class="meditate-img" src="./assets/meditate.svg" alt="meditate-img">
              <p class="labels meditate-label">Meditate</p>
            </button>
            <button id = "exercise" class="exercise" type = "button" >
              <img class="exercise-img" src="./assets/exercise.svg" alt="exercise-img">
              <p class="labels exercise-label">Exercise</p>
            </button>
          </section>
          <p class="what-to-accomplish">What would you like to accomplish during this time?</p>
          <input id="text-input" type="text" class="accomplish-input">
          <div class="all-time-input">
            <div class="time-input minutes">
              <p class="time-name">Minutes</p>
              <input id="minutes-input" class="input-time" type="number" name="minutes" min = 0 placeholder="0">
            </div>
            <div class="time-input seconds">
              <p class="time-name">Seconds</p>
              <input id="seconds-input" class="input-time" type="number" name="seconds" min = 0 placeholder="0">
            </div>
          </div>
          <div class="warning-pop-up">
          </div>
          <button type="button" class="start-act-btn"name="Start Activity">Start Activity</button>
        </section>`
}
