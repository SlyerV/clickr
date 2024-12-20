// SFX
const sfxClick = new Audio("clicksfx.mp3");
const sfxLevelUp = new Audio("levelupsfx.mp3");
const sfxReset = new Audio("resetsfx.mp3");
// MAN UPGRADES
const finger = {
  id: "finger",
  name: "Extra Finger 👉",
  emoji: "👉 ",
  cost: 10,
  incr: 1,
  inf: 2,
  show: 0,
  num: 0
};
const hand = {
  id: "hand",
  name: "Helping Hand 🤝",
  emoji: "🤝 ",
  cost: 100,
  incr: 3,
  inf: 1.5,
  show: 50,
  num: 0
};

// AUTO UPGRADES
const worker = {
  id: "worker",
  name: "Worker 👷",
  emoji: "👷 ",
  cost: 150,
  incr: 1,
  inf: 1.25,
  show: 125,
  num: 0
};
// THE LIST
let allUpgrades = [finger, hand, worker];
let mUpgrades = [finger, hand];
let aUpgrades = [worker];
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
let mmChanged = false;
let aaChanged = false;
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
  aStart = Boolean(localStorage.getItem('aStart') === 'true');
}
if (localStorage.getItem("mmStart") != null) {
  mmStart = Boolean(localStorage.getItem('mmStart') === 'true');
}
if (localStorage.getItem("aaStart") != null) {
  aaStart = Boolean(localStorage.getItem('aaStart') === 'true');
}
if (localStorage.getItem("aaIncr") != null) {
  aaIncr = Number(localStorage.getItem("aaIncr"));
}
if (localStorage.getItem("mmIncr") != null) {
  mmIncr = Number(localStorage.getItem("mmIncr"));
}
if (localStorage.getItem("cFinger") != null) {
  finger.cost = Number(localStorage.getItem('cFinger'));
}
if (localStorage.getItem("cHand") != null) {
  hand.cost = Number(localStorage.getItem('cHand'));
}
if (localStorage.getItem("cWorker") != null) {
  worker.cost = Number(localStorage.getItem('cWorker'));
}
if (localStorage.getItem("sFinger") != null) {
  finger.show = Number(localStorage.getItem('sFinger'));
}
if (localStorage.getItem("sHand") != null) {
  hand.show = Number(localStorage.getItem('sHand'));
}
if (localStorage.getItem("sWorker") != null) {
  worker.show = Number(localStorage.getItem('sWorker'));
}
if (localStorage.getItem("fingers") != null) {
  finger.num = Number(localStorage.getItem('fingers'));
}
if (localStorage.getItem("hands") != null) {
  hand.num = Number(localStorage.getItem('hands'));
}
if (localStorage.getItem("workers") != null) {
  worker.num = Number(localStorage.getItem('workers'));
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

// FUNCTIONS
function update() {
  try {
    document.getElementById("clicks").innerHTML = "Clicks: "+clicks
    document.getElementById("mult").innerHTML = "Multiplier: x"+mIncr
    document.getElementById("cps").innerHTML = "CPS: "+aIncr
    mUpgrades.forEach(up => {
      if ((clicks >= up.show) & (up.show != 0)) {
        document.getElementById(up.id).style.display = "inline-block";
        up.show = 0
      } else if (clicks < up.show) {
        document.getElementById(up.id).style.visibility = "hidden";
      }
      document.getElementById(up.id).innerHTML = `${up.name} (Cost: ${up.cost}, +${up.incr}x Multiplier)`;
      document.getElementById((up.id+"s")).innerHTML = up.emoji.repeat(up.num)
    });
    aUpgrades.forEach(up => {
      if ((clicks >= up.show) & (up.show != 0)) {
        document.getElementById(up.id).style.display = "inline-block";
        up.show = 0
      } else if (clicks < up.show) {
        document.getElementById(up.id).style.visibility = "hidden";
      }
      document.getElementById(up.id).innerHTML = `${up.name} (Cost: ${up.cost}, +${up.incr} CPS)`;
      document.getElementById((up.id+"s")).innerHTML = up.emoji.repeat(up.num)
    });
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('aIncr', aIncr);
    localStorage.setItem('mIncr',mIncr)
    localStorage.setItem('aStart',aStart)
    localStorage.setItem('mmStart',mmStart)
    localStorage.setItem('aaStart',aaStart)
    localStorage.setItem('aaIncr', aaIncr)
    localStorage.setItem('mmIncr',mmIncr)
    localStorage.setItem('cFinger',finger.cost)
    localStorage.setItem('cHand',hand.cost)
    localStorage.setItem('cWorker',worker.cost)
    localStorage.setItem('sFinger',finger.show)
    localStorage.setItem('sHand',hand.show)
    localStorage.setItem('sWorker',worker.show)
    localStorage.setItem('fingers',finger.num)
    localStorage.setItem('hands',hand.num)
    localStorage.setItem('workers',worker.num)
    allUpgrades = [finger, hand, worker]
    mUpgrades = [finger, hand]
    aUpgrades = [worker]
  } catch (err) {
    alert(err)
  }
}
function initupdate() {
  // alert("e")
  document.getElementById("clicks").innerHTML = "Clicks: "+clicks
  document.getElementById("mult").innerHTML = "Multiplier: x"+mIncr
  document.getElementById("cps").innerHTML = "CPS: "+aIncr
  mUpgrades.forEach(up => {
    if ((clicks >= up.show) & (up.show != 0)) {
      document.getElementById(up.id).style.display = "inline-block";
      up.show = 0
    } else if (clicks < up.show) {
      document.getElementById(up.id).style.visibility = "hidden";
    }
    document.getElementById(up.id).innerHTML = `${up.name} (Cost: ${up.cost}, +${up.incr}x Multiplier)`;
    document.getElementById((up.id+"s")).innerHTML = up.emoji.repeat(up.num)
  });
  aUpgrades.forEach(up => {
    if ((clicks >= up.show) & (up.show != 0)) {
      document.getElementById(up.id).style.display = "inline-block";
      up.show = 0
    } else if (clicks < up.show) {
      document.getElementById(up.id).style.visibility = "hidden";
    }
    document.getElementById(up.id).innerHTML = `${up.name} (Cost: ${up.cost}, +${up.incr} CPS)`;
    document.getElementById((up.id+"s")).innerHTML = up.emoji.repeat(up.num)
  });
  localStorage.setItem('clicks', clicks);
  localStorage.setItem('aIncr', aIncr);
  localStorage.setItem('mIncr',mIncr)
  localStorage.setItem('aStart',aStart)
  localStorage.setItem('mmStart',mmStart)
  localStorage.setItem('aaStart',aaStart)
  localStorage.setItem('aaIncr', aaIncr)
  localStorage.setItem('mmIncr',mmIncr)
  localStorage.setItem('cFinger',finger.cost)
  localStorage.setItem('cHand',hand.cost)
  localStorage.setItem('cWorker',worker.cost)
  localStorage.setItem('sFinger',finger.show)
  localStorage.setItem('sHand',hand.show)
  localStorage.setItem('sWorker',worker.show)
  localStorage.setItem('fingers',finger.num)
  localStorage.setItem('hands',hand.num)
  localStorage.setItem('workers',worker.num)
  allUpgrades = [finger, hand, worker]
  mUpgrades = [finger, hand]
  aUpgrades = [worker]
  if (aStart) {
    setautoclick()
  }
  if (mmStart == true) {
    // alert(mmStart)
    document.getElementById("multup").innerHTML = "MULTIPLIER PER SECOND: BOUGHT"
    document.getElementById("multup").style.backgroundColor = "red"
    setautomult()
  }
  if (aaStart == true) {
    document.getElementById("cpsup").innerHTML = "CPS PER SECOND: BOUGHT"
    document.getElementById("cpsup").style.backgroundColor = "red"
    setautocps()
  }
}
function click() {
  clicks = clicks+aIncr
  update()
}
function mult() {
  mIncr = mIncr+mmIncr
  update()
}
function cps() {
  aIncr = aIncr+aaIncr
  update()
}
async function setautoclick() {
  setInterval(click,1000)
}
async function setautomult() {
  setInterval(mult,1000)
}
async function setautocps() {
  setInterval(cps,1000)
}
function cHover() {
  sfxClick.load()
}
function onHover(id) {
  if (document.getElementById(id).style.backgroundColor == "red") {
    document.getElementById(id).style.backgroundColor = "#FF5F5F"
    alert("SET")
  } else if (document.getElementById(id).style.backgroundColor == "seagreen"){
    document.getElementById(id).style.backgroundColor = "#00CC00"
  } else {
  }
}
function offHover(id) {
  if (document.getElementById(id).style.backgroundColor == "#00CC00") {
    document.getElementById(id).style.backgroundColor = "seagreen"
  } else if (document.getElementById(id).style.backgroundColor == "#FF5F5F") {
    alert("UNSET")
    document.getElementById(id).style.backgroundColor = "red"
  } else {
  }
}
function rOnHover() {
  document.getElementById("reset").style.backgroundColor = "#DB0000"
}
function rOffHover() {
  document.getElementById("reset").style.backgroundColor = "darkred"
}
function increase() {
  clicks = clicks+mIncr
  sfxClick.play()
  update()
}
function reset() {
  if (confirm("Are you sure you want to reset all of your progress?")) {
      sfxReset.play()
      localStorage.clear();
      clicks = 0
      mIncr = 1
      aIncr = 0
      aStart = false
      mmStart = false
      aaStart = false
      mmIncr = 0
      aaIncr = 0
      finger.cost = 10
      hand.cost = 100
      worker.cost = 150
      finger.show = 0
      hand.show = 50
      worker.show = 100
      finger.num = 0
      hand.num = 0
      worker.num = 0
      mUpgrades.forEach(up => {
          document.getElementById(up.id).innerHTML = `${up.name} (Cost: ${up.cost}, +${up.incr}x Multiplier)`;
      });
      aUpgrades.forEach(up => {
          document.getElementById(up.id).innerHTML = `${up.name} (Cost: ${up.cost}, +${up.incr} CPS)`;
      });
      document.getElementById("multup").innerHTML = "Multiplier Per Second! (Cost: 2000000, +1x per sec)"
      document.getElementById("cpsup").innerHTML = "CPS Per Second! (Cost: 5000000, +1x per sec)"
      update()
  }
}
function manbuy(clickr) {
  if ((clicks >= clickr.cost)) {
    sfxLevelUp.play()
    clicks = clicks-clickr.cost
    mIncr+=clickr.incr
    clickr.cost = Math.round(clickr.cost*clickr.inf)
    clickr.num+=1
    document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr}x Multiplier)`
    document.getElementById((clickr.id+"s")).innerHTML = clickr.emoji.repeat(clickr.num)
    // alert(clickr.num)
    update()
  }
}
function autobuy(clickr) {
  try {
      if ((clicks >= clickr.cost)) {
        sfxLevelUp.play()
        clicks = clicks-clickr.cost
        aIncr+=clickr.incr
        clickr.cost = Math.round(clickr.cost*clickr.inf)
        clickr.num+=1
        document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr} CPS)`
        document.getElementById((clickr.id+"s")).innerHTML = clickr.emoji.repeat(clickr.num)
        if (!aStart) {
          aStart = true
          setautoclick()
        }
        update()
      }
  } catch (err) {
    alert(err)
  }
}
function multbuy() {
  try {
    if ((clicks >= mmCost)) {
      sfxLevelUp.play()
      clicks = clicks-mmCost
      mmIncr=1
      document.getElementById("multup").innerHTML = "MULTIPLIER PER SECOND: BOUGHT"
      document.getElementById("multup").style.backgroundColor = "red"
      update()
      if (!mmStart) {
        mmStart = true
        setautomult()
      }
    }
  } catch (err) {
    alert(err)
  }
}
function cpsbuy() {
  try {
    if ((clicks >= aaCost)) {
      sfxLevelUp.play()
      clicks = clicks-aaCost
      aaIncr=1
      document.getElementById("cpsup").innerHTML = "CPS PER SECOND: BOUGHT"
      document.getElementById("cpsup").style.backgroundColor = "red"
      update()
      if (!aaStart) {
        aaStart = true
        setautocps()
      }
    }
  } catch (err) {
    alert(err)
  }
}
async function bgchange() {
  while (true) {
    await sleep(1)
    for (const up of allUpgrades) {
      if (clicks >= up.cost) {
        document.getElementById(up.id).style.backgroundColor = "seagreen";
      } else {
          document.getElementById(up.id).style.backgroundColor = "red";
      }
    }
    if (!(mmStart==true)) {
      if ((clicks >= mmCost) && (mmChanged == true)) {
        document.getElementById("multup").style.backgroundColor = "seagreen";
        mmChanged = false
      } else {
        if ((clicks <= mmCost) && (mmChanged == false)) {
          document.getElementById("multup").style.backgroundColor = "red";
          mmChanged = true
        }
      }
    }
    if (!(aaStart==true)) {
      if ((clicks >= aaCost) && (aaChanged == true)) {
        document.getElementById("cpsup").style.backgroundColor = "seagreen";
        aaChanged = false
      } else {
        if ((clicks <= aaCost) && (aaChanged == false)) {
          document.getElementById("cpsup").style.backgroundColor = "red";
          aaChanged = true
        }
      }
    }
  }
}
// INITIALIZATION
initupdate()
bgchange()

