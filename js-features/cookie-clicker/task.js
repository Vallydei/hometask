let counter = 0;
let differenceInTime = 0;
let date = new Date();

const cookie = document.getElementById("cookie");
const counterOnPage = document.getElementById("clicker__counter");
const container = document.querySelector(".clicker");
const clicktime = document.createElement("p");
container.appendChild(clicktime);

cookie.onclick = () => {
  counter += 1;
  counterOnPage.textContent = counter;
  if (counter % 2 === 1) {
    cookie.width = 300;
    cookie.height = 180;
  } else {
    cookie.width = 200;
    cookie.height = 128;
  }
  let newDate = new Date();
  differenceInTime = (newDate - date) / 1000;
  clicktime.innerText = `с момента последнего клика прошло ${differenceInTime} секунд`;
  date = new Date();
};
