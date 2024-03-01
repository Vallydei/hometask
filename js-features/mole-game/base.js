(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => (playing = true),
    getHole = (index) => document.getElementById(`hole${index}`),
    deactivateHole = (index) => (getHole(index).className = "hole"),
    activateHole = (index) => (getHole(index).className = "hole hole_has-mole"),
    next = () =>
      setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);

  next();
})();

const holes = document.querySelectorAll(".hole");
const scoresElement = document.querySelector("#dead");
let scores = +scoresElement.textContent;
const lostElement = document.querySelector("#lost");
let lostScores = +lostElement.textContent;

holes.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("hole_has-mole")) {
      scores += 1;
      scoresElement.textContent = scores;
    } else {
      lostScores += 1;
      lostElement.textContent = lostScores;
    }
    if (scores === 10) {
      resetFunc();
      alert("You win!");
    }
    if (lostScores === 5) {
      resetFunc();
      alert("You lose! ;( Try again!");
    }
  });
});

const resetFunc = () => {
  scores = 0;
  lostScores = 0;
  scoresElement.textContent = scores;
  lostElement.textContent = lostScores;
};
