// Die Phasen für die Startfrage
const phases = [1, 201, 300];

// Funktion zum Starten des Quiz
function startQuiz() {
    // Wähle eine zufällige Phase für die Startfrage aus
    let currentQuestionId = phases[Math.floor(Math.random() * phases.length)];
    console.log("Startpunkt der Frage:", currentQuestionId);

    // Blende die Einleitung aus und zeige den Fragenbereich an
    document.getElementById("introduction").style.display = "none";
    document.getElementById("questionSection").style.display = "block";

    // Lade die JSON-Datei mit den Fragen und zeige die erste Frage an
    fetch('/src/output.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Netzwerk-Fehler: ${response.statusText}`);
            }
            return response.json();
        })
        .then(flowchart => {
            // Rufe die Funktion displayQuestion mit der initialen Frage-ID auf
            displayQuestion(currentQuestionId, flowchart);
        })
        .catch(error => console.error('Fehler beim Laden der JSON-Datei:', error));
}

// Event-Listener für den Startknopf
document.getElementById("startButton").addEventListener("click", startQuiz);

// Funktion zum Anzeigen der Frage
function displayQuestion(questionId, flowchart) {
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
        button.classList.add("answer-1", "w-33", "mb-5", "col");
        button.onclick = () => displayQuestion(answer.nextId, flowchart);
        answersDiv.appendChild(button);
    });
}
