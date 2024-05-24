function displayPoetry(response) {
  let writtenPoem = document.querySelector("#writtenPoem");
  writtenPoem.innerHTML = response.data.answer;
}

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#writtenPoem", {
    strings: "Generating your poem...",
    autoStart: true,
    delay: 50,
    cursor: null,
    loop: true,
  });
}

let poetryForm = document.querySelector("#poetry-form");
poetryForm.addEventListener("submit", generatePoem);
