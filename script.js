"strict";

const missions = {
  basic: [
    {
      title: "Edge of the forest",
      description:
        "You get one point for each forest field adjacent to the edge of your map.",
      method: edgeOfTheForest,
      name: "edgeOfTheForest",
    },
    {
      title: "Sleepy valley",
      description:
        "For every row with three forest fields, you get four points.",
      method: sleepyValley,
      name: "sleepyValley",
    },
    {
      title: "Watering potatoes",
      description:
        "You get two points for each water field adjacent to your farm fields.",
      method: wateringPotatoes,
      name: "wateringPotatoes",
    },
    {
      title: "Borderlands",
      description: "For each full row or column, you get six points.",
      method: borderlands,
      name: "borderlands",
    },
  ],
  extra: [
    {
      title: "Tree line",
      description:
        "You get two points for each of the fields in the longest vertically uninterrupted continuous forest. If there are two or more tree lines with the same longest length, only one counts.",
      method: treeLine,
      name: "treeLine",
      season: "none",
      points: 0,
    },
    {
      title: "Watering canal",
      description:
        "For each column of your map that has the same number of farm and water fields, you will receive four points. You must have at least one field of both terrain types in your column to score points.",
      method: wateringCanal,
      name: "wateringCanal",
      season: "none",
      points: 0,
    },
    {
      title: "Empty site",
      description:
        "You get two points for empty fields adjacent to your village fields.",
      method: emptySite,
      name: "emptySite",
      season: "none",
      points: 0,
    },
    {
      title: "Terraced house",
      description:
        "For each field in the longest village fields that are horizontally uninterrupted and contiguous you will get two points.",
      method: terracedHouse,
      name: "terracedHouse",
      season: "none",
      points: 0,
    },
    {
      title: "Wealthy town",
      description:
        "You get three points for each of your village fields adjacent to at least three different terrain types.",
      method: wealthyTown,
      name: "wealthyTown",
    },
    {
      title: "Magicians' valley",
      description:
        "You get three points for your water fields adjacent to your mountain fields.",
      method: magiciansValley,
      name: "magiciansValley",
    },
    {
      title: "Odd numbered silos",
      description:
        "For each of your odd numbered full columns you get 10 points.",
      method: oddNumberedSilos,
      name: "oddNumberedSilos",
    },
    {
      title: "Rich countryside",
      description:
        "For each row with at least five different terrain types, you will receive four points.",
      method: richCountrySide,
      name: "richCountrySide",
    },
  ],
};

const elements = [
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
];

// #################################################################
// #################################################################
// #################################################################

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnOpenModal = document.querySelectorAll(".show-modal");
// const btnOpenModal = document.querySelector(".show-modal");

// Functions

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  // resetMap();
};

const closeModalOnEsc = function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    resetMap();
  }
};

const MyEvents = function (onWhat, element, method) {
  element.addEventListener(onWhat, method);
};

///////////////////////////////////////////////

// for (var i = 0; i < btnOpenModal.length; i++) {
//   //   btnOpenModal[i].addEventListener("click", openModal);
//   console.log("Hi");
//   const element = btnOpenModal[i];
//   MyEvents("click", element, openModal);
// }

// MyEvents("click", btnOpenModal, openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// MyEvents("click", btnCloseModal, closeModal);
MyEvents("click", overlay, closeModal);

// document.addEventListener("keydown", closeModalOnEsc);
MyEvents("keydown", document, closeModalOnEsc);

// function startingMessage() {
//   const message = "Welcome to the Adventure Game!";
//   const instructions = `In this game, you will embark on an exciting journey filled with challenges and puzzles. Your choices will determine your fate. Are you ready to begin your adventure?`;
//   alert(message + "\n\n" + instructions);
// }

// startingMessage();

const currentElement = function (ele) {
  for (let i = 0; i < 4; i++) {
    ele = rotateAndTrim(ele);
  }

  return ele;
};

let selectedCells = 0;
let unitTime = 0;
let playing = true;
let index = Math.floor(Math.random() * elements.length - 1) + 1;
let curEle = currentElement(elements[index].shape);

const main = document.querySelector("#main");
const mapGrid = document.querySelector("#map");
const details = document.querySelector("#details");
const score = document.querySelector(".score");
const mission = document.querySelector(".missions");
const nextEle = document.querySelector(".nextElement");

const highScore = document.querySelector(".highestScore");
const latestScore = document.querySelector(".lastScore");

const body = document.querySelector("body");

const flip = document.createElement("button");
const rotate = document.createElement("button");
const nextBtn = document.createElement("button");
const prevBtn = document.createElement("button");
const nextButton = document.querySelector(".nextButton");
const skipButton = document.querySelector(".skipButton");
const allMsgs = document.querySelectorAll(".message");
const welcome = document.querySelector(".welcome");

const forShape = document.createElement("div");
const shapes = document.createElement("div");
const divInScore = document.createElement("div");
const totalPoints = document.createElement("div");
const SeanonsAndPoints = document.createElement("div");

const eotf = document.querySelector(".edgeOfTheForest");
const sv = document.querySelector(".sleepyValley");
const wp = document.querySelector(".wateringPotatoes");
const bl = document.querySelector(".borderlands");

const tl = document.querySelector(".treeLine");
const wc = document.querySelector(".wateringCanal");
const es = document.querySelector(".emptySite");
const th = document.querySelector(".terracedHouse");
const wt = document.querySelector(".wealthyTown");
const mv = document.querySelector(".magiciansValley");
const ons = document.querySelector(".oddNumberedSilos");
const rcs = document.querySelector(".richCountrySide");

const currentGamePoints = document.querySelector(".currentGamePoints");
const lastGamePoints = document.querySelector(".lastGamePoints");
const higestGamePoints = document.querySelector(".highestGamePoints");

const quit = document.querySelector(".quit");
const reset = document.querySelector(".reset");

let lstGPoints = 0;
let hstGPoints = 0;
console.log(allMsgs.length);

let currentMessageIndex = 0;
// const allMsgs = document.querySelectorAll(".message");

welcome.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log("kia bath waseem bhai");
  if (!e.target.closest(".nextButton")) return;
  // console.log("koch khas nai");
  if (allMsgs[currentMessageIndex].classList.contains("activeMessage")) {
    allMsgs[currentMessageIndex].classList.remove("activeMessage");
    allMsgs[currentMessageIndex].classList.add("hidden");

    currentMessageIndex++;

    if (currentMessageIndex < allMsgs.length) {
      allMsgs[currentMessageIndex].classList.add("activeMessage");
      allMsgs[currentMessageIndex].classList.remove("hidden");
    } else {
      // Hide the welcome container when all messages are displayed
      clearMessage();
    }
  }
});

function clearMessage() {
  welcome.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  stopRotation();
}

skipButton.addEventListener("click", function (e) {
  e.preventDefault();
  clearMessage();
});

// let mountains = [
//   [2, 2],
//   [4, 9],
//   [6, 4],
//   [9, 10],
//   [10, 6],
// ];

let mountains = [];

function getRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
}

function setMountains() {
  for (let i = 0; i < 5; i++) {
    let arr = [];
    for (let j = 0; j < 2; j++) {
      arr.push(getRandomNumber());
    }
    mountains.push(arr);
  }

  mountains.sort((a, b) => a[0] - b[0]);
}

setMountains();
// let n = 0;
const Maintable = document.createElement("table");

function setTable() {
  for (let i = 1; i <= 11; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("row");

    for (let j = 1; j <= 11; j++) {
      const td = document.createElement("td");
      td.classList.add("cell");
      tr.appendChild(td);
      td.setAttribute("type", "empty");
      td.style.backgroundImage = "url('./tiles/base_tile.png')";
      td.setAttribute("flag", "0");
      td.setAttribute("value", `(${i},${j})`);
    }

    Maintable.appendChild(tr);
  }
}

setTable();

// for (let i = 1; i <= 11; i++) {
//   const tr = document.createElement("tr");
//   tr.classList.add("row");

//   for (let j = 1; j <= 11; j++) {
//     const td = document.createElement("td");
//     td.classList.add("cell");
//     tr.appendChild(td);
//     td.setAttribute("type", "empty");
//     td.setAttribute("flag", "0");
//     td.setAttribute("value", `(${i},${j})`);
//   }

//   Maintable.appendChild(tr);
// }

mapGrid.appendChild(Maintable);

const currentSeason = missions["basic"];
divInScore.classList.add("scoreBoxs");

const scoreArr = ["Spring", "Summer", "Autumn", "Winter"];
body.style.backgroundImage = `url("./backgroundImages/theme.png")`;
// main.style.color = "#fff";

// body.style.font = "bold";

for (let i = 0; i < 4; i++) {
  const box = document.createElement("div");
  box.innerHTML = `<h3>${scoreArr[i]}</h3> <div><span>0</span> Points</div>`;
  box.classList.add("scoreBox");
  box.classList.add(`score${i + 1}`);
  divInScore.appendChild(box);
}

totalPoints.classList.add("totalPoints");
SeanonsAndPoints.classList.add("SeanonsAndPoints");
totalPoints.innerHTML = `<h3>Total: <span class='points'>0</span> Points</h3>`;

SeanonsAndPoints.appendChild(divInScore);
SeanonsAndPoints.appendChild(totalPoints);
score.appendChild(SeanonsAndPoints);

let div1 = document.createElement("div");
div1.classList.add(`missionDivs`);

let div2 = document.createElement("div");
div2.classList.add(`missionDivs`);

let selectedmissions = [];

function forMissionCards(ele, div, i) {
  let name = ele.name;
  const missionCardElement = document.createElement("div");
  missionCardElement.classList.add(`basicMission${i + 1}`);
  missionCardElement.classList.add("mission-card");
  missionCardElement.innerHTML = `<img src="./missions_eng/${name}.png" alt="Mission Image">`;
  div.appendChild(missionCardElement);
  selectedmissions.push(ele.method);
}

// obj = missions['basic']
function randomMissions(obj) {
  for (let i = 0; i < obj.length; i += 2) {
    // const randBasicmissions = selectMissionCard(missions.basic[0 + i]);
    // const randExtramissions = selectMissionCard(missions.basic[i + 1]);
    forMissionCards(missions.basic[i], div1, i);
    forMissionCards(missions.basic[1 + i], div2, i + 1);
  }

  // console.log(selectedmissions);

  mission.appendChild(div1);
  mission.appendChild(div2);
}

randomMissions(missions["basic"]);

const rotateFlip = `<div class='left col-6'>
                        <h3 class='currentEleText'>Current element:</h3>
                        <div class='btn'>
                            
                        </div>
                    </div>

                    <div class='right col-6'>
                    <div class="emoji"><h2>Time : ${elements[index].time}</h2> <span>⏰</span></div>
                    <div class="rightForShapes"> </div>
                    </div>`;

nextEle.innerHTML = rotateFlip;

const btn = document.querySelector(".btn");
const elementBox = document.querySelector(".rightForShapes");

flip.innerHTML = "FLIP";
flip.classList.add("flip");
// nextBtn.innerHTML = "NEXT";
// prevBtn.innerHTML = "PREVIUS";
rotate.innerHTML = "ROTATE";
rotate.classList.add("rotate");

forShape.appendChild(flip);
forShape.appendChild(rotate);
// forShape.appendChild(prevBtn);
// forShape.appendChild(nextBtn);

btn.appendChild(forShape);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function getLocalStorage() {
  // let scoreContainer = [0, 0]
  const maxScore = JSON.parse(localStorage.getItem("highgestScore"));
  const lastScore = JSON.parse(localStorage.getItem("lastScore"));
  //console.log(data);

  if (!lastScore) return;
  lstGPoints = lastScore;
  latestScore.innerHTML = lastScore;

  if (!maxScore) return;
  highScore.innerHTML = maxScore;
  hstGPoints = maxScore;
}

getLocalStorage();

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let table = document.querySelector("#map table");
let row = table.rows.length;
let col = table.rows[0].cells.length;

let cnt = 0;
let point = 0;
let flag = false;
let type;
let cell;
let rows;

// function for selecting unique missions rendomly...
// function selectMissionCard(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   const randomElement = arr[randomIndex];
//   arr.splice(randomIndex, 1);
//   return randomElement;
// }

// function Arranging the mountains...
function setMountainsOnMap() {
  for (let i = 0; i < mountains.length; i++) {
    cell = table.rows[mountains[i][0] - 1].cells[mountains[i][1] - 1];
    cell.setAttribute("type", "mountain");
    cell.classList.add("mountain");
    cell.style.backgroundImage = "url('./tiles/mountain_tile.png')";
    cell.backgroundPosition = "cover";
    cell.backgroundRepeat = "no-Repeat";
  }
}

setMountainsOnMap();

// function 1
function treeLine() {
  let oldCountiousCnt = 0;
  let newCountiousCnt = 0;
  let maxCnt = 0;
  let trackingI = 0;

  cnt = 0;

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      cell = table.rows[i].cells[j];
      type = cell.getAttribute("type");
      if (type === "forest") {
        cnt++;
        if (i - trackingI === 1 || i - trackingI === 0 || cnt === 1) {
          newCountiousCnt++;
          trackingI = i;
        }
      } else {
        if (oldCountiousCnt <= newCountiousCnt) {
          oldCountiousCnt = newCountiousCnt;
        }
        newCountiousCnt = 0;
        cnt = 0;
      }
    }
    if (maxCnt <= oldCountiousCnt) {
      maxCnt = oldCountiousCnt;
    }
    oldCountiousCnt = 0;
    newCountiousCnt = 0;
    cnt = 0;
  }

  extrapoints[0] = maxCnt * 2;
  console.log("treeLine :", maxCnt * 2);

  return maxCnt * 2;
}

// function 2
function wateringCanal() {
  let farmCnt = 0;
  let waterCnt = 0;

  cnt = 0;
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      cell = table.rows[i].cells[j];
      type = cell.getAttribute("type");
      if (type === "farm") farmCnt++;
      if (type === "water") waterCnt++;
    }
    if (farmCnt === waterCnt && (farmCnt !== 0 || waterCnt !== 0)) {
      cnt++;
    }
    farmCnt = 0;
    waterCnt = 0;
  }

  extrapoints[1] = cnt * 4;
  console.log("wateringCanal :", cnt * 4);

  return cnt * 4;
}

// function 3
function oddNumberedSilos() {
  flag = true;
  cnt = 0;

  for (let j = 0; j < col; j += 2) {
    for (let i = 0; i < row; i++) {
      cell = table.rows[i].cells[j];
      let type = cell.getAttribute("type");

      if (type === "empty") {
        flag = false;
        break;
      }
    }
    if (flag) {
      cnt++;
    }
    flag = true;
  }

  extrapoints[6] = cnt * 10;
  console.log("oddNumberedSilos :", cnt * 10, extrapoints[6]);

  return cnt * 10;
}

// function 4
function richCountrySide() {
  let WFFMT = [false, false, false, false, false];
  cnt = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      cell = table.rows[i].cells[j];
      type = cell.getAttribute("type");

      switch (type) {
        case "water":
          WFFMT[0] = true;
          break;
        case "forest":
          WFFMT[1] = true;
          break;
        case "farm":
          WFFMT[2] = true;
          break;
        case "mountain":
          WFFMT[3] = true;
          break;
        case "town":
          WFFMT[4] = true;
          break;
      }
    }
    flag = WFFMT.reduce((acc, curr) => acc && curr, true);

    if (flag) {
      cnt++;
    }
    WFFMT = [false, false, false, false, false];
  }

  extrapoints[7] = cnt * 4;
  console.log("richCountrySide :", cnt * 4, extrapoints[7]);

  return cnt * 4;
}

// function 5
function terracedHouse() {
  let oldCnt = 0;
  let totalCnt = 1;
  let nextType;

  cnt = 0;
  flag = false;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      cell = table.rows[i].cells[j];
      if (flag) nextType = cell.getAttribute("type");
      else type = cell.getAttribute("type");

      if (type === "town") {
        cnt++;
        flag = true;
        type = null;
      }

      if (nextType === "town") {
        cnt++;
        flag = false;
        nextType = null;
      }

      if ((type !== "town " || nextType !== "town") && (nextType || type)) {
        if (oldCnt < cnt) {
          oldCnt = cnt;
          totalCnt = 1;
        } else if (oldCnt === cnt && cnt !== 0 && oldCnt !== 0) {
          totalCnt++;
        }
        cnt = 0;
      }
    }
    cnt = 0;
  }

  extrapoints[3] = totalCnt * oldCnt * 2;

  console.log("terracedHouse :", totalCnt * oldCnt * 2);

  return totalCnt * oldCnt * 2;
}

// function 6
function wealthyTown() {
  cnt = 0;
  let nonZeros = 0;
  let left;
  let right;
  let up;
  let down;

  let data = {};

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      cell = table.rows[i].cells[j];
      type = cell.getAttribute("type");
      if (type === "town") {
        data = {
          mountain: 0,
          water: 0,
          town: 0,
          forest: 0,
          farm: 0,
        };

        if (j > 0) left = table.rows[i].cells[j - 1].getAttribute("type");
        if (j < 10) right = table.rows[i].cells[j + 1].getAttribute("type");
        if (i > 0) up = table.rows[i - 1].cells[j].getAttribute("type");
        if (i < 10) down = table.rows[i + 1].cells[j].getAttribute("type");

        data[`${left}`]++;
        data[`${right}`]++;
        data[`${up}`]++;
        data[`${down}`]++;

        for (const key in data) {
          if (data[`${key}`] !== 0 && key !== null && data[`${key}`]) {
            nonZeros++;
          }
        }
        if (nonZeros >= 3) cnt++;
        nonZeros = 0;
      }
    }
  }

  extrapoints[4] = cnt * 3;
  console.log("wealthyTown :", cnt * 3, extrapoints[4]);
  return cnt * 3;
}

// function 7
// function edgeOfTheForest(type, i, j) {
function edgeOfTheForest() {
  let point = 0;
  let inputString;
  let numericValues;

  let i;
  let j;

  const forestCells = document.querySelectorAll('#map [type="forest"]');
  // type === "forest"
  forestCells.forEach((cell) => {
    inputString = cell.getAttribute("value");
    numericValues = inputString.match(/\d+/g);

    i = parseInt(numericValues[0], 10);
    j = parseInt(numericValues[1], 10);
    // console.log("i, j : ", i, j);
    if (i === 1 || i === 11 || j === 1 || j === 11) {
      point++;
    }
  });

  console.log("edgeOfTheForest :", point);
  return point;
}

// function 8
// function wateringPotatoes(type, i, j) {
function wateringPotatoes() {
  // if (type === "water") {
  let farmCells = document.querySelectorAll('#map [type="farm"]');
  let waterCells = document.querySelectorAll('#map [type="water"]');
  let point = 0;
  farmCells.forEach((ele) => {
    let inputString = ele.getAttribute("value");
    let numericValues = inputString.match(/\d+/g);

    const intValue_i = parseInt(numericValues[0], 10);
    const intValue_j = parseInt(numericValues[1], 10);

    waterCells.forEach((wtr) => {
      inputString = wtr.getAttribute("value");
      numericValues = inputString.match(/\d+/g);

      const i = parseInt(numericValues[0], 10);
      const j = parseInt(numericValues[1], 10);

      if (
        wtr.getAttribute("flag") === "0" &&
        ((Math.abs(i - intValue_i) === 1 && Math.abs(j - intValue_j) === 0) ||
          (Math.abs(j - intValue_j) === 1 && Math.abs(i - intValue_i) === 0))
      ) {
        // points += 2;
        point += 2;
        wtr.setAttribute("flag", "1");
      }
    });
  });

  // waterCells = document.querySelectorAll('#map [type="water"]');

  waterCells.forEach((wtr) => {
    wtr.setAttribute("flag", "0");
  });

  console.log("wateringPotatoes :", point);
  return point;
}

// function 9
function magiciansValley() {
  let point = 0;
  const waterCells = document.querySelectorAll('#map [type="water"]');

  waterCells.forEach((cell) => {
    let inputString = cell.getAttribute("value");
    let numericValues = inputString.match(/\d+/g);

    const i = parseInt(numericValues[0], 10);
    const j = parseInt(numericValues[1], 10);
    const mountainCells = document.querySelectorAll(".mountain");
    mountainCells.forEach((ele) => {
      let inputString = ele.getAttribute("value");
      let numericValues = inputString.match(/\d+/g);

      const intValue_i = parseInt(numericValues[0], 10);
      const intValue_j = parseInt(numericValues[1], 10);

      if (
        cell.getAttribute("flag") === "0" &&
        ((Math.abs(i - intValue_i) === 1 && Math.abs(j - intValue_j) === 0) ||
          (Math.abs(j - intValue_j) === 1 && Math.abs(i - intValue_i) === 0))
      ) {
        point += 3;
        cell.setAttribute("flag", "1");
      }
    });
  });

  extrapoints[5] += point;

  waterCells.forEach((cell) => {
    cell.setAttribute("flag", "0");
  });

  console.log("magiciansValley :", point, extrapoints[5]);
  return point;
}

// function 10
function emptySite() {
  const townCells = document.querySelectorAll(`#map [type="town"]`);
  const emptyCells = document.querySelectorAll(`#map [type="empty"]`);
  point = 0;
  townCells.forEach((ele) => {
    let inputString = ele.getAttribute("value");
    let numericValues = inputString.match(/\d+/g);

    const intValue_i = parseInt(numericValues[0], 10);
    const intValue_j = parseInt(numericValues[1], 10);

    emptyCells.forEach((emp) => {
      inputString = emp.getAttribute("value");
      numericValues = inputString.match(/\d+/g);

      const i = parseInt(numericValues[0], 10);
      const j = parseInt(numericValues[1], 10);
      if (
        emp.getAttribute("flag") === "0" &&
        ((Math.abs(i - intValue_i) === 1 && Math.abs(j - intValue_j) === 0) ||
          (Math.abs(j - intValue_j) === 1 && Math.abs(i - intValue_i) === 0))
      ) {
        point += 2;
        emp.setAttribute("flag", "1");
      }
    });
  });

  extrapoints[2] = point;

  console.log("emptySite :", point, extrapoints[2]);

  return point;
}

// function 11
function sleepyValley() {
  point = 0;
  rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    let count = 0;
    row.childNodes.forEach((cell) => {
      if (cell.getAttribute("type") === "forest") count++;
    });

    if (count === 3) {
      point += 4;
    }
  });

  console.log("sleepyValley :", point);

  return point;
}

// function 12
function borderlands() {
  point = 0;
  rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    flag = true;
    row.childNodes.forEach((cell) => {
      if (cell.getAttribute("type") === "empty") flag = false;
    });

    if (flag) {
      point += 6;
    }
  });

  flag = true;

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      cell = table.rows[i].cells[j];
      type = cell.getAttribute("type");

      if (type === "empty") {
        flag = false;
        break;
      }
    }
    if (flag) {
      point += 6;
    }
    flag = true;
  }

  console.log("borderlands :", point);

  return point;
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let eleMatrix;

function rotateAndTrim(mtx) {
  let arr = [];
  let trimAndRotatedshape = [];

  let flag;
  mtx.map((ele) => {
    flag = false;
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === 1) flag = true;
    }
    if (flag) arr.push(ele);
  });

  let row = arr.length;
  let col = arr[0].length;

  let arr2;
  for (let i = 0; i < col; i++) {
    arr2 = [];
    for (let j = 0; j < row; j++) {
      arr2.push(0);
    }
    trimAndRotatedshape.push(arr2);
  }
  // arr = mtx;

  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      trimAndRotatedshape[k++][i] = arr[i][j];
    }
    k = 0;
  }

  return trimAndRotatedshape;
}

const color = {
  water: "blue",
  forest: "green",
  farm: "yellow",
  town: "grey",
};

let count = 0;

function countElements() {
  curEle.map((row) =>
    row.map((ele) => {
      if (ele === 1) count++;
    })
  );
}

function getShape(sh2D) {
  shapes.innerHTML = "";

  const obj = elements[index];
  const table = document.createElement("table");
  table.classList.add("shapedTable");

  let i = 0;

  let smallTable = document.createElement("div");
  table.setAttribute("draggable", "true");

  sh2D.map((row) => {
    let j = 0;

    const tr = document.createElement("tr");
    // cell.setAttribute("value", `${i}, ${j++}`);

    row.map((ele) => {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.setAttribute("value", `${i}, ${j++}`);

      if (ele === 1) {
        td.setAttribute("flag", `1`);
        const col = obj.type;
        td.style.backgroundColor = color[col];
        td.style.border = "1px solid black";
        td.classList.add("cell");
        // td.setAttribute("value", "1");
        td.setAttribute("type", `${obj.type}`);
      } else {
        td.style.backgroundColor = `rbga(0, 0, 0, 0)`;
        td.setAttribute("flag", `0`);
      }
      // else td.setAttribute("value", "0");
      table.appendChild(tr);
    });
    i++;
  });

  shapes.appendChild(table);
}

getShape(curEle);

let trackOriginalshape = elements[index].shape;

function rotateShape() {
  trackOriginalshape = [];
  curEle = rotateAndTrim(curEle);
  getShape(curEle);

  curEle.map((row) => {
    // console.log(row);
    for (let i = row.length - 1; i < 3; i++) {
      if (row.length < 3) {
        if (elements[index].rotation === 0) row.push(0);
        else row.unshift(0);
      }
    }
    trackOriginalshape.push(row);
  });
  changeDrag();

  elements[index].rotation++;
}

function flipShape(e) {
  curEle = currentElement(curEle.reverse());
  const flipedShape = curEle;
  getShape(flipedShape);

  trackOriginalshape = flipedShape;

  console.log(trackOriginalshape, flipedShape, curEle);
  changeDrag();
}

function nextShape() {
  if (index === elements.length - 1) index = -1;

  curEle = currentElement(elements[++index].shape);
  getShape(curEle);

  trackOriginalshape = elements[index].shape;
  count = 0;
  countElements();
}

function prevShape(e) {
  if (index === 0) index = elements.length;

  curEle = currentElement(elements[--index].shape);
  getShape(curEle);

  trackOriginalshape = elements[index].shape;
  count = 0;
  countElements();
}

flip.addEventListener("click", flipShape);

nextBtn.addEventListener("click", nextShape);

prevBtn.addEventListener("click", prevShape);

rotate.addEventListener("click", rotateShape);

function checkShape(tb1, tb2) {
  //   console.log(tb1);
  for (let i = 0; i < tb1.length; i++) {
    for (let j = 0; j < tb1[i].length; j++) {
      if (tb1[i][j] !== tb2[i][j]) {
        return false;
      }
    }
  }

  return true;
}

count = 0;
countElements();

const highlightedCell = document.querySelector(".highlightedCell");

function changeCSSRule(ruleName, property, value) {
  var stylesheets = document.styleSheets;
  var ruleExists = false;

  for (var i = 0; i < stylesheets.length; i++) {
    var stylesheet = stylesheets[i];
    for (var j = 0; j < stylesheet.cssRules.length; j++) {
      var rule = stylesheet.cssRules[j];
      if (rule.selectorText === ruleName) {
        rule.style[property] = value;
        ruleExists = true;
        break;
      }
    }
    if (ruleExists) break;
  }

  if (!ruleExists) {
    // If the rule doesn't exist, add it to the first stylesheet
    const stylesheet = document.styleSheets[0];
    if (stylesheet) {
      stylesheet.insertRule(
        ruleName + " { " + property + ": " + value + "; }",
        stylesheet.cssRules.length
      );
    }
  }
}

function set_Attribute(tb, arrI, arrJ, minI, minJ) {
  //   console.log(arrI);
  //   console.log(arrJ);
  for (let i = 0; i < arrI.length; i++) {
    // console.log();
    if (arrI[i] - minI < 3 && arrJ[i] - minJ < 3)
      tb[arrI[i] - minI][arrJ[i] - minJ] = 1;
    // console.log([arrI[i] - minI], [arrJ[i] - minJ]);
  }

  //   return tb;
}

let maxI = 0;
let minI = 12;

let maxJ = 0;
let minJ = 12;

let arrI = [];
let arrJ = [];

let forBkColor = 0;
let points = 0;

let type_1_Methods = [
  edgeOfTheForest,
  sleepyValley,
  wateringPotatoes,
  borderlands,
];
let type_2_Methods = [
  wealthyTown,
  magiciansValley,
  oddNumberedSilos,
  richCountrySide,
];
let type_3_Methods = [treeLine, emptySite, terracedHouse, wateringCanal];

// when Missions are rendomly selected we use given code rather than above
// selectedmissions.map((ele) => {
//   if (
//     ele === edgeOfTheForest ||
//     ele === sleepyValley ||
//     ele === wateringPotatoes ||
//     ele === magiciansValley
//   )
//     type_1_Methods.push(ele);
//   else if (
//     ele === treeLine ||
//     ele === emptySite ||
//     ele === terracedHouse ||
//     // ele === sleepyValley ||
//     // ele === wateringPotatoes ||
//     ele === wateringCanal
//   )
//     type_3_Methods.push(ele);
//   else type_2_Methods.push(ele);
// });

console.log(type_1_Methods);
console.log(type_2_Methods);
console.log(type_3_Methods);

let resultOfmethod1 = 0;
let resultOfmethod2 = 0;
let resultOfmethod3 = 0;
let resultOfmethod4 = 0;

let oldResultOfmethod1 = 0;
let oldResultOfmethod2 = 0;
let oldResultOfmethod3 = 0;
let oldResultOfmethod4 = 0;

let pointsForSpring = 0;
let pointsForWinter = 0;
let pointsForAutumn = 0;
let pointsForSummer = 0;
let currPoints = 0;

function countPoints() {
  currPoints = 0;
  type_2_Methods.map((ele, i) => {
    switch (i) {
      case 0:
        resultOfmethod1 = ele();
        currPoints += resultOfmethod1 - oldResultOfmethod1;
        oldResultOfmethod1 = resultOfmethod1;
        console.log(
          "resultOfmethod1 :: ",
          currPoints,
          resultOfmethod1,
          oldResultOfmethod1
        );
        break;

      case 1:
        resultOfmethod2 = ele();
        currPoints += resultOfmethod2 - oldResultOfmethod2;
        oldResultOfmethod2 = resultOfmethod2;
        console.log(
          "resultOfmethod2 :: ",
          currPoints,
          resultOfmethod2,
          oldResultOfmethod2
        );
        break;

      case 2:
        resultOfmethod3 = ele();
        currPoints += resultOfmethod3 - oldResultOfmethod3;
        oldResultOfmethod3 = resultOfmethod3;
        console.log(
          "resultOfmethod3 :: ",
          currPoints,
          resultOfmethod3,
          oldResultOfmethod3
        );
        break;

      case 3:
        resultOfmethod4 = ele();
        currPoints += resultOfmethod4 - oldResultOfmethod4;
        console.log(
          "resultOfmethod4 :: ",
          currPoints,
          resultOfmethod4,
          oldResultOfmethod4
        );
        oldResultOfmethod4 = resultOfmethod4;
        break;
    }
  });

  // console.log(points, currPoints);

  points += currPoints;
}

const score1 = document.querySelector(".score1 div span");
const score2 = document.querySelector(".score2 div span");
const score3 = document.querySelector(".score3 div span");
const score4 = document.querySelector(".score4 div span");
const total = document.querySelector(".totalPoints h3 .points");

let forSV = 0;
let forBL = 0;
let forEOTF = 0;
let forWP = 0;

let basicpoints = [0, 0, 0, 0]; // all points will be in sequance of the above array ... missions basic....
// basicpoints = [edgeOfTheForest, sleepyValley, wateringPotatoes, borderlands]

let extrapoints = [0, 0, 0, 0, 0, 0, 0, 0]; // all points will be in sequance of the above array ... missions extra....
// extrapoints = [treeLine, wateringCanal, emptySite, terracedHouse, wealthyTown, magiciansValley, oddNumberedSilos, richCountrySide]

const seasonText = document.querySelector(".seasonText");
const elementNumber = document.querySelector(".ELementNumber");

let myArray = [];

// *********************************************************************************
// *********************************************************************************
// *********************************************************************************
// *********************************************************************************
// *********************************************************************************

mapGrid.addEventListener("click", function (e) {
  e.preventDefault();

  if (playing) {
    const element = e.target.closest(".cell");

    if (!element) return;

    // console.log(!e.target.getAttribute("class").match("highlightedCell"));

    if (e.target.getAttribute("class").match("highlightedCell")) {
      let inputString = e.target.getAttribute("value");
      let numericValues = inputString.match(/\d+/g);
      const intValue_i = parseInt(numericValues[0], 10);
      const intValue_j = parseInt(numericValues[1], 10);
      let arr = [intValue_i, intValue_j];
      let index = myArray.findIndex(
        (element) => element[0] === arr[0] && element[1] === arr[1]
      );
      let arr1 = arrI.slice(0, index);
      let arr2 = arrI.slice(index + 1);

      myArray = [...myArray.slice(0, index), ...myArray.slice(index + 1)];
      arrI = [...arr1, ...arr2];

      arr1 = arrJ.slice(0, index);
      arr2 = arrJ.slice(index + 1);
      arrJ = [...arr1, ...arr2];
      selectedCells--;

      e.target.classList.remove("highlightedCell");
      e.target.removeAttribute("unitTime");
      e.target.classList.remove(`backgroundColor${forBkColor}`);
      return;
    }

    let inputString = e.target.getAttribute("value");
    let numericValues = inputString.match(/\d+/g);

    e.target.classList.add("highlightedCell");
    e.target.setAttribute("unitTime", `${unitTime + elements[index].time}`);
    if (numericValues && numericValues.length >= 2) {
      const intValue_i = parseInt(numericValues[0], 10);
      const intValue_j = parseInt(numericValues[1], 10);

      if (e.target.getAttribute("type") !== "empty") {
        selectedCells = 0;
        points = 0;

        changeCSSRule(".highlightedCell", "border", "3px solid red");

        setTimeout(function () {
          if (true) {
            const hlr = document.querySelectorAll(".highlightedCell");
            hlr.forEach((element) => {
              element.classList.remove("highlightedCell");
              element.removeAttribute("unitTime");
              changeCSSRule(".highlightedCell", "border", "none");
            });
          }
        }, 500);

        const bkc = document.querySelectorAll(`.backgroundColor${forBkColor}`);

        bkc.forEach((element) => {
          element.classList.remove(`backgroundColor${forBkColor}`);
        });

        return;
      }

      // type_1_Methods.map((ele) => {
      //   ele(elements[index].type, intValue_i, intValue_j);
      // });

      let arr = [intValue_i, intValue_j];
      myArray.push(arr);
      arrI.push(intValue_i);
      arrJ.push(intValue_j);
    }

    e.target.classList.add(`backgroundColor${forBkColor}`);

    selectedCells++;

    changeCSSRule(".highlightedCell", "border", "3px solid green");

    if (count === selectedCells) {
      let tb = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      // console.log(arrI);

      let arrMinI = Array.from(arrI);
      let arrMinJ = Array.from(arrJ);

      arrMinI = arrMinI.sort((a, b) => a - b);
      arrMinJ = arrMinJ.sort((a, b) => a - b);
      minI = arrMinI[0];
      minJ = arrMinJ[0];

      set_Attribute(tb, arrI, arrJ, minI, minJ);

      trackOriginalshape = currentElement(trackOriginalshape);

      if (!checkShape(trackOriginalshape, tb)) {
        myArray = [];
        arrI = [];
        arrJ = [];
        selectedCells = 0;
        points = 0;

        changeCSSRule(".highlightedCell", "border", "3px solid red");

        setTimeout(function () {
          if (true) {
            const hlr = document.querySelectorAll(".highlightedCell");
            hlr.forEach((element) => {
              element.classList.remove("highlightedCell");
              element.removeAttribute("unitTime");
            });
            changeCSSRule(".highlightedCell", "border", "none");
          }
        }, 500);

        const bkc = document.querySelectorAll(`.backgroundColor${forBkColor}`);

        bkc.forEach((element) => {
          element.classList.remove(`backgroundColor${forBkColor}`);
        });
      } else {
        // let type = elements[index].type;
        const hlr = document.querySelectorAll(".highlightedCell");

        hlr.forEach((element) => {
          element.style.backgroundImage = `url('./tiles/${elements[index].type}_tile.png')`;
          element.classList.remove("highlightedCell");
        });

        const uniqueColor = document.querySelectorAll(
          `.backgroundColor${forBkColor}`
        );

        uniqueColor.forEach((ele) => {
          ele.setAttribute("type", elements[index].type);
        });

        myArray = [];
        arrI = [];
        arrJ = [];
        minI = 12;
        minJ = 12;
        maxI = 0;
        maxJ = 0;
        selectedCells = 0;

        const col = elements[index].type;
        changeCSSRule(
          `.backgroundColor${forBkColor}`,
          "background-color",
          color[col]
        );

        calcPoints();
        forBkColor++;
      }
    }
  }
});

const bm1 = document.querySelector(".basicMission1");
const bm2 = document.querySelector(".basicMission2");
const bm3 = document.querySelector(".basicMission3");
const bm4 = document.querySelector(".basicMission4");
// console.log("bm1 : ", bm1);

function calcPoints() {
  unitTime += elements[index].time;
  nextShape(index);
  changeDrag();

  if (unitTime <= 7) {
    seasonText.innerHTML = "Spring (AB)";
    elementNumber.innerHTML = `${unitTime}/7`;
    if (unitTime === 6 || unitTime == 7) {
      if (unitTime === 6 && elements[index].time === 1) {
      } else {
        countPoints();
        forEOTF = type_1_Methods[0]();
        basicpoints[0] = forEOTF;

        forSV = type_1_Methods[1]();
        basicpoints[1] = forSV;

        points += forEOTF + forSV;
        score1.innerHTML = +score1.innerHTML + points;
      }
    }
    bm1.classList.add("highlightMissions");
    bm2.classList.add("highlightMissions");
  } else if (unitTime > 7 && unitTime <= 14) {
    body.style.backgroundImage = `url("./backgroundImages/${scoreArr[0]}.gif")`;
    // body.style.color = "#000";
    seasonText.innerHTML = "Summer (BC)";
    elementNumber.innerHTML = `${unitTime}/14`;
    // console.log(elementNumber.innerHTML);
    if (unitTime == 14 || unitTime === 13) {
      // basicpoints[1] = type_1_Methods[1]();
      if (unitTime === 13 && elements[index].time === 1) {
      } else {
        countPoints();
        forSV = type_1_Methods[1]();
        basicpoints[1] += forSV;

        forWP = type_1_Methods[2]();
        basicpoints[2] = forWP;

        points += forSV + forWP;
        score2.innerHTML = +score2.innerHTML + points;
      }
    }
    // score1.innerHTML = +score1.innerHTML + points;
    // console.log("+score1.innerHTML : ", +score1.innerHTML);
    bm1.classList.remove("highlightMissions");
    bm3.classList.add("highlightMissions");
  } else if (unitTime > 14 && unitTime <= 21) {
    body.style.backgroundImage = `url("./backgroundImages/${scoreArr[2]}.gif")`;
    // main.style.color = "#fff";
    seasonText.innerHTML = "Autumn (CD)";
    elementNumber.innerHTML = `${unitTime}/21`;
    if (unitTime == 21 || unitTime === 20) {
      if (unitTime === 20 && elements[index].time === 1) {
      } else {
        countPoints();
        forWP = type_1_Methods[2]();
        basicpoints[2] += forWP;

        forBL = type_1_Methods[3]();
        basicpoints[3] = forBL;

        points += forWP + forBL;
        score3.innerHTML = +score3.innerHTML + points;
      }
    }

    bm2.classList.remove("highlightMissions");
    bm4.classList.add("highlightMissions");
  } else {
    body.style.backgroundImage = `url("./backgroundImages/${scoreArr[3]}.gif")`;
    // main.style.color = "#fff";
    seasonText.innerHTML = "Winter (DA)";
    elementNumber.innerHTML = `${unitTime}/28`;
    if (unitTime >= 28) {
      countPoints();
      forWP = type_1_Methods[3]();
      basicpoints[3] += forWP;

      forEOTF = type_1_Methods[0]();
      basicpoints[0] += forEOTF;
      points += forBL + forEOTF;

      type_3_Methods.map((ele) => {
        points += ele();
      });

      score4.innerHTML = +score4.innerHTML + points;
    }

    bm3.classList.remove("highlightMissions");
    bm4.classList.add("highlightMissions");
    bm1.classList.add("highlightMissions");
  }

  total.innerHTML = +total.innerHTML + points;
  points = 0;

  if (unitTime >= 28) {
    bm1.classList.remove("highlightMissions");
    bm4.classList.remove("highlightMissions");

    // StoreDatalocalStorage(+total.innerHTML);
    setLocalStorage(+total.innerHTML);
    endMassage();
    playing = false;
    // resetMap(); // add it to an eventListner...
    return;
  }
}

function stopRotation() {
  clearInterval(intervalID);
}

elementBox.appendChild(shapes);

var intervalID = setInterval(function () {
  rotateShape();
}, 1500);

function endMassage() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  setInterval(function () {
    rotateShape();
  }, 1500);

  eotf.innerHTML = basicpoints[0];
  sv.innerHTML = basicpoints[1];
  wp.innerHTML = basicpoints[2];
  bl.innerHTML = basicpoints[3];

  //extrapoints = [treeLine, wateringCanal, emptySite, terracedHouse, wealthyTown, magiciansValley, oddNumberedSilos, richCountrySide]

  tl.innerHTML = extrapoints[0];
  wc.innerHTML = extrapoints[1];
  es.innerHTML = extrapoints[2];
  th.innerHTML = extrapoints[3];
  wt.innerHTML = extrapoints[4];
  mv.innerHTML = extrapoints[5];
  ons.innerHTML = extrapoints[6];
  rcs.innerHTML = extrapoints[7];

  lastGamePoints.innerHTML = lstGPoints;
  higestGamePoints.innerHTML = hstGPoints;
  currentGamePoints.innerHTML = +total.innerHTML;
}

// function StoreDatalocalStorage(score) {}

function setLocalStorage(score) {
  localStorage.setItem(
    /* key :*/ "lastScore",
    /* value in string :*/ JSON.stringify(score)
  );

  const maxScore = JSON.parse(localStorage.getItem("highgestScore"));
  console.log(maxScore);

  if (!maxScore) {
    localStorage.setItem("highgestScore", JSON.stringify(score));
    hstGPoints = maxScore;
    return;
  } else if (maxScore < score) {
    localStorage.setItem("highgestScore", JSON.stringify(score));
    hstGPoints = score;
  }
}

function resetLocalStorage() {
  localStorage.removeItem("highgestScore");
  localStorage.removeItem("lastScore");
}

function resetMap() {
  location.reload();
  // e.preventDefault();

  // flag = false;
  // playing = true;

  // total.innerHTML = 0;
  // score1.innerHTML = 0;
  // score2.innerHTML = 0;
  // score3.innerHTML = 0;
  // score4.innerHTML = 0;
  // mission.innerHTML = "";
  // Maintable.innerHTML = "";
  // div1.innerHTML = "";
  // div2.innerHTML = "";

  // maxI = 0;
  // maxJ = 0;
  // minI = 12;
  // minJ = 12;

  // cnt = 0;
  // point = 0;
  // points = 0;
  // forBkColor = 0;

  // arrI = [];
  // arrJ = [];
  // myArray = [];
  // mountains = [];
  // type_1_Methods = [];
  // type_2_Methods = [];
  // type_3_Methods = [];
  // selectedmissions = [];

  // basicpoints = [0, 0, 0, 0];
  // extrapoints = [0, 0, 0, 0, 0, 0, 0, 0];

  // resultOfmethod1 = 0;
  // resultOfmethod2 = 0;
  // resultOfmethod3 = 0;
  // resultOfmethod4 = 0;

  // oldResultOfmethod1 = 0;
  // oldResultOfmethod2 = 0;
  // oldResultOfmethod3 = 0;
  // oldResultOfmethod4 = 0;

  // pointsForSpring = 0;
  // pointsForWinter = 0;
  // pointsForAutumn = 0;
  // pointsForSummer = 0;
  // currPoints = 0;
  // lstGPoints = 0;
  // hstGPoints = 0;

  // count = 0;
  // unitTime = 0;
  // selectedCells = 0;
  // index = Math.floor(Math.random() * elements.length - 1) + 1;
  // // nextShape();
  // curEle = currentElement(elements[index].shape);
  // trackOriginalshape = currentElement(curEle);
  // getShape(curEle);

  // overlay.classList.add("hidden");
  // modal.classList.add("hidden");

  // setTable();
  // setMountains();
  // countElements();
  // getLocalStorage();
  // setMountainsOnMap();
  // randomMissions(missions["basic"]);
  // table = document.querySelector("#map table");
  // row = table.rows.length;
  // col = table.rows[0].cells.length;
  // body.style.backgroundImage = `url("./backgroundImages/theme.png")`;
  // // main.style.color = "#fff";
  // seasonText.innerHTML = "---";
  // elementNumber.innerHTML = `${unitTime}/7`;
}

reset.addEventListener("click", resetMap);
quit.addEventListener("click", function (e) {
  e.preventDefault();

  window.close();
});

//Event Listners to handle drag and drop
let largeTable = document.querySelector("#map table");
let ind = 0;
let ind2 = 0;
let smallTable = document.querySelector(".shapedTable");

function changeDrag() {
  smallTable = document.querySelector(".shapedTable");
}

// Function to handle the drag start event for the small Table
function handleDragStart(e) {
  if (!e.target.closest(".shapedTable")) return;
  // console.log(e.target.style);
  e.dataTransfer.setData(`text`, `smallTable`);
}

function cellOnClicked(e) {
  if (!e.target.closest(".cell")) return;

  let inputString = e.target.getAttribute("value");
  let numericValues = inputString.match(/\d+/g);

  ind = parseInt(numericValues[0], 10);
  ind2 = parseInt(numericValues[1], 10);

  const hlr = document.querySelectorAll(".highlightedCell");

  hlr.forEach((element) => {
    console.log(element);
    element.classList.remove(`backgroundColor${forBkColor}`);
    element.classList.remove("highlightedCell");
  });

  selectedCells = 0;
  // ind = e.target.getAttribute("value");
  // console.log(ind, ind2);
}

// Function to handle the drag over event for the large grid
function handleDragOver(e) {
  // e.target.style.background = "none";
  // console.log(e);
  e.preventDefault();
}

let cellType;
let cellBC;
// Function to handle the drop event for the large grid
function handleDrop(e) {
  if (playing) {
    let oldJ = 0;
    let newJ = 0;
    let flag = true;
    e.preventDefault();
    const data = e.dataTransfer.getData(`text`);
    // console.log("sub tek", data);
    if (data === `smallTable`) {
      // console.log("Kia hoa");
      const targetCell = e.target.closest(".cell");
      // const targetCell = e.target.closest(".shapedTable");
      // console.log(data);
      if (targetCell) {
        const smallTableCells = smallTable.querySelectorAll(".shapedTable td");

        let targetIndex = targetCell.getAttribute("value");
        // let inputString = smallTableCells[i].getAttribute("value");
        let numericValues = targetIndex.match(/\d+/g);

        let ii = parseInt(numericValues[0], 10);
        let jj = parseInt(numericValues[1], 10);

        ii = ii - ind - 1;
        jj = jj - ind2 - 1;

        targetIndex = jj + ii * 11;

        // console.log("ti ", targetCell, targetIndex, ii, ind, jj, ind2);

        const largeTableCells = largeTable.querySelectorAll(".cell");
        // console.log(largeTableCells);
        let k = 0;
        let j = 0;

        // console.log(smallTableCells.length);

        // ind = +smallGridCells[i].getAttribute("value");
        for (let i = 0; i < smallTableCells.length; i++) {
          let inputString = smallTableCells[i].getAttribute("value");
          let numericValues = inputString.match(/\d+/g);
          ind = parseInt(numericValues[0], 10);
          ind2 = parseInt(numericValues[1], 10);
          if (k === ind) {
            k++;
            j = 0;
          }

          let target;
          // targetIndex = jj + 10 * ii;
          if (targetIndex + j + 11 * ind < 121) {
            // if (ii - 1 + (jj - 1) * 10 < 121) {
            target = largeTableCells[targetIndex + j + 11 * ind];
            // target = largeTable.row[ii].col[jj - 1];
            // console.log(target);
            inputString = target.getAttribute("value");
            numericValues = inputString.match(/\d+/g);
            ind = parseInt(numericValues[0], 10);
            ind2 = parseInt(numericValues[1], 10);
          }

          // console.log(
          //   "LT at",
          //   targetIndex + j + 11 * ind,
          //   largeTableCells[targetIndex + j + 11 * ind]
          // );

          j++;
          // console.log(
          //   "flag at : ",
          //   smallTableCells[i].getAttribute("flag"),
          //   smallTableCells[i]
          // );

          if (smallTableCells[i].getAttribute("flag") === "1") {
            cellType = smallTableCells[i].getAttribute("type");
            cellBC = smallTableCells[i].style.backgroundColor;
            if (oldJ === 0) oldJ = ind2;
            newJ = ind2;

            if (target) target.classList.add("hlCell");
            if (
              !target ||
              target.getAttribute("type") !== "empty" ||
              Math.abs(oldJ - newJ) > 3
            ) {
              flag = false;
              // console.log(target.getAttribute("value"), oldJ - newJ);
            }

            oldJ = newJ;
          }
        }
        k = 0;
        j = 0;
        // console.log("flag : ", flag);
        if (flag) {
          const hlcells = document.querySelectorAll(".hlCell");
          // for (let i = 0; i < smallTableCells.length; i++) {
          //   let inputString = smallTableCells[i].getAttribute("value");
          //   let numericValues = inputString.match(/\d+/g);

          //   ind = parseInt(numericValues[0], 10);
          //   ind2 = parseInt(numericValues[1], 10);
          //   if (k === ind) {
          //     k++;
          //     j = 0;
          //   }

          // const target = largeTableCells[targetIndex + j + 11 * ind];
          // j++;

          hlcells.forEach((ele) => {
            // console.log("ele : ", ele);
            // target.innerHTML = smallTableCells[i].innerHTML;
            ele.style.backgroundImage = `url('./tiles/${elements[index].type}_tile.png')`;
            ele.style.backgroundColor = cellBC;
            ele.setAttribute("type", cellType);
          });

          // if (smallTableCells[i].getAttribute("flag") === "1") {
          //   target.innerHTML = smallTableCells[i].innerHTML;
          //   target.style.backgroundImage = `url('./tiles/${elements[index].type}_tile.png')`;
          //   target.style.backgroundColor =
          //     smallTableCells[i].style.backgroundColor;
          //   target.setAttribute(
          //     "type",
          //     smallTableCells[i].getAttribute("type")
          //   );
          // }
          // }

          // index++;
          // if (index === elements.length) index = 0;
          // curEle = currentElement(elements[index].shape);
          smallTable.classList.remove("shapedTable");
          // getShape(curEle);
          calcPoints();
          // changeDrag();
        } else {
          changeCSSRule(".hlCell", "border", "2px solid red");
        }

        setTimeout(function () {
          if (true) {
            const HLedCells = document.querySelectorAll(".hlCell");
            HLedCells.forEach((cell) => {
              cell.classList.remove("hlCell");
              changeCSSRule(".hlCell", "border", "none");
            });
          }
        }, 1000);
      }
    }
  }
}
// Attach dragstart event listener to the small grid
// smallGrid.addEventListener("dragstart", handleDragStart);
shapes.addEventListener("dragstart", handleDragStart);
shapes.addEventListener("mousedown", cellOnClicked);

console.log("lt :: ", largeTable);
// Attach dragover event listener to the large grid
largeTable.addEventListener("dragover", handleDragOver);

// Attach drop event listener to the large grid
largeTable.addEventListener("drop", handleDrop);
