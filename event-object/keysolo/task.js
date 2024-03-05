class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.currentTimerElement = document.getElementById("newTimer");
    this.timerInterval;
    this.reset();

    this.registerEvents();
  }

  timer(numberOfSymbols) {
    let currentTimer = numberOfSymbols;
    this.currentTimerElement.innerText = `${currentTimer}`;

    this.timerInterval = setInterval(() => {
      if (currentTimer > 0) {
        currentTimer -= 1;
        this.currentTimerElement.innerText = `${currentTimer}`;
      } else {
        this.fail();
        currentTimer = 16;
      }
    }, 1000);
  }

  reset() {
    this.setNewWord();

    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    this.currentSymbol = document.querySelector(".symbol_current");
    let pressedSymbol = "";
    window.addEventListener("keypress", (e) => {
      pressedSymbol = e.key;

      if (
        this.currentSymbol.textContent.toLowerCase() ===
        pressedSymbol.toLowerCase()
      ) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current"))
      this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add("symbol_current");
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    clearInterval(this.timerInterval);
    this.timer(word.length);
    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
