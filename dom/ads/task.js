const rotatorList = document.querySelectorAll(".rotator__case");

setInterval(() => {
  const activeIndex = Array.from(rotatorList).findIndex((el) =>
    el.classList.contains("rotator__case_active")
  );
  const nextIndex = (activeIndex + 1) % rotatorList.length;
  rotatorList[activeIndex].classList.remove("rotator__case_active");
  rotatorList[nextIndex].classList.add("rotator__case_active");
}, 1000);
