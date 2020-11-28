//@ts-check
const up = document.getElementById("up");
const down = document.getElementById("down");
const number = document.querySelector("span");

let count = 0;

const updateText = () => {
  number.innerText = count;
};

const handleUp = () => {
  count++;
  updateText();
};

const handleDown = () => {
  count--;
  updateText();
};

up.addEventListener("click", handleUp);
down.addEventListener("click", handleDown);
