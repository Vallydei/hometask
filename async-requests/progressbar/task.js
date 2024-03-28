const progress = document.getElementById("progress");

document.forms.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(document.forms.form);

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.send(formData);

  xhr.onprogress = function (event) {
    if (event.loaded === event.total) {
      progress.value = 1;
    } else {
      let percentComplete = event.loaded / event.total;
      if (percentComplete <= 0.3) {
        progress.value = 0.3;
      } else if (percentComplete <= 0.5) {
        progress.value = 0.5;
      } else if (percentComplete <= 0.7) {
        progress.value = 0.7;
      }
    }
  };

  xhr.onloadend = function () {
    if (xhr.status == 201) {
      alert("Файл успушно загружен");
    } else if (xhr.status >= 400 && xhr.status < 500) {
      alert("Ошибка у клиента" + this.status);
    } else if (xhr.status >= 500) {
      alert("Ошибка сервера" + this.status);
    }
  };
});
