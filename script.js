document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".hide1").style.display = "none";
  document.querySelector(".hide2").style.display = "flex";
});

document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".hide1").style.display = "flex";
  document.querySelector(".hide2").style.display = "none";
});
