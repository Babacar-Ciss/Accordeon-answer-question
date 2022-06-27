const [...questions] = document.getElementsByClassName("question");
const [...arrows] = document.getElementsByClassName("arrow");
const [...answers] = document.getElementsByClassName("answer");

let flag
//Selection Question's ID
arrows.forEach((arrow, id) => {
    arrow.addEventListener("click", () => {   
             answers.forEach(answer => { 
                answer.classList.add("hidden") 
                questions.forEach(question => {
                    question.classList.remove("active");
                })
            });
                    arrow.classList.toggle("rotate");
                    answers[id].classList.toggle("hidden"); 
                    questions[id].classList.toggle("active");
                })  
});