const fontSizeControlList = document.querySelectorAll(".font-size");
const textContent = document.querySelector(".book__content");

fontSizeControlList.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    fontSizeControlList.forEach((el) =>
      el.classList.remove("font-size_active")
    );
    item.classList.add("font-size_active");

    if (item.classList.contains("font-size_small")) {
      textContent.classList.remove("book_fs-big");
      textContent.classList.add("book_fs-small");
    } else if (item.classList.contains("font-size_big")) {
      textContent.classList.remove("book_fs-small");
      textContent.classList.add("book_fs-big");
    } else {
      textContent.classList.remove("book_fs-big", "book_fs-small");
    }
  });
});
