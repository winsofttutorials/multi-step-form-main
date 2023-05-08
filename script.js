var togglebtn = document.getElementById("toggle-btn");
var subPackages = document.getElementsByClassName("sub-package");
var subPlans = document.getElementsByClassName("sub-plans");
var gamePlans = document.getElementsByClassName("gamesFrame");
var stagePlans = document.getElementsByClassName("current-stage");

let currentValue = 1;
let currentValues = 1;
let gameValues = 1;
let stageValues = 1;

function activlink(tabname) {
  if (currentValue == 1) {
    for (const i of subPackages) {
      i.classList.remove("active-package");
    }
    currentValue++;
    subPackages[currentValue - 1].classList.add("active-package");
  } else {
    for (const i of subPackages) {
      i.classList.remove("active-package");
    }
    currentValue--;
    subPackages[currentValue - 1].classList.add("active-package");
  }
}

function activeTab() {
  if (currentValues == 1) {
    for (const subplan of subPlans) {
      subplan.classList.remove("active-subplans");
    }
    currentValues++;
    subPlans[currentValues - 1].classList.add("active-subplans");
  } else {
    for (const subplan of subPlans) {
      subplan.classList.remove("active-subplans");
    }
    currentValues--;
    subPlans[currentValues - 1].classList.add("active-subplans");
  }
}

function activeGame() {
  if (gameValues == 1) {
    for (const gameplan of gamePlans) {
      gameplan.classList.remove("active-game-frame");
    }
    gameValues++;
    gamePlans[gameValues - 1].classList.add("active-game-frame");
  } else {
    for (const gameplan of gamePlans) {
      gameplan.classList.remove("active-game-frame");
    }
    gameValues--;
    gamePlans[gameValues - 1].classList.add("active-game-frame");
  }
}

function activeStage() {
  if (stageValues < 4) {
    for (const stageplan of stagePlans) {
      stageplan.classList.remove("active-stage");
    }
    stageValues++;
    stagePlans[stageValues - 1].classList.add("active-stage");
  }
}

function activebackStage() {
  if (stageValues > 1) {
    for (const stageplan of stagePlans) {
      stageplan.classList.remove("active-stage");
    }
    stageValues--;
    stagePlans[stageValues - 1].classList.add("active-stage");
  }
}

function toggleMode() {
  activeTab();
  activeGame();
  togglebtn.classList.toggle("toggle-left");
  activlink();
}

// --------------------------FORM TRANSITIONS-------------------

let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let next3 = document.getElementById("next3");

let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");

next1.onclick = function () {
  form1.style.left = "600px";
  form2.style.left = "0px";
  activeStage();
};
next1.addEventListener("click", next1);

back1.onclick = function () {
  form2.style.left = "600px";
  form1.style.left = "0px";
  activebackStage();
};
back1.addEventListener("click", next1);

next2.onclick = function () {
  form2.style.left = "600px";
  form3.style.left = "0px";
  activeStage();
};
next2.addEventListener("click", next1);

back2.onclick = function () {
  form3.style.left = "600px";
  form2.style.left = "0px";
  activebackStage();
};
back2.addEventListener("click", next1);

next3.onclick = function () {
  form3.style.left = "600px";
  form4.style.left = "0px";
  activeStage();
};
next3.addEventListener("click", next1);

back3.onclick = function () {
  form4.style.left = "600px";
  form3.style.left = "0px";
  activebackStage();
};
back3.addEventListener("click", next1);

next4.onclick = function () {
  form4.style.left = "600px";
  form5.style.left = "0px";
  activeStage();
};
next4.addEventListener("click", next1);

// --------------------Games Selection-----------------
let game = document.getElementsByClassName("games");
// let gamez = 1;
function selectedGame() {
  for (const game of games) {
    game.classList.remove("active-game-info");
  }
  event.currentTarget.classList.add("active-game-info");
}
