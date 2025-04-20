let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("Game started");
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randcolor = btns[randIdx];
  let randbtn = document.querySelector(`.${randcolor}`);

  console.log(randcolor);
  gameseq.push(randcolor);
  btnflash(randbtn);
}

function checkAns(i) {
  //   let i = level - 1;
  if (userseq[i] === gameseq[i]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}<b>.<br> Press any key to restart`;
    let l = 0;
    if (l < level) l = level;
    h3.innerText = `Highest score : ${l}`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnpress() {
  let btn = this;
  btnflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  //   console.log(`user ${userseq}`);
  checkAns(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
