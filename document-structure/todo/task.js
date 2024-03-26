const form = document.querySelector("#tasks__form");
const list = document.querySelector("#tasks__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = form.querySelector("#task__input");
  const newElement = document.createElement("div");
  newElement.classList.add("task");
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = inputValue.value;
  const closeBtn = document.createElement("a");
  closeBtn.classList.add("task__remove");
  closeBtn.setAttribute("href", "#");
  closeBtn.innerHTML = "&times;";
  newElement.appendChild(taskTitle);
  newElement.appendChild(closeBtn);
  list.appendChild(newElement);
  closeBtn.addEventListener("click", () => {
    newElement.remove();
  });
  form.reset();
});
