document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".hide1").style.display = "none";
  document.querySelector(".hide2").style.display = "flex";
  document.querySelector(".love").style.display = "none";
  start = Number(document.querySelector(".o1").value);
  end = Number(document.querySelector(".o2").value);
  secretNum = Number(Math.trunc(Math.random() * end) + start);
  document.querySelector(".msg2").textContent = `(Between ${start} and ${end})`;
});

document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".hide1").style.display = "flex";
  document.querySelector(".hide2").style.display = "none";
  document.querySelector(".love").style.display = "block";
  turns = 0;
  document.querySelector(".score").textContent = turns;
  secretNum = Number(Math.trunc(Math.random() * end) + start);
  document.querySelector(".btn3").disabled = false;
  document.querySelector(".guess").value = "";
  document.querySelector(".msg1").textContent = "Start Guessing...";
});

let turns = 0;
let highScore = Infinity;
let start, end;
let secretNum;
console.log(secretNum);

document.querySelector(".btn3").addEventListener("click", function () {
  let curr = Number(document.querySelector(".guess1").value);

  // console.log(start, end);
  console.log(curr, secretNum);
  if (curr === secretNum) {
    document.querySelector(".msg1").textContent = "🎉 Correct Number!";
    turns++;
    document.querySelector(".score").textContent = turns;
    if (turns < highScore) {
      highScore = turns;
      document.querySelector(".hscore").textContent = turns;
      document.querySelector(".btn3").disabled = true;
    }
  } else if (curr > secretNum) {
    document.querySelector(".msg1").textContent = "Too High!";
    turns++;
    document.querySelector(".score").textContent = turns;
  } else if (curr < secretNum) {
    document.querySelector(".msg1").textContent = "Too Low!";
    turns++;
    document.querySelector(".score").textContent = turns;
  } else {
    document.querySelector(".msg1").textContent = "Invalid Input";
  }
});
