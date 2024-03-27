const links = document.querySelectorAll(".has-tooltip");

links.forEach((link) => {
  const position = link.getBoundingClientRect();
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = link.title;

  link.insertAdjacentElement("afterend", tooltip);
  link.href = "#";

  console.log(position);
  link.addEventListener("click", (e) => {
    e.preventDefault;
    tooltip.classList.toggle("tooltip_active");
    tooltip.style = ` left: ${position.left}px;
    top: ${position.top + 20}px
  
    `;
  });
});
