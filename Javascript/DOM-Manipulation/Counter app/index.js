// variables
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// functions

counter.innerText = count;

incrementBtn.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});     