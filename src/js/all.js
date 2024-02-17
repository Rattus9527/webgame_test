const lightSwitch = document.querySelector(".light-switch");
const light = document.querySelector(".light");
const key = document.querySelector(".key");
const door = document.querySelector(".door");
const hint = document.querySelector(".hint");
const darkInvisible = document.querySelectorAll(".dark-invisible");
const background = document.querySelector(".container");

let lightStatus = true;
let doorLock = true;
let hintOn = false;

lightSwitch.addEventListener("click", () => {
  if (lightStatus) {
    background.classList.add("dark-background");
    darkInvisible.forEach((el) => el.classList.add("invisible"));
    key.style = `display: block;`;
    lightStatus = false;
  } else {
    background.classList.remove("dark-background");
    darkInvisible.forEach((el) => el.classList.remove("invisible"));
    key.style = `display: none;`;
    lightStatus = true;
  }
});
light.addEventListener("click", () => {
  if (!hintOn) {
    hint.style = `display: block;`;
    hint.textContent = "一盞普通的燈，好像壞了";
    hintOn = true;
  }
});
hint.addEventListener("click", () => {
  if (hintOn) {
    hint.style = `display: none;`;
    hintOn = false;
  }
});
key.addEventListener("click", () => {
  key.style = `display: none;`;
  doorLock = false;
  hint.style = `display: block;`;
  hint.textContent = "撿到鑰匙了！";
  hintOn = true;
});
door.addEventListener("click", () => {
  if (!doorLock) {
    alert("逃出成功");
  }
});
