const form = document.querySelector("#tasks__form");
const list = document.querySelector("#tasks__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = form.querySelector("#task__input");
  const title = inputValue.value.trim();
  if (title) {
    list.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="task">
    <div class="task__title">
      ${title}
    </div>
    <a href="#" class="task__remove">х</a>
  </div>
  `
    );
    const closeBtn = document.querySelector(".task__remove");
    closeBtn.addEventListener("click", () => {
      closeBtn.parentElement.remove();
    });
  } else {
    alert("поле не может быть пустым");
  }

  form.reset();
});
