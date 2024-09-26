console.log("loaded");

// Fragen
const questions = ["Frage 2", "Frage 3", "Frage 4"];
const question = document.getElementById("q");
function QuestionHandler(q) {
    console.log(q.id);

    question.innerText = questions.shift();
}

