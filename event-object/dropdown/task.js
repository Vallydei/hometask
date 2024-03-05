const dropdownListElement = document.querySelector(".dropdown__list");
const dropdownContainer = document.querySelector(".dropdown");
const dropdownElements = document.querySelectorAll(".dropdown__item");

dropdownContainer.addEventListener("click", function () {
  dropdownListElement.classList.add("dropdown__list_active");
});

dropdownElements.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const newValue = item.textContent;
    document.querySelector(".dropdown__value").textContent = newValue;
    dropdownListElement.classList.remove("dropdown__list_active");
    e.stopPropagation();
  });
});
