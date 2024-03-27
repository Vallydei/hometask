const progress = document.getElementById("progress");

document.forms.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(document.forms.form);

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.send(formData);

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.OPENED) {
      progress.value = 0.3;
    } else if (xhr.readyState === xhr.HEADERS_RECEIVED) {
      progress.value = 0.5;
    } else if (xhr.readyState === xhr.LOADING) {
      progress.value = 0.7;
    } else if (xhr.readyState === xhr.DONE) {
      progress.value = 1;
      alert('файл успешно отправлен')
    } else {
      console.log(xhr.statusText);
    }
  });
});
