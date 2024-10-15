// Fragen und Antworten als Array von Objekten
const flowchart = [
    {
        id: 1,
        question: "Wie geht es dir?",
        answers: [
            { text: "Gut", nextId: 2 },
            { text: "Nicht so gut", nextId: 3 }
        ]
    },
    {
        id: 2,
        question: "Freut mich zu hören! Was machst du gerade?",
        answers: [
            { text: "Arbeiten", nextId: 4 },
            { text: "Entspannen", nextId: 5 }
        ]
    },
    {
        id: 3,
        question: "Das tut mir leid. Kann ich dir helfen?",
        answers: [
            { text: "Ja, bitte", nextId: 4 },
            { text: "Nein, danke", nextId: 5 }
        ]
    },
    {
        id: 4,
        question: "Hoffe, es wird besser. Alles Gute!",
        answers: []
    },
    {
        id: 5,
        question: "Schön, dass du Zeit zum Entspannen hast. Viel Spaß!",
        answers: []
    }
];

let currentQuestionId = 1; // Startpunkt

// Funktion zum Anzeigen der Frage
function displayQuestion(questionId) {
    const questionObj = flowchart.find(q => q.id === questionId);
    const questionDiv = document.getElementById("question");
    const answersDiv = document.getElementById("answers");

    // Setze die Frage
    questionDiv.innerText = questionObj.question;

    // Entferne vorherige Antworten
    answersDiv.innerHTML = "";

    // Erstelle Antwortbuttons
    questionObj.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-1", "w-50", "mb-5");
        button.onclick = () => displayQuestion(answer.nextId);
        answersDiv.appendChild(button);
    });
}

// Initiale Frage anzeigen
displayQuestion(currentQuestionId);