const rotatorList = document.querySelectorAll(".rotator__case");


  rotatorList.forEach((item) => {
    setInterval(() => {}, 1000)
    item.previousElementSibling.remove("rotator__case_active");
    console.log(item.previousElementSibling);
    item.classList.add("rotator__case_active");
  })



