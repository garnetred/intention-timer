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
// var pageBackground = document.querySelector('.page-background');
var timerPage = document.querySelector('.timer-page')
// var logActivityHolder = document.querySelector('.log-activity-holder');
var logActivityBtn = document.querySelector('.log-activity-button');
var homePage = document.querySelector('.home-page');
var newActivityHeader = document.querySelector('.new-activity');
var currentActivityHeader = document.querySelector('.current-activity');
var completedActivityHeader = document.querySelector('.completed-activity');
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
    document.activeElement = null;
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
  // event.preventDefault();
  var areBtnsClicked = checkCategoryBtns();
  if (!minutesInput.value || !secondsInput.value || !textInput.value || areBtnsClicked===false) {
    errorMessage.classList.remove('hidden');
    console.log("error");
    return;
    checkInputFields();
  } else {
    console.log('success')
    homePage.classList.add('hidden');
    generateTimerPage();
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
  var userActivity = document.querySelector('.user-activity');
  var minutesDisplay = document.getElementById('minutes');
  var secondsDisplay = document.getElementById('seconds');
  userActivity.innerText = `${textInput.value}`;
  minutesDisplay.innerText = `${minuteHolder}:`;
  secondsDisplay.innerText = `${secHolder}`;
  timerPage.classList.remove('hidden');
  // logActivityHolder.classList.add('hidden');
  logActivityBtn.classList.add('hidden');
  currentActivityHeader.classList.remove('hidden');
  newActivityHeader.classList.add('hidden');
  completedActivityHeader.classList.add('hidden');
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
      completedActivityHeader.classList.remove('hidden');
      newActivityHeader.classList.add('hidden');
      currentActivityHeader.classList.add('hidden');
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
  // var activityLogCard = document.querySelector('.activity-log-card')
  var logCardBorder = document.querySelector('.log-card-border');
  var createNewActButton = document.querySelector('.create-new-activity-btn');
  var placeholderText = document.querySelector('.no-activities');
  // activityNameCard.innerText = `${textInput.value}`;
  // cardHeading.innerText = `${categoryName}`;
  // timeCard.innerText = `${minInt} min ${secInt} seconds`;
  // logCardBorder.setAttribute('id',`${categoryColor}`)
  // activityLogCard.classList.remove('hidden');
  placeholderText.classList.add('hidden');
  completedActivityHeader.classList.remove('hidden');
  newActivityHeader.classList.add('hidden');
  currentActivityHeader.classList.add('hidden');
  timerPage.classList.add('hidden');
  createNewActButton.classList.remove('hidden');
  createNewCards();
}

function createNewCards() {

  class Card {
    constructor() {
      // var activityNameCard = document.querySelector('.activity-name-card');
      // var timeCard = document.querySelector('.time-card');
      // var cardHeading = document.querySelector('.card-heading');
      // this.activityNameCard.innerText = `${textInput.value}`;
      // this.cardHeading.innerText = `${categoryName}`;
      // this.timeCard.innerText = `${minInt} min ${secInt} seconds`;
      // this.logCardBorder.setAttribute('id',`${categoryColor}`)
      this.sender = `${categoryName}`;
      console.log(this.sender)
  }
}
  // var loggedCard = new logCards();
  var pastActivitiesLog = document.querySelector('.past-activities-log');
  var logged = new Card
  var newCard = document.createElement('section');
  var minInt = parseInt(minutesInput.value);
  var secInt = parseInt(secondsInput.value);
  newCard.classList.add('activity-log-card');
  newCard.innerHTML =`<div class = "activity-card-text">
  <div class=log-card-border id=${categoryColor}>
  <h1 class="card-heading">${categoryName}</h1>
  <p class="time-card">${minInt} min ${secInt} seconds</p>
  </div>
  <p class="activity-name-card">${textInput.value}</p>
  </div>`
  pastActivitiesLog.appendChild(newCard);

}
