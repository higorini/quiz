const options = document.querySelectorAll(".option");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const quizes = [
  {
    question: "O que é a via láctea?",
    options: [
      { title: "Marca de leite", correct: false },
      { title: "Civilização antiga", correct: false },
      { title: "Carro", correct: false },
      { title: "Galáxia", correct: true },
    ],
  },
  {
    question: "Qual é o animal que representa o signo de touro?",
    options: [
      { title: "Hipopótamo", correct: false },
      { title: "Cavalo", correct: false },
      { title: "Touro", correct: true },
      { title: "Galo", correct: false },
    ],
  },
  {
    question: "Qual é a fruta usada para fazer ameixa seca?",
    options: [
      { title: "Uva", correct: false },
      { title: "Pêssego", correct: false },
      { title: "Ameixa", correct: true },
      { title: "Abacaxi", correct: false },
    ],
  },
  {
    question: "Qual é o material usado para fazer uma lâmpada?",
    options: [
      { title: "Vidro", correct: false },
      { title: "Plástico", correct: false },
      { title: "Metal", correct: false },
      { title: "Vidro e metal", correct: true },
    ],
  },
];

let randomQuestion;
let correctOption;

function fillQuiz() {
  randomQuestion = quizes[Math.floor(Math.random() * quizes.length)];
  h2.textContent = randomQuestion.question;

  for (let i = 0; i < options.length; i++) {
    options[i].textContent = randomQuestion.options[i].title;
  }

  randomQuestion.options.forEach((option) => {
    if (option.correct) {
      correctOption = option;
    }
  });
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    button.style.visibility = "visible";

    if (option.textContent === correctOption.title) {
      option.classList.add("success");
      h1.textContent = "Você acertou!";
      return;
    }

    option.classList.add("danger");
    h1.textContent = "Você errou!";
  });
});

button.addEventListener("click", () => {
  window.location.reload();
});

fillQuiz();
