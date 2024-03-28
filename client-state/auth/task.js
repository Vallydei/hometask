const signInForm = document.querySelector("#signin");
signInForm.classList.add("signin_active");
const welcomeBlock = document.querySelector("#welcome");

const form = document.getElementById("signin__form");

const dataLocalStorage = localStorage.getItem("user_id");

const welcomeIsVisible = (id) => {
  document.querySelector("#user_id").textContent = id;
  welcomeBlock.classList.add("welcome_active");
};

if (dataLocalStorage) {
  welcomeIsVisible(dataLocalStorage);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(document.forms.signin__form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.send(formData);
  xhr.onloadend = function () {
    const response = JSON.parse(xhr.response);
    if (response.success) {
      localStorage.setItem("user_id", response.user_id);
      welcomeIsVisible(response.user_id);
      form.reset();
    } else if (!response.success) {
      alert("Неверный логин/пароль");
      form.reset();
    }
  };
});
