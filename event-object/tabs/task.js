const tabsList = document.querySelectorAll(".tab");
const tabsContentList = document.querySelectorAll(".tab__content");

tabsList.forEach((item, index) => {
  item.addEventListener("click", () => {
    let currentTabIndex = index;
    item.classList.toggle("tab_active");
    tabsContentList[index].classList.toggle("tab__content_active");

    tabsList.forEach((item, index) => {
      if (index !== currentTabIndex) {
        item.classList.remove("tab_active");
        tabsContentList[index].classList.remove("tab__content_active");
      }
    });
  });
});
