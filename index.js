const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answers");
const arrows = document.querySelectorAll(".arrow");


questions.forEach(question => {
    question.addEventListener("click", function(){
        questions.forEach(question => {
            question.classList.remove("selected");
        })
        question.classList.add("selected");

        answers.forEach(answer => {
            answer.classList.add("hidden");
        })

        arrows.forEach(arrow => {
            arrow.classList.remove("rotated");
        })
    })
});


for (let i = 1; i <= 5; i++) {
    const answer = document.querySelector('.answer' + i);
    const question = document.querySelector('.question' + i);
    const arrow = document.querySelector('.arrow' + i);

    question.addEventListener("click",()=> {
        answer.classList.remove("hidden");
        arrow.classList.add("rotated");
    })
  }

