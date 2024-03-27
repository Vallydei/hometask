const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const response = xhr.responseText;
    const poll = JSON.parse(response).data;
    const question = document.querySelector("#poll__title");
    question.textContent = poll.title;
    poll.answers.forEach((element) => {
      const btn = document.createElement("button");
      btn.classList.add("poll__answer");
      btn.textContent = element;
      const answerList = document.querySelector("#poll__answers");
      answerList.appendChild(btn);
    });
    const btns = document.querySelectorAll(".poll_answer");
    btns.forEach((btn)=> {btn.addEventListener('click', ()=>{
        alert('Спасибо, ваш голос засчитан!')
        location. reload()
    })})
  }
});
