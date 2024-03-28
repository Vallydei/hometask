const textArea = document.querySelector("#editor");

const dataLocalStorage = localStorage.getItem("text");

if (dataLocalStorage) {
  textArea.value = dataLocalStorage;
}

textArea.addEventListener("change", () => {
  let text = textArea.value;
  localStorage.setItem("text", text);
});
