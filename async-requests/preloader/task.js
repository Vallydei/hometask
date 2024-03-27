const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const loader = document.querySelector("#loader");
    loader.classList.remove("loader_active");
    const response = xhr.responseText;
    const valutes = JSON.parse(response).response.Valute;
    const valutesArray = Object.values(valutes);
    const itemsList = document.querySelector("#items");
    valutesArray.forEach((itemElement) => {
         itemsList.insertAdjacentHTML(
        "beforeend",
        `
      <div class="item">
        <div class="item__code">
          ${itemElement.CharCode}
        </div>
        <div class="item__value">
          ${itemElement.Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      </div>`
      );
    });
  }
});
