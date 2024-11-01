// SFX
const sfxClick = new Audio("clicksfx.mp3") 
const sfxLevelUp = new Audio("levelupsfx.mp3")
// MAN UPGRADES
const finger = {
  "id":"finger",
  "name":"Extra Finger 👉",
  "cost":10,
  "incr":1,
  "inf":5
}
const hand = {
  "id":"hand",
  "name":"Helping Hand 🤝",
  "cost":100,
  "incr":3,
  "inf":20
}
// AUTO UPGRADES
const worker = {
  "id":"worker",
  "name":"Worker 👷",
  "cost":150,
  "incr":1,
  "inf":10
}
// THE LIST
let upgrades = [finger, hand, worker]
// VARIABLES
let clicks = 0
let mIncr = 1
let mCost = 20
let aCost = 100
let aIncr = 0
let aStart = false
let mChanged = false
let aChanged = false
let mLevel = 0
let aLevel = 0
let mmStart = false
let aaStart = false
let mmIncr = 0
let aaIncr = 0
let mmChanged = false
let aaChanged = false
let mmCost = 2000000
let aaCost = 5000000
if (localStorage.getItem('clicks')!=null) {
  clicks = Number(localStorage.getItem('clicks'))
}
if (localStorage.getItem('aIncr')!=null) {
  aIncr = Number(localStorage.getItem('aIncr'))
}
if (localStorage.getItem('mIncr')!=null) {
  mIncr = Number(localStorage.getItem('mIncr'))
}
if (localStorage.getItem('aStart')!=null) {
  aStart = localStorage.getItem('aStart')
}
if (localStorage.getItem('mmStart')!=null) {
  mmStart = localStorage.getItem('mmStart')
}
if (localStorage.getItem('aaStart')!=null) {
  aaStart = localStorage.getItem('aaStart')
}
if (localStorage.getItem('aaIncr')!=null) {
  aaIncr = Number(localStorage.getItem('aaIncr'))
}
if (localStorage.getItem('mmIncr')!=null) {
  mmIncr = Number(localStorage.getItem('mmIncr'))
}
if (localStorage.getItem('finger')!=null) {
  Object.assign(finger,JSON.parse(localStorage.getItem('finger')))
}
if (localStorage.getItem('hand')!=null) {
  Object.assign(hand, JSON.parse(localStorage.getItem('hand')))
}
if (localStorage.getItem('worker')!=null) {
  Object.assign(workerJSON.parse(localStorage.getItem('worker')))
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
// FUNCTIONS
function update() {
  try {
    document.getElementById("clicks").innerHTML = "Clicks: "+clicks
    document.getElementById("mult").innerHTML = "Multiplier: x"+mIncr
    document.getElementById("cps").innerHTML = "CPS: "+aIncr
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('aIncr', aIncr);
    localStorage.setItem('mIncr',mIncr)
    localStorage.setItem('aStart',aStart)
    localStorage.setItem('mmStart',mmStart)
    localStorage.setItem('aaStart',aaStart)
    localStorage.setItem('aaIncr', aaIncr)
    localStorage.setItem('mmIncr',mmIncr)
    localStorage.setItem('finger',JSON.stringify(finger))
    localStorage.setItem('hand',JSON.stringify(hand))
    localStorage.setItem('worker',JSON.stringify(worker))
    upgrades = [finger, hand, worker]
  } catch (err) {
    alert(err)
  }
}
function initupdate() {
  alert("e")
  document.getElementById("clicks").innerHTML = "Clicks: "+clicks
  document.getElementById("mult").innerHTML = "Multiplier: x"+mIncr
  document.getElementById("cps").innerHTML = "CPS: "+aIncr
  localStorage.setItem('clicks', clicks);
  localStorage.setItem('aIncr', aIncr);
  localStorage.setItem('mIncr',mIncr)
  localStorage.setItem('aStart',aStart)
  localStorage.setItem('mmStart',mmStart)
  localStorage.setItem('aaStart',aaStart)
  localStorage.setItem('aaIncr', aaIncr)
  localStorage.setItem('mmIncr',mmIncr)
  upgrades = [finger, hand, worker]
  if (aStart) {
    setautoclick()
  }
  if (mmStart == true) {
    alert(mmStart)
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
  } else if (document.getElementById(id).style.backgroundColor == "seagreen"){
    document.getElementById(id).style.backgroundColor = "#00CC00"
  }
}
function offHover(id) {
  if (document.getElementById(id).style.backgroundColor == "rgb(0, 204, 0)") {
    document.getElementById(id).style.backgroundColor = "seagreen"
  } else if (document.getElementById(id).style.backgroundColor == "rgb(255, 95, 95)") {
    document.getElementById(id).style.backgroundColor = "red"
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
      for (const clickr in upgrades) {
         document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr}x Multiplier)`
      }
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
    clickr.cost = clickr.cost+clickr.inf
    document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr}x Multiplier)`
    update()
  }
}
function autobuy(clickr) {
  try {
      if ((clicks >= clickr.cost)) {
        sfxLevelUp.play()
        clicks = clicks-clickr.cost
        aIncr+=clickr.incr
        clickr.cost = clickr.cost+clickr.inf
        document.getElementById(clickr.id).innerHTML = `${clickr.name} (Cost: ${clickr.cost}, +${clickr.incr} CPS)`
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
    for (const up of upgrades) {
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
