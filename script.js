// SFX
const sfxClick = new Audio("clicksfx.mp3");
const sfxLevelUp = new Audio("levelupsfx.mp3");

// MAN UPGRADES
const finger = {
  id: "finger",
  name: "Extra Finger 👉",
  cost: 10,
  incr: 1,
  inf: 5
};
const hand = {
  id: "hand",
  name: "Helping Hand 🤝",
  cost: 100,
  incr: 3,
  inf: 20
};

// AUTO UPGRADES
const worker = {
  id: "worker",
  name: "Worker 👷",
  cost: 150,
  incr: 1,
  inf: 10
};
// THE LIST
let upgrades = [finger, hand, worker];

// VARIABLES
let clicks = 0;
let mIncr = 1;
let mCost = 20;
let aCost = 100;
let aIncr = 0;
let aStart = false;
let mLevel = 0;
let aLevel = 0;
let mmStart = false;
let aaStart = false;
let mmIncr = 0;
let aaIncr = 0;
let mmCost = 2000000;
let aaCost = 5000000;

if (localStorage.getItem("clicks") != null) {
  clicks = Number(localStorage.getItem("clicks"));
}
if (localStorage.getItem("aIncr") != null) {
  aIncr = Number(localStorage.getItem("aIncr"));
}
if (localStorage.getItem("mIncr") != null) {
  mIncr = Number(localStorage.getItem("mIncr"));
}
if (localStorage.getItem("aStart") != null) {
  aStart = localStorage.getItem("aStart") === "true";
}
if (localStorage.getItem("mmStart") != null) {
  mmStart = localStorage.getItem("mmStart") === "true";
}
if (localStorage.getItem("aaStart") != null) {
  aaStart = localStorage.getItem("aaStart") === "true";
}
if (localStorage.getItem("aaIncr") != null) {
  aaIncr = Number(localStorage.getItem("aaIncr"));
}
if (localStorage.getItem("mmIncr") != null) {
  mmIncr = Number(localStorage.getItem("mmIncr"));
}
if (localStorage.getItem("finger") != null) {
  finger = Number(finger.cost);
}
if (localStorage.getItem("hand") != null) {
  hand = Number(hand.cost);
}
if (localStorage.getItem("worker") != null) {
  worker = Number(worker.cost);
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// FUNCTIONS
function update() {
  try {
    document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
    document.getElementById("mult").innerHTML = "Multiplier: x" + mIncr;
    document.getElementById("cps").innerHTML = "CPS: " + aIncr;
    upgrades.forEach(clickr => {
      document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr} Multiplier)`;
    });
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("aIncr", aIncr);
    localStorage.setItem("mIncr", mIncr);
    localStorage.setItem("aStart", aStart);
    localStorage.setItem("mmStart", mmStart);
    localStorage.setItem("aaStart", aaStart);
    localStorage.setItem("aaIncr", aaIncr);
    localStorage.setItem("mmIncr", mmIncr);
    localStorage.setItem("finger", finger.cost);
    localStorage.setItem("hand", hand.cost);
    localStorage.setItem("worker", worker.cost);
  } catch (err) {
    alert(err);
  }
}

function initupdate() {
  document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
  document.getElementById("mult").innerHTML = "Multiplier: x" + mIncr;
  document.getElementById("cps").innerHTML = "CPS: " + aIncr;
  if (aStart) setautoclick();
  if (mmStart) {
    document.getElementById("multup").innerHTML = "MULTIPLIER PER SECOND: BOUGHT";
    document.getElementById("multup").style.backgroundColor = "red";
    setautomult();
  }
  if (aaStart) {
    document.getElementById("cpsup").innerHTML = "CPS PER SECOND: BOUGHT";
    document.getElementById("cpsup").style.backgroundColor = "red";
    setautocps();
  }
}

function click() {
  clicks += aIncr;
  update();
}

function mult() {
  mIncr += mmIncr;
  update();
}

function cps() {
  aIncr += aaIncr;
  update();
}

function setautoclick() {
  setInterval(click, 1000);
}

function setautomult() {
  setInterval(mult, 1000);
}

function setautocps() {
  setInterval(cps, 1000);
}

function increase() {
  clicks += mIncr;
  sfxClick.play();
  update();
}

function reset() {
  if (confirm("Are you sure you want to reset all of your progress?")) {
    clicks = 0;
    mIncr = 1;
    aIncr = 0;
    aStart = false;
    mmStart = false;
    aaStart = false;
    mmIncr = 0;
    aaIncr = 0;
    finger.cost = 10;
    hand.cost = 100;
    worker.cost = 150;
    upgrades.forEach(clickr => {
      document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr} Multiplier)`;
    });
    update();
  }
}

// Initialization
initupdate();
bgchange();
