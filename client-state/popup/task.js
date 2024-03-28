const modal = document.querySelector("#subscribe-modal");


window.addEventListener("DOMContentLoaded", () => {
  let modalOpened = document.cookie.includes("modal opened");
  if (!modalOpened) {
    modal.classList.add("modal_active");
  } 
  return
});

const closeModal = document.querySelector(".modal__close");

closeModal.addEventListener("click", () => {
  document.cookie = "modal opened" + "=" + encodeURIComponent(true);
  modal.classList.remove("modal_active");
});
