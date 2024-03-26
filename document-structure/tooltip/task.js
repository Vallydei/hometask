const links = document.querySelectorAll(".has-tooltip");
// console.log(links);

links.forEach((link) => {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = link.title;
  link.insertAdjacentElement("afterend", tooltip);
  link.href = "#";
  link.addEventListener("click", (e) => {
    e.preventDefault;
    tooltip.classList.toggle("tooltip_active");
  });
});


