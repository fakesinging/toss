const btns = document.querySelectorAll("button");

// console.log(btns);

for (let t of btns) {
  // console.log(t);
  t.addEventListener("click", () => performToss(t));
}

// let valueGenerated = parseInt(Math.random()*2)

let op = document.querySelector(".output");
let comp = op.querySelector(".compScore");
let you = op.querySelector(".yourScore");
let score1 = 0, score2 = 0;
// O for head and 1 for tail
function performToss(btnClicked) {
  selectedValue = btnClicked.innerText;
//   console.log("Button Clicked", selectedValue, "");

  let choices = ["Head", "Tail"];
  let randomIndex = parseInt(Math.random() * choices.length);
  let tossValue = choices[randomIndex];
  let result = document.querySelector(".result");
  let reset = document.querySelector(".reset");
  result.style.fontSize = '20px'
//   result.style.backgroundColor = 'yellow'

  // console.log("Selected Value", selectedValue, "Toss Value", tossValue);

  if (selectedValue == tossValue) {
    // alert("You won the toss.")
    result.innerHTML = `You won the toss.`;
    result.style.color = 'green'
    // result.style.backgroundColor = 'yellow'
    you.innerHTML = `${++score1}`;
} else {
    // alert("You lost the toss.")
    result.innerHTML = `You lost the toss.`;
    result.style.color = 'red'
    comp.innerHTML = `${++score2}`;
}
if (selectedValue == "Reset") {
    (score1 = 0), (score2 = 0);
    result.innerText = ''
    you.innerHTML = `${0}`;
    comp.innerHTML = `${0}`;
}
}


// result.style.cssText = `
// color:green;
// background-color:pink;
// `