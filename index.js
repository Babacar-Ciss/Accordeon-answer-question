const [...question] = document.getElementsByClassName("question");
const [...arrow] = document.getElementsByClassName("arrow");
const [...answer] = document.getElementsByClassName("answer");

let idQuestion = 0;

//Selection Question's ID
arrow.forEach((el, id) => {
    el.addEventListener("click", () => {
                answer[id].classList.toggle("hidden"); 
                question[id].classList.toggle("active");
                arrow[id].classList.toggle("rotate");
        idQuestion = id
    })
})
