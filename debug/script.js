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
if (localStorage.getItem("finger") != null) {
  finger.cost = Number(localStorage.getItem('cFinger'));
}
if (localStorage.getItem("hand") != null) {
  hand.cost = Number(localStorage.getItem('cHand'));
}
if (localStorage.getItem("worker") != null) {
  worker.cost = Number(localStorage.getItem('cWorker'));
}
if (localStorage.getItem("finger") != null) {
  finger.show = Number(localStorage.getItem('sFinger'));
}
if (localStorage.getItem("hand") != null) {
  hand.show = Number(localStorage.getItem('sHand'));
}
if (localStorage.getItem("worker") != null) {
  worker.show = Number(localStorage.getItem('sWorker'));
}
