const adviceText = document.querySelector("#advice-text");
const adviceNum2 = document.querySelector("#advice-num");
let advice, adviceNum;

function grabQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      advice = data.slip.advice;
      adviceNum = data.slip.id;
      adviceText.innerHTML = `"${advice}"`;
      adviceNum2.innerHTML = `ADVICE # ${adviceNum}`;
    });

  console.log(advice);
  console.log(adviceNum);
}
