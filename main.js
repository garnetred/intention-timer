var textInput = document.getElementById("text-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var studyButton = document.getElementById("study");
var meditateButton = document.getElementById("meditate");
var exerciseButton = document.getElementById("exercise");
var boxArray = [studyButton, meditateButton, exerciseButton];
var startActBtn = document.querySelector('.start-act-btn');
var activeBtn = document.querySelector('.active');
var errorMessage = document.querySelector('.error');
var timerPage = document.querySelector('.timer-page')
var logActivityBtn = document.querySelector('.log-activity-button');
var homePage = document.querySelector('.home-page');
var activityHeader = document.querySelector('.activity-header');
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
  } else if (event.target.classList.contains("timer-circle")) {
    var minInt = parseInt(minutesInput.value);
    var secInt = parseInt(secondsInput.value);
    countdownTimer(minInt, secInt);
  } else if (event.target.classList.contains('log-activity-button')) {
    logActivity();
  } else if (event.target.classList.contains('create-new-activity-btn')) {
    var createNewActButton = document.querySelector('.create-new-activity-btn');
    createNewActButton.classList.add('hidden');
    homePage.classList.remove('hidden');
    minutesInput.value = '';
    secondsInput.value = '';
    textInput.value = '';
    activityHeader.innerText = 'New Activity';
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
  var areBtnsClicked = checkCategoryBtns();
  if (!minutesInput.value || !secondsInput.value || !textInput.value || areBtnsClicked===false) {
    errorMessage.classList.remove('hidden');
    return;
  } else {
    homePage.classList.add('hidden');
    generateTimerPage();
  }
}

function checkCategoryBtns() {
  if (studyButton.classList.contains('active') ||
  meditateButton.classList.contains('active') ||
  exerciseButton.classList.contains('active')) {
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
  var userActivity = document.querySelector('.user-activity');
  var minutesDisplay = document.getElementById('minutes');
  var secondsDisplay = document.getElementById('seconds');
  var startComplete = document.querySelector('#start-complete');
  startComplete.innerHTML = "Start";
  userActivity.innerText = `${textInput.value}`;
  minutesDisplay.innerText = `${minuteHolder}:`;
  secondsDisplay.innerText = `${secHolder}`;
  timerPage.classList.remove('hidden');
  logActivityBtn.classList.add('hidden');
  activityHeader.innerText = 'Current Activity';
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
      activityHeader.innerText = "Completed Activity"
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
  logActivityBtn.classList.remove('hidden');
  startComplete.innerHTML = "Complete!"
}

function logActivity() {
  var minInt = parseInt(minutesInput.value);
  var secInt = parseInt(secondsInput.value);
  var pastActivitiesLog = document.querySelector('.past-activities-log');
  var logCardBorder = document.querySelector('.log-card-border');
  var createNewActButton = document.querySelector('.create-new-activity-btn');
  var placeholderText = document.querySelector('.no-activities');
  placeholderText.classList.add('hidden');
  activityHeader.innerText = 'Completed Activity';
  timerPage.classList.add('hidden');
  createNewActButton.classList.remove('hidden');
  createNewCards();
}

function createNewCards() {
  var pastActivitiesLog = document.querySelector('.past-activities-log');
  var newCard = document.createElement('section');
  var minInt = parseInt(minutesInput.value);
  var secInt = parseInt(secondsInput.value);
  newCard.classList.add('activity-log-card');
  newCard.innerHTML =
    `<div class = "activity-card-text">
    <div class=log-card-border id=${categoryColor}>
    <h1 class="card-heading">${categoryName}</h1>
    <p class="time-card">${minInt} min ${secInt} seconds</p>
    </div>
    <p class="activity-name-card">${textInput.value}</p>
    </div>`
  pastActivitiesLog.appendChild(newCard);
}
