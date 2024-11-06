// Fragen und Antworten als Array von Objekten
// id = nummer der Frage
// nextId = zu welcher Frage die Antwort einen führt
const flowchart = [{
    id: 1, question: "Hallo, ich bin Bayesh.", answers: [{text: "Hallo, warum bist du heute hier?", nextId: 2}, {
        text: "Hey, was kann ich für dich tun?", nextId: 2
    }]
}, {
    id: 2,
    question: "Mir ist letztens etwas passiert, über das ich heute reden möchte.",
    answers: [{text: "Was ist denn passiert?", nextId: 3}, {text: "Okay, erzähl mir mehr.", nextId: 4}]
}, {
    id: 3,
    question: "Letztens war ich auf dem Weg zu einer Freundin. Dabei hat mich eine Gruppe Typen beleidigt und gesagt, ich solle mich in mein Land verpissen. Das hat mich total fertig gemacht.",
    answers: [{
        text: "Okay, das tut mir leid für dich. Gab es womöglich einen Grund dafür?", nextId: 5
    }, {
        text: "Okay, das tut mir leid zu hören. Wann ist das ungefähr passiert?", nextId: 14
    }, {text: "Okay, das tut mir leid zu hören. Denkst du oft daran zurück?", nextId: 13}]
}, {
    id: 4,
    question: "Ich war auf dem Weg zu einer Freundin und dabei wurde ich von einer Gruppe Männer angegriffen.",
    answers: [{text: "Was haben sie denn gemacht?", nextId: 6}, {text: "Uncool. Inwiwefern?", nextId: 7}]
}, {
    id: 5, question: "Nein, gar keinen. Ich bin nur an ihnen vorbeigelaufen und hab nix gemacht.", answers: [{
        text: "Sicher? Als ob sie dich einfach ohne Grund angegriffen haben. Irgendwas muss doch gewesen sein?",
        nextId: 8
    }, {text: "Okay, verstehe. Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 12}]
}, {
    id: 6, question: 'Sie haben mich beleidigt und gesagt, ich solle mich in "mein Land" verpissen.', answers: [{
        text: "Ach. hör einfach nicht hin. Ignorier sowas am besten!", nextId: 8
    }, {text: "Okay, ich verstehe, dass das schwer sein kann. Denkst du oft daran zurück?", nextId: 13}]
}, {
    id: 7, question: "Sie haben mich beleidigt.", answers: [{text: "Möchtest du das weiter ausführen?", nextId: 9}, {
        text: "Nur das? Das ist ja halb so wild.", nextId: 8
    }]
}, {
    id: 8,
    question: "Du warst zu wenig empathisch und hast sekundäre Viktimisierung betrieben. Versuche nächstes mal, dich mehr in die Person hineinzuversetzen und die Erlebnisse nicht klein zu reden.",
    answers: [{text: "Neustart", nextId: 1}]
}, {
    id: 9, question: 'Naja, sie meinten ich solle mich in mein Land "verpissen"... das war für mich hart.', answers: [{
        text: "Hattest du zufällig zu der Zeit deine Periode?", nextId: 10
    }, {
        text: "Okay. Und welche Emotionen verspürst du, wenn du an das Erlebnis zurückdenkst?", nextId: 12
    }, {text: "Okay, das tut mir leid zu hören. Denkst du oft daran zurück?", nextId: 13}]
}, {
    id: 10,
    question: "Das war nicht der richtige Weg. Verusche nächstes Mal freundlicher zu sein und empathischer zu regieren.",
    answers: [{text: "Neustart", nextId: 1}]
}, {
    id: 12,
    question: "Sehr angespannt, vielleicht... Wut? Unglaube? Bin total adrenalingeladen dann immer... ich weiss nicht recht.",
    answers: [{
        text: "Wie hattest du eigentlich an dem Abend direkt darauf reagiert?", nextId: 19
    }, {text: "Belastet es dich im Alltag?", nextId: 20}, {text: "Denkst du oft daran zurück?", nextId: 21}]
}, {
    id: 13,
    question: "Ja schon, eigentlich bei allem was ich mache. Verdrängen funktioniert nur manchmal, aber es ist ständig im Hinterkopf.",
    answers: [{
        text: "Verstehe. Welche Emotionen verspürst du, wenn du an das Erlebte zurückdenkst?", nextId: 16
    }, {text: "Verstehe. Belastet es dich also im Alltag?", nextId: 17}, {
        text: "Verstehe. Wenn wir noch einmal an den Vorfall zurückdenken: Wie hattest du direkt an dem Abend darauf reagiert?",
        nextId: 18
    }]
}, {
    id: 14,
    question: "Ähm, also abends, aber wann? Oh Gott, das wirst du mir nicht glauben, aber ich weiss es einfach nicht mehr.",
    answers: [{text: "Tatsächlich glaube ich dir das absolut. Belastet dich das Geschehene im Alltag?", nextId: 22}, {
        text: "Tatsächlich glaube ich dir das absolut. Welche Emotionen empfindest du, wenn du an das Erlebnis zurückdenkst?",
        nextId: 23
    }, {
        text: "Tatsächlich glaube ich dir das absolut. Wenn wir noch einmal an den Abend zurückdenken: wie hattest du dann direkt darauf reagiert?",
        nextId: 24
    }]
}, {
    id: 16,
    question: "Sehr angespannt, vielleicht... Wut? Unglaube? Bin total adrenalingeladen dann immer... ich weiss nicht recht.",
    answers: [{
        text: "War das deine erste erfahrung mit Rassismus?", nextId: 25
    }, {text: "Wann ist das ungefähr passiert?", nextId: 26}, {text: "Belastet es dich im Alltag?", nextId: 27}]
}, {
    id: 17,
    question: "Auch wenn ich versuche das zu verdrängen lautet die Antwort oft ja... ich kann meist nicht mal rausgehen. Liege nur erschöpft im Bett und mache nix.",
    answers: [{
        text: "Das ist nach solch einem Erlebnis aber vollkommen okay. Welche Emotionen verspürst du, wenn du daran zurückdenkst?",
        nextId: 28
    }, {
        text: "Das ist nach solch einem Erlebnis aber vollkommen okay. Wann ist das ungefähr passiert?", nextId: 29
    }, {
        text: "Das ist nach solch einem Erlebnis aber vollkommen okay. War das eigentlich deine erste Erfahrung mit Rassismus?",
        nextId: 30
    }]
}, {
    id: 18, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
        text: "Okay. Und weche Emotionenverspürst du, wenn du daran denkst?", nextId: 31
    }, {
        text: "okay. Und belastet es dich im Alltag?", nextId: 32
    }, {text: "Okay. Und war das deine erste Erfahrung mit Rassismus?", nextId: 33}

    ]
}, {
    id: 19,
    question: "Ich war wie gelähmt und wollte nur schnell weg.",
    answers: [{text: "Okay. Denkst du oft daran zurück?", nextId: 34}, {
        text: "Okay. Wann ist das ungefähr passiert?", nextId: 35
    }, {text: "Okay. Belastet es dich noch immer im Alltag, wenn du daran zurück denkst?", nextId: 36}]
}, {
    id: 20,
    question: "Auch wenn ich versuche das zu verdrängen lautet die Antwort oft ja... ich kann meist nicht mal rausgehen. Liege nur erschöpft im Bett und mache nix.",
    answers: [{
        text: "Das ist nach solch einem Erlebnis aber vollkommen okay. Und war das deine erste Erfahrung mit Rassismus?",
        nextId: 37
    }, {
        text: "Das ist nach solch einem Erlebnis aber vollkommen okay. Und denkst du noch oft daran zurück? ",
        nextId: 38
    }, {
        text: "Das ist nach solch einem Erlebnis aber vollkommen okay. Wann ist das ungefähr passiert?", nextId: 39
    }]
}, {
    id: 21,
    question: "Ja schon, eigentlich bei allem was ich mache. Verdrängen funktioniert nur manchmal, aber es ist ständig im Hinterkopf.",
    answers: [{text: "Also belastet es dich im Alltag?", nextId: 40}, {
        text: "Und wann ist das ungefähr passiert?", nextId: 41
    }, {text: "Und wenn wir noch einmal an den Vorfall denken: wie hattest du darauf reagiert?", nextId: 42}]
}, {
    id: 22,
    question: "Auch wenn ich versuche das zu verdrängen lautet die Antwort oft ja... ich kann meist nicht mal rausgehen. Liege nur erschöpft im Bett und mache nix.",
    answers: [{
        text: "Und denkst du oft an das Ereignis zurück?", nextId: 43
    }, {
        text: "Und was das deine erste Erfahrung mit Rassismus?", nextId: 44
    }, {text: "Und welche Emotionen verspürst du, wenn du an das Ereignis zurückdenkst?", nextId: 45}]
}, {
    id: 23,
    question: "Sehr angespannt, vielleicht... Wut? Unglaube? Bin total adrenalingeladen dann immer... ich weiss nicht recht.",
    answers: [{text: "Also belastet es dich im Alltag?", nextId: 46}, {
        text: "Denkst du denn oft daran zurück?", nextId: 47
    }, {
        text: "Und wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend reagiert?", nextId: 48
    }]
}, {
    id: 24,
    question: "Ich war wie gelähmt und wollte nur schnell weg.",
    answers: [{text: "Und belastet es dich im Alltag?", nextId: 49}, {
        text: "Denkst du oft daran zurück?", nextId: 50
    }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 41}]
}, {
    id: 25,
    question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
    answers: [{
        text: "Das ist nachvollziehbar. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        nextId: 52
    }, {
        text: "Das ist nachvollziehbar. Wann ist das ungefähr passiert?", nextId: 53
    }, {text: "Das ist nachvollziehbar. Belastet es dich im Alltag?", nextId: 54}]
}, {
    id: 26,
    question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
    answers: [{
        text: "Mach dir keine Sorgen, ich glaube dir. War das eigentlich deine erste erfahrung mit Rassismus?",
        nextId: 55
    }, {text: "Mach dir keine Sorgen, ich glaube dir. Belastet es dich im Alltag?", nextId: 56}, {
        text: "Mach dir keine Sorgen, ich glaube dir. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        nextId: 57
    }]
}, {
    id: 27,
    question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
    answers: [{
        text: "Wann ist das ungefähr passiert?", nextId: 58
    }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 59}, {
        text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        nextId: 60
    }]
}, {
    id: 28,
    question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
    answers: [{
        text: "Wann ist das ungefähr passiert?", nextId: 61
    }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 62}, {
        text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        nextId: 63
    }]
}, {
    id: 29,
    question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
    answers: [{
        text: "Mach dir keine Sorgen, ich glaube dir. War das eigentlich deine erste Erfahrung mit Rassismus?",
        nextId: 64
    }, {
        text: "Mach dir keine Sorgen, ich glaube dir. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        nextId: 65
    }, {
        text: "Mach dir keine Sorgen, ich glaube dir. Und welche Emotionen verspürst du, wenn du daran zurückdenkst?",
        nextId: 66
    }]
}, {
    id: 30,
    question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
    answers: [{text: "Wann ist das ungefähr passiert?", nextId: 67}, {
        text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        nextId: 68
    }, {text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 69}]
},


    {
        id: 31,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Belastet es dich im Alltag?", nextId: 70
        }, {
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 71
        }, {text: "Wann ist das ungefähr passiert?", nextId: 72}]
    }, {
        id: 32,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst", nextId: 73
        }, {
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 74
        }, {text: "Wann ist das ungefähr passiert?", nextId: 75}]
    }, {
        id: 33,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 76
        }, {
            text: "Und belastet es dich im Alltag?", nextId: 77
        }, {text: "Das ist nachvollziehbar. Wann ist das ungefähr passiert?", nextId: 78}]
    }, {
        id: 34,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{text: "Belastet es dich im Alltag?", nextId: 79}, {
            text: "Wann ist das ungefähr passiert?", nextId: 80
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 81}]
    }, {
        id: 35,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. Belastet das Erlebte dich im Alltag?", nextId: 82
        }, {
            text: "Mach dir keine Sorgen, ich glaube dir. War das deine erste Erfahrung mit Rassismus?", nextId: 83
        }, {text: "Mach dir keine Sorgen, ich glaube dir. Denkst du oft an das Erlebte zurück?", nextId: 84}]
    }, {
        id: 36,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 85
        }, {text: "Und war das deine erste Erfahrung mit Rassismus?", nextId: 86}, {
            text: "Denkst du oft daran zurück?", nextId: 87
        }]
    }, {
        id: 37,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Denkst du oft daran zurück?", nextId: 88}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 89
        }, {text: "Wann ist das ungefähr passiert?", nextId: 90}]
    }, {
        id: 38,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 91}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 92
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 93}]
    }, {
        id: 39,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 94
        }, {
            text: "Denkst du oft daran zurück?", nextId: 95
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 96}]
    }, {
        id: 40,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Okay. wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 97
        }, {
            text: "Okay. Wann ist das Erlebnis ungefähr passiert?", nextId: 98
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 99}]
    }, {
        id: 41,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Doch, ich glaube dir. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 100
        }, {
            text: "Mach dir keine Sorgen, ich glaube dir. Belastet es dich im Alltag?", nextId: 101
        }, {text: "Ich glaube dir, alles gut. War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 102}]
    }, {
        id: 42,
        question: "Ich war wie gelähmt und wollte nur schnell weg.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 103}, {
            text: "Belastet es dich im Alltag?", nextId: 104
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 105}]
    }, {
        id: 43,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 106
        }, {
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 107
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 108}]
    }, {
        id: 44,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 109
        }, {
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 110
        }, {text: "Denkst du oft daran zurück?", nextId: 111}]
    }, {
        id: 45,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 112
        }, {
            text: "Denkst du oft daran zurück?", nextId: 113
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 114}]
    }, {
        id: 46,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 115
        }, {
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 116
        }, {text: "Denkst du oft daran zurück?", nextId: 117}]
    }, {
        id: 47,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 118
        }, {
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 119
        }, {text: "Belastet es dich im Alltag?", nextId: 120}]
    }, {
        id: 48, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 121
        }, {text: "Denkst du oft daran zurück?", nextId: 122}, {text: "Belastet es dich im Alltag?", nextId: 123}]
    }, {
        id: 49,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 124
        }, {
            text: "Denkst du oft daran zurück?", nextId: 125
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 126}]
    }, {
        id: 50,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 127
        }, {
            text: "Belastet es dich im Alltag?", nextId: 128
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 129}]
    }, {
        id: 51,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Belastet es dich im Alltag?", nextId: 130
        }, {
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 131
        }, {text: "Denkst du oft daran zurück?", nextId: 132}]
    }, {
        id: 52,
        question: "Ich war wie gelähmt und wollte nur schnell weg.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Belastet es dich im Alltag?", nextId: 135
        }]
    }, {
        id: 53,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Tatsächlich kann ich das gut nachvollziehen. Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 54,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 55,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 56,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 57, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Belastet es dich im Alltag?", nextId: 135
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 58,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {
            text: "Tatsächlich kann ich das gut nachvollziehen. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }]
    }, {
        id: 59,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 60,
        question: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
        answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 61,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }, {
            text: "Tatsächlich kann ich das gut nachvollziehen. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 62,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 63, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 64,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 65, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 66,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 67,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. Und welche Emotionen verspürst du, wenn du daran zurückdenkst?",
            nextId: 137
        }, {
            text: "Tatsächlich kann ich das gut nachvollziehen. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 68, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 69,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 70,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 71,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Belastet es dich im Alltag?", nextId: 135
        }]
    }, {
        id: 72,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{text: "Mach dir keine Sorgen, ich glaube dir. Belastet es dich im Alltag?", nextId: 135}, {
            text: "Tatsächlich kann ich das gut nachvollziehen. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }]
    }, {
        id: 73,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 74,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}]
    }, {
        id: 75,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Tatsächlich kann ich das gut nachvollziehen. Und welche Emotionen verspürst du, wenn du daran zurückdenkst?",
            nextId: 137
        }, {text: "Ich glaube dir. War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 76,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Belastet es dich im Alltag?", nextId: 135
        }]
    }, {
        id: 77,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}]
    }, {
        id: 78,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, das ist normal und ich glaube dir. Belastet es dich im Alltag?", nextId: 135
        }, {
            text: "Mach dir keine Sorgen, das ist normal und ich glaube dir. Und welche Emotionen verspürst du, wenn du daran zurückdenkst?",
            nextId: 137
        }]
    }, {
        id: 79,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Das ist nach solch einem Erlebnis nachvollziehbar. Wann ist das ungefähr passiert?", nextId: 134
        }, {
            text: "Das ist nach solch einem Erlebnis nachvollziehbar. War das  deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }]
    }, {
        id: 80,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, das ist normal und ich glaube dir. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }, {text: "Mach dir keine Sorgen, das ist normal und ich glaube dir. Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 81,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Belastet es dich im Alltag?", nextId: 135
        }]
    }, {
        id: 82,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Das ist nach solch einem Erlebnis nachvollziehbar. Denkst du oft daran zurück?", nextId: 136
        }, {
            text: "Das ist nach solch einem Erlebnis nachvollziehbar. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }]
    }, {
        id: 83,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Denkst du oft daran zurück?", nextId: 136}, {
            text: "Belastet es dich im Alltag?", nextId: 135
        }]
    }, {
        id: 84,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 85,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{text: "Tatsächlich kann ich das gut nachvollziehen. Denkst du oft daran zurück?", nextId: 136}, {
            text: "Mach dir keine Sorgen, das ist normal und ich glaube dir trotzdem. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }]
    }, {
        id: 86,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Denkst du oft daran zurück?", nextId: 136
        }]
    }, {
        id: 87,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 88,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 89,
        question: "Ich war wie gelähmt und wollte nur schnell weg.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Denkst du oft daran zurück?", nextId: 136
        }]
    }, {
        id: 90,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Tatsächlich kann ich das gut nachvollziehen. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Mach dir keine Sorgen, ich glaube dir. Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 91,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, das ist normal und ich glaube dir trotzdem. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }, {
            text: "Mach dir keine Sorgen, das ist normal und ich glaube dir trotzdem. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 92, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Wann ist das ungefähr passiert?", nextId: 134}]
    }, {
        id: 93,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 94, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 95,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf-",
        answers: [{text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 96,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Denkst du oft daran zurück?", nextId: 136}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 97, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 98,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {
            text: "Mach dir keine Sorgen, ich glaube dir. War das eigentlich deine erste Erfahrung mit Rassismus?",
            nextId: 138
        }]
    }, {
        id: 99,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Wann ist das ungefähr passiert?", nextId: 134}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 100, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "War das deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 101,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 102,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 103,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, ich glaube dir. Belastet es dich im Alltag?", nextId: 135
        }, {text: "Mach dir keine Sorgen, ich glaube dir. War das deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 104,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }, {text: "War das deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 105,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Belastet es dich im Alltag?", nextId: 135}, {
            text: "Wann ist das ungefähr passiert?", nextId: 134
        }]
    }, {
        id: 106, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 107,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 108,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 109,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 110,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 111,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 112,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Denkst du oft daran zurück?", nextId: 136
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 113,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 114,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 115, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Denkst du oft daran zurück?", nextId: 136
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 116,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Denkst du oft daran zurück?", nextId: 136}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 117,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 118, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Belastet es dich im Alltag?", nextId: 135
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 119,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Belastet es dich im Alltag?", nextId: 135}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 120,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}, {
            text: "Wenn wir noch einmal an den Vorfall zurückdenken: wie hattest du an dem Abend darauf reagiert?",
            nextId: 133
        }]
    }, {
        id: 121,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{text: "Belastet es dich im Alltag?", nextId: 135}, {
            text: "Denkst du oft daran zurück?", nextId: 136
        }]
    }, {
        id: 122,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Belastet es dich im Alltag?", nextId: 135
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 123,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 124,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Denkst du oft daran zurück?", nextId: 136}]
    }, {
        id: 125,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138
        }, {text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}]
    }, {
        id: 126,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Denkst du oft daran zurück?", nextId: 136
        }, {text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137}]
    }, {
        id: 127,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Belastet es dich im Alltag?", nextId: 135
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 128,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "War das eigentlich deine erste Erfahrung mit Rassismus?", nextId: 138}]
    }, {
        id: 129,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 130,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{text: "Okay, verständlich. Denkst du oft daran zurück?", nextId: 136}, {
            text: "Das ist nach solch einem Erlebnis nachvollziehbar. Und welche Emotionen verspürst du, wenn du daran zurückdenkst?",
            nextId: 137
        }]
    }, {
        id: 131,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{text: "Denkst du oft daran zurück?", nextId: 136}, {
            text: "Belastet es dich im Alltag?", nextId: 135
        }]
    }, {
        id: 132,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Und welche Emotionen verspürst du, wenn du daran zurückdenkst?", nextId: 137
        }, {text: "Belastet es dich im Alltag?", nextId: 135}]
    }, {
        id: 133, question: "Ich war wie gelähmt und wollte nur schnell weg.", answers: [{
            text: "Okay. Befindest du dich in der ersten Phase der Traumaverarbeitung?", nextId: 139
        }, {
            text: "Okay. Befindest du dich in der zweiten Phase der Traumaverarbeitung?", nextId: 140
        }, {text: "Okay. Befindest du dich in der dritten Phase der Traumaverarbeitung?", nextId: 141}]
    }, {
        id: 134,
        question: "Ähm… also abends… aber wann? Oh Gott, das wirst du mir nicht mal glauben, aber ich weiss es einfach nicht mehr.",
        answers: [{
            text: "Mach dir keine Sorgen, das ist völlig normal, ich glaube dir. Befindest du dich in der ersten Phase der Traumaverarbeitung?",
            nextId: 139
        }, {
            text: "Mach dir keine Sorgen, das ist völlig normal, ich glaube dir. Befindest du dich in der zweiten Phase der Traumaverarbeitung?",
            nextId: 140
        }, {
            text: "Mach dir keine Sorgen, das ist völlig normal, ich glaube dir. Befindest du dich in der dritten Phase der Traumaverarbeitung?",
            nextId: 141
        }]
    }, {
        id: 135,
        question: "Auch wenn ich es versuche zu verdrängen, lautet die Antwort oft ja. Ich kann dann nicht mal rausgehen… liege dann oft nur erschöpft rum und mache nix.",
        answers: [{
            text: "Okay. Befindest du dich in der ersten Phase der Traumaverarbeitung?", nextId: 139
        }, {
            text: "Okay. Befindest du dich in der zweiten Phase der Traumaverarbeitung?", nextId: 140
        }, {text: "Okay. Befindest du dich in der dritten Phase der Traumaverarbeitung?", nextId: 141}]
    }, {
        id: 136,
        question: "Ja schon, eigentlich bei so ziemlich allem, was ich mache. Verdrängen funktioniert nur manchmal, es ist immer in meinem Hinterkopf.",
        answers: [{
            text: "Okay. Befindest du dich in der ersten Phase der Traumaverarbeitung?", nextId: 139
        }, {
            text: "Okay. Befindest du dich in der zweiten Phase der Traumaverarbeitung?", nextId: 140
        }, {text: "Okay. Befindest du dich in der dritten Phase der Traumaverarbeitung?", nextId: 141}]
    }, {
        id: 137,
        question: "Sehr angespannt… vielleicht… Wut? Unglaube? Bin total adrenalingeladen dann immer… ich weiss nicht recht.",
        answers: [{
            text: "Okay. Befindest du dich in der ersten Phase der Traumaverarbeitung?", nextId: 139
        }, {
            text: "Okay. Befindest du dich in der zweiten Phase der Traumaverarbeitung?", nextId: 140
        }, {text: "Okay. Befindest du dich in der dritten Phase der Traumaverarbeitung?", nextId: 141}]
    }, {
        id: 138,
        question: "Leider nicht, aber das hat mich am meisten getroffen… ich weiss nicht mal warum, ich bin so fertig mit allem derzeit.",
        answers: [{
            text: "Okay. Befindest du dich in der ersten Phase der Traumaverarbeitung?", nextId: 139
        }, {
            text: "Okay. Befindest du dich in der zweiten Phase der Traumaverarbeitung?", nextId: 140
        }, {text: "Okay. Befindest du dich in der dritten Phase der Traumaverarbeitung?", nextId: 141}]
    }, {
        id: 139,
        question: "Super! Bayesh befindet sich tatsächlich in der ersten Phase der Traumaverarbeitung, der sogenannten Schockphase. Sie ist gekennzeichnet durch bspw. ein unklares Einordnungsvermögen der Gefühle und sog. Ohnmacht.",
        answers: [{text: "Neustart", nextId: 1}, {text: "anderen Gesprächsverlauf erhalten", nextId: 201}]
    }, {
        id: 140,
        question: "Das war leider nicht richtig, sie befindet sich nicht in der zweiten Phase. Versuche es noch einmal.",
        answers: [{text: "Neustart", nextId: 1}, {
            text: "zurück zur letzten Frage", nextId: 142
        }]
    }, {
        id: 141,
        question: "Das war leider nicht richtig, sie befindet sich nicht in der dritten Phase. Versuche es noch einmal.",
        answers: [{text: "Neustart", nextId: 1}, {
            text: "zurück zur letzten Frage", nextId: 142
        }]
    }, {
        id: 142, question: "", answers: [{
            text: "Befindest du dich in der ersten Phase der Traumaverarbeitung?", nextId: 139
        }, {
            text: "Befindest du dich in der zweiten Phase der Traumaverarbeitung?", nextId: 140
        }, {text: "Befindest du dich in der dritten Phase der Traumaverarbeitung?", nextId: 141}]
    },


    {
        id: 201,
        question: "Hallo, mein Name ist Bayesh.",
        answers: [{text: "Hallo Bayesh, warum bist du heute hier?", nextId: 202}, {
            text: "Hi, wie geht es dir?", nextId: 215
        }, {text: "Hey, wie kann ich dir helfen?", nextId: 208}]
    }, {
        id: 202,
        question: "Ich habe letztens was Schlimmes erlebt und würde gern drüber reden.",
        answers: [{text: "Was ist denn passiert?", nextId: 203}, {
            text: "Doof gelaufen.", nextId: 216
        }, {text: "Na dann schieß mal los.", nextId: 203}]
    }, {
        id: 203,
        question: "Ich wurde auf dem Weg von einer Gruppe von Jugendlichen beleidigt und mit einer Bananenschale beworfen.",
        answers: [{text: "Das tut mir leid, wie ging es dir in diesem Moment?", nextId: 204}, {
            text: "Doof gelaufen.", nextId: 216
        }, {text: "Das ist echt peinlich.", nextId: 213}]
    }, {
        id: 204, question: "Ich war schockiert und konnte nichts dagegen sagen oder machen.", answers: [{
            text: "Das kann ich mir vorstellen. War das deine erste Erfahrung mit Rassismus?", nextId: 205
        }, {text: "Das ist echt peinlich.", nextId: 213}, {
            text: "War das deine erste Erfahrung mit Rassismus?", nextId: 205
        }]
    }, {
        id: 205,
        question: "Nicht die allererste. Aber es war das erste Mal, dass ich so direkt und offensichtlich beleidigt wurde.",
        answers: [{
            text: "Okay, tut mir leid. Wie geht es dir mittlerweile?", nextId: 206
        }, {
            text: "Okay, verstehe, wie geht es dir jetzt damit?", nextId: 206
        }, {text: "Denkst du noch oft darüber nach?", nextId: 207}]
    }, {
        id: 206, question: "Schon besser, denke ich. Ich denke nicht mehr die ganze Zeit darüber nach.", answers: [{
            text: "Wirkt sich diese Erfahrung noch negativ auf deinen Alltag aus?", nextId: 207
        }, {
            text: "Hat das Erlebnis noch starken Einfluss auf dein Leben?", nextId: 207
        }, {text: "Bist du verängstigt, wenn du an den Vorfall zurückdenkst?", nextId: 207}]
    }, {
        id: 207,
        question: "Es hält sich in Grenzen. Mittlerweile habe ich weniger Angst und mache mit meinem Leben so gut es geht weiter. ",
        answers: [{
            text: "Befindest du dich in der ersten Phase der Traumaverarbeitung?.", nextId: 220
        }, {
            text: "Befindest du dich in der zweiten Phase der Traumaverarbeitung?.", nextId: 222
        }, {text: "Befindest du dich in der dritten Phase der Traumaverarbeitung?.", nextId: 221}]
    }, {
        id: 208, question: "Ich bräuchte jemanden zum reden.", answers: [{text: "Dafür bin ich da.", nextId: 209}, {
            text: "Na dann schieß mal los.", nextId: 203
        }, {text: "Was ist denn passiert?", nextId: 203}]
    }, {
        id: 209, question: "Das ist gut.", answers: [{text: "Was ist denn passiert?", nextId: 203}, {
            text: "Finde ich auch.", nextId: 210
        }, {text: "Dafür werde ich ja auch bezahlt.", nextId: 210}]
    }, {
        id: 210,
        question: "Ja...",
        answers: [{text: "Was ist denn passiert?", nextId: 203}, {text: "Genau.", nextId: 211}, {
            text: "...", nextId: 214
        }]
    }, {
        id: 211, question: "...", answers: [{text: "Sonst alles gut bei dir?", nextId: 212}, {
            text: "...", nextId: 214
        }, {text: "Was ist denn passiert?", nextId: 203}]
    }, {
        id: 212,
        question: "Nicht wirklich.",
        answers: [{text: "...", nextId: 214}, {text: "Nicht mein Problem.", nextId: 213}, {
            text: "Wieso, was ist los?", nextId: 203
        }]
    }, {
        id: 213, question: "Das ist echt gemein.", answers: [{text: "Joa.", nextId: 214}, {
            text: "Ist mir egal.", nextId: 214
        }, {text: "Okay, tut mir leid. Wie geht es dir mittlerweile?", nextId: 206}]
    }, {
        id: 214,
        question: "Gespräch beendet, du hast Bayesh nicht geholfen. Versuche es noch einmal.",
        answers: [{text: "Neustart", nextId: 201}]
    }, {
        id: 215, question: "Naja, geht so.", answers: [{text: "Wieso, was ist los?", nextId: 202}, {
            text: "Klingt nicht so gut.", nextId: 216
        }, {text: "Das ist doof.", nextId: 216}]
    }, {
        id: 216, question: "Ja...", answers: [{text: "Was ist denn passiert? ", nextId: 203}, {
            text: "Und jetzt?", nextId: 218
        }, {text: "Da weiss ich jetzt auch nicht weiter.", nextId: 217}]
    }, {
        id: 217, question: "Okay, also kannst du mir nicht helfen?", answers: [{text: "Nein, tschüss.", nextId: 223}, {
            text: "Ich glaube nicht.", nextId: 223
        }, {text: "Wie soll ich dir denn helfen?", nextId: 218}]
    }, {
        id: 218,
        question: "Ich weiss nicht, deswegen bin ich hier.",
        answers: [{text: "Was ist dir denn passiert?", nextId: 203}, {text: "Hmm okay.", nextId: 219}, {
            text: "Aha.", nextId: 219
        }]
    }, {
        id: 219, question: "...", answers: [{text: "Was ist dir überhaupt passiert?", nextId: 203}, {
            text: "...", nextId: 223
        }, {text: "Ich bin überfragt.", nextId: 223}]
    }, {
        id: 220,
        question: "Das ist leider nicht die richtige Phase, sie befindet sich nicht in der ersten. Versuch es nochmal.",
        answers: [{text: "Neustart", nextId: 201}, {text: "zurück zur letzten Frage", nextId: 207}

        ]
    }, {
        id: 221,
        question: " Glückwunsch, du hast die richtige Traumaphase erkannt, die dritte! Sie ist geprägt durch eine wieder höhere Priorisierung des Alltagsleben und dem Abklingen der Symptome wie z.B. Angst.",
        answers: [{text: "Neustart", nextId: 201}, {text: "anderen Gesprächsverlauf erhalten", nextId: 300}]
    }, {
        id: 222,
        question: "Das ist leider nicht die richtige Phase, sie befindet sich nicht in der zweiten. Versuch es nochmal.",
        answers: [{text: "Neustart", nextId: 201}, {text: "zurück zur letzten Frage", nextId: 207}

        ]
    }, {
        id: 223,
        question: "Gespräch beendet, du hast Bayesh nicht geholfen. Versuche es noch einmal.",
        answers: [{text: "Neustart", nextId: 201}

        ]
    }, {
        id: 300, question: "Hallo, ich bin Bayesh.", answers: [{text: "Hallo, Bayesh, wie geht es dir?", nextId: 301}, {
            text: "Hallo", nextId: 302
        }, {text: "Warum bist du heute hier?", nextId: 303}]
    }, {
        id: 301, question: "Nah… leider nicht so gut.", answers: [{text: " Magst du darüber reden?", nextId: 303}, {
            text: "Ist was passiert?", nextId: 303
        }, {text: "Mhh... doof.", nextId: 305}]
    }, {
        id: 302, question: "Hi.", answers: [{text: "...", nextId: 306}, {
            text: "Warum bist du heute hier?", nextId: 307
        }, {text: "Wie geht es dir?", nextId: 301}]
    }, {
        id: 303,
        question: "Ich... ich weiß nicht genau. Irgendwas fühlt sich falsch an, seit diesem Vorfall. Es hat mich mehrgetroffen als ich gedacht hätte. Ich komme einfach nicht darüber hinweg.",
        answers: [{
            text: "Was denn für ein Vorfall?", nextId: 307
        }, {
            text: "Das ist in Ordnung. Darf ich dich fragen was genau passiert ist?", nextId: 307
        }, {text: "Wie lange ist das denn schon her?", nextId: 307}]
    }, {
        id: 305,
        question: "Deswegen bin ich hier und will darüber reden.",
        answers: [{text: "Okay, warum geht es dir denn schlecht?", nextId: 303}, {
            text: "Ich aber nicht.", nextId: 306
        }, {text: "Was ist denn passiert?", nextId: 307}]
    }, {
        id: 306,
        question: "Gespräch beendet, du hast Bayesh nicht geholfen. Versuche es noch einmal.",
        answers: [{text: "Neustart", nextId: 300}]
    }, {
        id: 307,
        question: "Ja… also, es war vor ein paar Tagen. Ich war auf dem Weg, eine Freundin zu besuchen, ganz normal, durch die Innenstadt. Dann, plötzliche, waren da diese Männer. Sie haben angefangen, mich anzuschreien… die haben Sachen gesagt wie „Verpiss dich zurück in dein Land“ und „Du gehörst hier nicht her“. Es war so laut und… aggressiv. Ich konnte gar nicht reagieren. Dann haben sie auch och Müll nach mir geworfen, einfach so, mitten in der Stadt und keiner hat mir geholfen.",
        answers: [{
            text: "Das klingt ja furchtbar. Wie geht es dir jetzt damit?", nextId: 308
        }, {
            text: "Wie schrecklich, ich weiß gerade gar nicht wie ich damit umgehen soll.", nextId: 309
        }, {text: "Weißt du noch wie du in diesem Moment reagiert hast?", nextId: 310}]
    }, {
        id: 308,
        question: "Ich fühl mich immer noch wie in diesem Moment gefangen und durchleb‘ ihn immer und immer wieder. Wenn ich daran zurückdenke fühl ich mich so... leer. Und irgendwie machtlos. Ich frag mich ständig warum ich nichts machen konnte und warum ich nicht reagiert hab. Aber vor allem fühl ich mich... klein. Als hätte ich überhaupt keine Kontrolle über das, was passiert ist.",
        answers: [{
            text: "Denkst du, du hättest das irgendwie verhindern können?", nextId: 312
        }, {text: "Schränkt dich das erlebte immer noch sehr ein?", nextId: 311}, {
            text: "Es ist okay, dass du dich in diesem Moment so gefühlt hast. Belastet dich das erlebte immer noch sehr?",
            nextId: 311
        }]
    }, {
        id: 309,
        question: "System: Es ist in Ordnung, wenn du dich in dieser Situation überfordert fühlst. Wenn du dich unwohl fühlst, wende dich bitte an die Kursleitung oder wenn du dich dazu bereit fühlst, starte gerne einen neuen Versuch.",
        answers: [{text: "Neustart", nextId: 300}]
    }, {
        id: 310,
        question: "Ich hatte einfach Angst, hab nichts gesagt und bin so schnell wie möglich weiter. Wer weiß was sonst noch passiert wäre.",
        answers: [{
            text: "Hast du diese Angst immer noch?", nextId: 311
        }, {text: "Ich glaube, ich an deiner Stelle hätte auch Angst gehabt.", nextId: 312}, {
            text: "Vermutlich hast du in dem Moment richtig reagiert. Wie geht es dir denn jetzt damit?", nextId: 308
        }]
    }, {
        id: 311,
        question: "Ja, schon. Seitdem gehe ich nur ungerne raus, vor allem, wenn es in der Stadt mal wieder voll ist. Dann bin ich immer irgendwie angespannt, fast so, als müsste ich aufpassen, dass das nicht nochmal passiert. Selbst Schlafen fällt mir schwer, weil die Bilder dann immer wieder hochkommen.",
        answers: [{
            text: "Das klingt so, als würdest du dich in der ersten Phase Traumaverarbeitung befinden?", nextId: 313
        }, {
            text: "Nach allem was du mir netterweise erzählt hast, klingt das so, als würdest du dich in der zweiten Phase der Traumaverarbeitung befinden?",
            nextId: 314
        }, {text: "Klingt so als wärst du in der dritten Phase der Traumaverarbeitung?", nextId: 313}]
    }, {
        id: 312,
        question: "Vielleicht hätte ich anderes reagieren sollen, irgendwas sagen oder mich wehren. Aber gleichzeitig ging das alles so schnell... ich weiß nicht ob das irgendetwas geändert hätte. Trotzdem frag ich mich manchmal ob es nicht vielleicht meine Schuld war, dass es soweit gekommen ist.",
        answers: [{
            text: "Ich kann verstehen, dass dich das immer noch sehr belastet aber das war definitiv nicht deine Schuld.",
            nextId: 311
        }, {text: "Belastet dich das immer noch in deinem Alltag?", nextId: 311}, {
            text: "Also wenn du mich fragst hättest du in dem Moment nicht groß anderes reagieren können. Ich hoffe, dass dich das in deinem täglichen Leben nicht zu sehr belastet.",
            nextId: 311
        }]
    }, {
        id: 313,
        question: "Nein, das ist leider nicht korrekt. Schau dir nochmal die Merkmale der einzelnen Phasen an und versuch es doch einfach nochmal. ☺ Falls du Fragen haben solltest oder etwas nicht verstanden hast, wende dich bitte an die Kursleitung.",
        answers: [{text: "Neustart", nextId: 300}, {
            text: "zurück zur letzten Frage", nextId: 311
        }

        ]
    }, {
        id: 314,
        question: "Ja, das stimmt. Das klingt tatsächlich alles nach der zweiten Phase. Es ist oft so, dass sich die Personen in dieser Phase sehr stark von den Ereignissen betroffen fühlen, was zu Gefühlen wie Ohnmacht und Hoffnungslosigkeit führen kann. Gut gemacht. ☺",
        answers: [{text: "Neustart", nextId: 300}, {text: "anderen Gesprächsverlauf erhalten", nextId: 1}]
    }


];
const phases = [1, 201, 300];
let currentQuestionId = phases[Math.floor(Math.random() * (4 - 1))]; // Startpunkt
console.log(currentQuestionId);

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
        button.classList.add("answer-1", "w-33", "mb-5", "col");
        button.onclick = () => displayQuestion(answer.nextId);
        answersDiv.appendChild(button);
    });
}

// Initiale Frage anzeigen
displayQuestion(currentQuestionId);