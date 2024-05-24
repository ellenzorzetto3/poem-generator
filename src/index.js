function displayPoetry(response) {
  let writtenPoem = document.querySelector("#writtenPoem");

  new Typewriter("#writtenPoem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poetryPrompt = document.querySelector("#poetryPrompt");
  let key = `o3bfb209f55e8951210f40e6476fat3f`;
  let prompt = `User instructions: Generate a brazilian cordel poem without a title in portuguese about ${poetryPrompt.value}`;
  let context = `You are a brazilian north-eastern cordel poet. Generate a four line cordel poem in basic html. Do not include a title. Make sure to follow the user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayPoetry);

  new Typewriter("#writtenPoem", {
    strings: `Gerando poesia sobre ${poetryPrompt.value}...`,
    autoStart: true,
    delay: 50,
    cursor: null,
    loop: true,
  });
}

let poetryForm = document.querySelector("#poetry-form");
poetryForm.addEventListener("submit", generatePoem);
