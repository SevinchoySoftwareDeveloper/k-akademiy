const togglebtn = document.querySelector(".toggle");
const togglebtnImg = document.querySelector(".toggle i");
const resPonsiv = document.querySelector(".responsiv");
const resBTN = document.querySelector(".button_btn1");

const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const DarcMode = localStorage.getItem("mode");
togglebtn.onclick = function () {
  myClick();
  const isOpen = resPonsiv.classList.contains("open");
  togglebtnImg.classList = isOpen
    ? "fa-fa fa-solid fa-xmark"
    : "fa-fa fa-solid fa-bars";
};
function myClick() {
  resPonsiv.classList.toggle("open");
  resBTN.classList.toggle("open");
}

const toggleBye = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};
darkBtn.onclick = function () {
  toggleBye();
  localStorage.setItem("mode", "dark-mode");
};
lightBtn.onclick = function () {
  toggleBye();
  localStorage.setItem("mode", "  ");
};
const insteadbtn = document.querySelector("#instead");
const planetbtn = document.querySelector("#planet");
const librarybtn = document.querySelector(".library");
const reportbtn = document.querySelector(".report");
function myInstead(hhhhhhhhhhm, gooooooo) {
  hhhhhhhhhhm.classList.toggle("fafatrans");
  gooooooo.classList.toggle("hidden");
}
planetbtn.onclick = function () {
  myInstead(planetbtn, librarybtn);
};
insteadbtn.onclick = function () {
  myInstead(insteadbtn, reportbtn);
};

// document.querySelector(".button_form").addEventListener("click", function () {
//   myText();
// });
// function myText() {
//   let massage, text;
//   let errElement = document.getElementById("ism");
//   massage = document.getElementById("error");
//   text = document.getElementById("ism").value;
//   console.log(text);
// }
// barja indexlar uchun.
