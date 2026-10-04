// =====================================================
// TRAININGSDEFINITIONEN
// =====================================================

const gymA = [
    {name:"Kniebeuge oder Beinpresse", sets:"4 × 6–8"},
    {name:"Romanian Deadlift", sets:"3 × 6–8"},
    {name:"Bulgarian Split Squat", sets:"3 × 8 je Bein"},
    {name:"Beinbeuger", sets:"3 × 8–12"},
    {name:"Wadenheben", sets:"3 × 10–15"},
    {name:"Beinstrecker", sets:"3 × 10–12"},
    {name:"Core", sets:"5–10 Minuten"}
];

const gymB = [
    {name:"Single Leg Press", sets:"3 × 8 je Seite"},
    {name:"Step-ups", sets:"3 × 8 je Seite"},
    {name:"Single Leg Romanian Deadlift", sets:"3 × 8 je Seite"},
    {name:"Reverse Lunges", sets:"3 × 8 je Seite"},
    {name:"Beinbeuger", sets:"3 × 10–12"},
    {name:"Wadenheben einbeinig", sets:"3 × 12–15"},
    {name:"Abduktoren", sets:"3 × 12–15"}
];

const plyos = [
    {name:"Pogo Jumps", sets:"3 × 15"},
    {name:"Box Jumps", sets:"3 × 5"},
    {name:"Skater Jumps", sets:"3 × 6 je Seite"}
];


// =====================================================
// LAUFPLAN
// =====================================================

function getRunningPlan(week) {

    if (week <= 2) {

        return [

            {
                title:"Lauf 1",
                type:"Lockerer Dauerlauf",
                category:"run",

                exercises:[
                    "6 km locker",
                    "Zielpace ca. 6:20–6:40 min/km"
                ]
            },

            {
                title:"Lauf 2",
                type:"Lauf + Strides",
                category:"run",

                exercises:[
                    "5 km locker",
                    "4 × 15 Sekunden zügig",
                    "60–90 Sekunden gehen oder traben"
                ]
            }

        ];
    }


    if (week <= 4) {

        return [

            {
                title:"Lauf 1",
                type:"Lockerer Dauerlauf",
                category:"run",
                exercises:[
                    "6–7 km locker"
                ]
            },

            {
                title:"Lauf 2",
                type:"Intervalle",
                category:"run",

                exercises:[
                    "10 Minuten locker einlaufen",
                    "6 × 1 Minute zügig",
                    "Jeweils 2 Minuten locker",
                    "10 Minuten auslaufen"
                ]
            }

        ];
    }


    if (week <= 6) {

        return [

            {
                title:"Lauf 1",
                type:"Lockerer Dauerlauf",
                category:"run",

                exercises:[
                    "6–8 km locker"
                ]
            },

            {
                title:"Lauf 2",
                type:"Tempo & Beschleunigung",
                category:"run",

                exercises:[
                    "10 Minuten einlaufen",
                    "5 × 2 Minuten schnell",
                    "Jeweils 2 Minuten locker",
                    "4 × 20 m Beschleunigung bei 70–80 %"
                ]
            }

        ];
    }


    if (week <= 8) {

        return [

            {
                title:"Lauf 1",
                type:"Lockerer Dauerlauf",
                category:"run",

                exercises:[
                    "6–8 km locker"
                ]
            },

            {
                title:"Athletik",
                type:"Beschleunigen & Bremsen",
                category:"run",

                exercises:[
                    "10 Minuten einlaufen",
                    "4 × 20 m bei 70 %",
                    "4 × 20 m bei 80 %",
                    "4 × 20 m bei 85–90 %",
                    "6 × Beschleunigen und kontrolliert abbremsen",
                    "5 × 2 Minuten zügig / 2 Minuten locker"
                ]
            }

        ];
    }


    if (week <= 10) {

        return [

            {
                title:"Lauf 1",
                type:"Lockerer Dauerlauf",
                category:"run",

                exercises:[
                    "6–8 km locker"
                ]
            },

            {
                title:"Athletik",
                type:"Richtungswechsel",
                category:"run",

                exercises:[
                    "10–15 Minuten Warm-up",
                    "4 × 20 m bei 80 %",
                    "4 × 20 m bei 90 %",
                    "3 × 30 m bei 90–95 %",
                    "5 × 5-10-5 Shuttle",
                    "5–6 Zick-Zack-Läufe",
                    "6 × 1 Minute schnell / 1 Minute locker"
                ]
            }

        ];
    }


    return [

        {
            title:"Lauf 1",
            type:"Lockerer Lauf",
            category:"run",

            exercises:[
                "5–7 km sehr locker"
            ]
        },

        {
            title:"Return to Sport",
            type:"Sportbelastung",
            category:"run",

            exercises:[
                "10–15 Minuten Warm-up",
                "4 × 20 m bei 80 %",
                "4 × 20 m bei 90 %",
                "4 × 20 m bei 95–100 %",
                "5 × 5-10-5 Shuttle",
                "5 × 20–30 Sekunden Side Shuffles",
                "8 × Stop-and-Go",
                "8 × 30 Sekunden schnell / 30 Sekunden locker"
            ]
        }

    ];
}


// =====================================================
// PHASEN
// =====================================================

function getPhase(week) {

    if (week <= 2) {

        return {
            name:"Grundlage",
            description:
                "Kraft stabilisieren und lockere Laufbelastung festigen."
        };
    }


    if (week <= 4) {

        return {
            name:"Geschwindigkeit",
            description:
                "Erste kontrollierte Temporeize ergänzen."
        };
    }


    if (week <= 6) {

        return {
            name:"Sportaufbau",
            description:
                "Beschleunigungen und erste Plyometrie."
        };
    }


    if (week <= 8) {

        return {
            name:"Beschleunigen & Bremsen",
            description:
                "Kontrollierte Sprints und Abbremsbewegungen."
        };
    }


    if (week <= 10) {

        return {
            name:"Richtungswechsel",
            description:
                "Laterale Belastungen und sportnahe Bewegungen."
        };
    }


    return {
        name:"Return to Sport",
        description:
            "Hohe Intensitäten und sportartspezifische Belastung."
    };
}


// =====================================================
// TRAININGS PRO WOCHE
// =====================================================

function getTrainings(week) {

    const gymBExercises =
        week >= 5
            ? [...gymB,...plyos]
            : gymB;


    const runs =
        getRunningPlan(week);


    return [

        {
            title:"Gym A",
            type:"Kraft",
            category:"gym",

            exercises:
                gymA.map(
                    x => x.name+" – "+x.sets
                ),

            gymExercises:gymA
        },


        {
            title:"Gym B",

            type:
                week >= 5
                    ? "Stabilität & Plyometrie"
                    : "Stabilität & einbeinig",

            category:"gym",

            exercises:
                gymBExercises.map(
                    x => x.name+" – "+x.sets
                ),

            gymExercises:gymBExercises
        },


        runs[0],

        runs[1]

    ];
}


// =====================================================
// APP STATUS
// =====================================================

let currentWeek = 1;

let activeTrainingIndex = null;


// =====================================================
// SPEICHERN
// =====================================================

function getLogID(week,index) {

    return "rts-log-"+week+"-"+index;

}


function getTrainingLog(week,index) {

    const data =
        localStorage.getItem(
            getLogID(week,index)
        );

    return data
        ? JSON.parse(data)
        : null;

}


function saveTrainingLog(
    week,
    index,
    data
) {

    localStorage.setItem(

        getLogID(week,index),

        JSON.stringify(data)

    );

}


// =====================================================
// ALLE LOGS
// =====================================================

function getAllLogs() {

    const logs = [];


    for (
        let week=1;
        week<=12;
        week++
    ) {

        for (
            let index=0;
            index<4;
            index++
        ) {

            const log =
                getTrainingLog(
                    week,
                    index
                );


            if (log) {

                logs.push({
                    ...log,
                    index
                });

            }

        }

    }


    return logs;

}

// =====================================================
// WOCHENÜBERSICHT
// =====================================================

// =====================================================
// DATUM DES TRAININGSPLANS
// =====================================================

// Woche 1 beginnt am Montag, 05.10.2026
const planStartDate = new Date(2026, 9, 5);

function getDateForDay(week, dayIndex) {

    const date = new Date(planStartDate);

    // Wochen + Tage seit Beginn addieren
    date.setDate(
        planStartDate.getDate()
        + ((week - 1) * 7)
        + dayIndex
    );

    return date;
}

function formatDate(date) {

    return date.toLocaleDateString(
        "de-DE",
        {
            day: "2-digit",
            month: "2-digit"
        }
    );
}

const weeklySchedule = [
    {
        day: "Montag",
        short: "Mo",
        trainingIndex: 0
    },
    {
        day: "Dienstag",
        short: "Di",
        trainingIndex: null,
        text: "Regeneration"
    },
    {
        day: "Mittwoch",
        short: "Mi",
        trainingIndex: 2
    },
    {
        day: "Donnerstag",
        short: "Do",
        trainingIndex: 1
    },
    {
        day: "Freitag",
        short: "Fr",
        trainingIndex: null,
        text: "Trainingsfrei",
        fixedRest: true
    },
    {
        day: "Samstag",
        short: "Sa",
        trainingIndex: 3
    },
    {
        day: "Sonntag",
        short: "So",
        trainingIndex: null,
        text: "Trainingsfrei",
        fixedRest: true
    }
];


function renderWeeklyOverview() {

    const container =
        document.getElementById("weeklyCalendar");

    const trainings =
        getTrainings(currentWeek);

    const phase =
        getPhase(currentWeek);


    document
        .getElementById("weeklyOverviewPhase")
        .textContent =
        "Woche " + currentWeek + " · " + phase.name;


    container.innerHTML = "";


    weeklySchedule.forEach((day, dayIndex) => {

    const date =
        getDateForDay(
            currentWeek,
            dayIndex
        );

    const dateText =
        formatDate(date);

        const card =
            document.createElement("div");

        card.className = "day-card";


        // TRAININGSTAG
        if (day.trainingIndex !== null) {

            const training =
                trainings[day.trainingIndex];

            const log =
                getTrainingLog(
                    currentWeek,
                    day.trainingIndex
                );


            card.classList.add("training-day");


            if (log) {
                card.classList.add("completed-day");
            }


            card.innerHTML = `

                <div class="day-name">
                    ${day.day}
                    <span class="day-date">
                        ${dateText}
                    </span>
                 </div>

                <div class="day-training">

                    ${training.title}

                    <span class="day-training-type">
                        ${training.type}
                    </span>

                </div>

                <span class="day-status">

                    ${
                        log
                            ? "✓ Absolviert"
                            : "Geplant"
                    }

                </span>

            `;


            // Klick auf Tag öffnet Training
            card.style.cursor = "pointer";

            card.addEventListener("click", () => {

                openTraining(
                    day.trainingIndex
                );

            });

        }


        // FREIER TAG
        else {

            card.classList.add("rest-day");


            if (day.fixedRest) {
                card.classList.add("fixed-rest");
            }


            card.innerHTML = `

                <div class="day-name">
                    ${day.day}
                    <span class="day-date">
                        ${dateText}
                    </span>
                </div>

                <div class="day-training">
                    ${day.text}
                </div>

                <span class="day-status">

                    ${
                        day.fixedRest
                            ? "Fester Ruhetag"
                            : "Erholung"
                    }

                </span>

            `;

        }


        container.appendChild(card);

    });

}

// =====================================================
// TRAININGSPLAN ANZEIGEN
// =====================================================

function renderWeek() {

    const phase =
        getPhase(currentWeek);


    document
        .getElementById("weekTitle")
        .textContent =
        "Woche "+
        currentWeek+
        " von 12";


    document
        .getElementById("phaseTitle")
        .textContent =
        phase.name;


    document
        .getElementById("phaseHeading")
        .textContent =
        phase.name;


    document
        .getElementById("phaseDescription")
        .textContent =
        phase.description;


    const container =
        document.getElementById(
            "trainingContainer"
        );


    container.innerHTML = "";


    const trainings =
        getTrainings(currentWeek);


    trainings.forEach(
        (training,index) => {


        const log =
            getTrainingLog(
                currentWeek,
                index
            );


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "training-card";


        if (log) {

            card.classList.add(
                "completed"
            );

        }


        const list =
            training.exercises

            .map(
                exercise =>
                "<li>"+
                exercise+
                "</li>"
            )

            .join("");


        card.innerHTML = `

            <div class="training-type">

                ${training.type}

            </div>

            <h3>

                ${training.title}

            </h3>

            <ul>

                ${list}

            </ul>

            <button
                class="action-button open-training"
                data-index="${index}"
            >

                ${
                    log
                    ? "✓ Training ansehen / bearbeiten"
                    : "Training starten"
                }

            </button>

        `;


        container.appendChild(
            card
        );

    });


    document
        .querySelectorAll(
            ".open-training"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openTraining(
                        Number(
                            button.dataset.index
                        )
                    );

                }
            );

        });


    updateProgress();

    updateNavigationButtons();

    renderWeeklyOverview();

}


// =====================================================
// LETZTES GYM TRAINING FINDEN
// =====================================================

function getLastGymPerformance(
    exerciseName,
    beforeWeek
) {

    for (
        let week=beforeWeek-1;
        week>=1;
        week--
    ) {

        for (
            let index=0;
            index<2;
            index++
        ) {

            const log =
                getTrainingLog(
                    week,
                    index
                );


            if (
                log &&
                log.category === "gym" &&
                log.gym
            ) {

                const result =
                    log.gym.find(
                        x =>
                        x.exercise ===
                        exerciseName
                    );


                if (
                    result &&
                    (
                        result.weight ||
                        result.reps
                    )
                ) {

                    return {
                        ...result,
                        week
                    };

                }

            }

        }

    }


    return null;

}


// =====================================================
// TRAINING ÖFFNEN
// =====================================================

function openTraining(index) {

    activeTrainingIndex =
        index;


    const training =
        getTrainings(
            currentWeek
        )[index];


    const existing =
        getTrainingLog(
            currentWeek,
            index
        );

    const deleteButton =
        document.getElementById(
            "deleteTrainingButton"
        );

    deleteButton.style.display =
        existing
            ? "block"
            : "none";


    document
        .getElementById(
            "modalType"
        )
        .textContent =
        training.type.toUpperCase();


    document
        .getElementById(
            "modalTitle"
        )
        .textContent =
        training.title+
        " · Woche "+
        currentWeek;


    document
        .getElementById(
            "plannedTraining"
        )
        .innerHTML =

        "<ul>"+

        training.exercises
        .map(
            x =>
            "<li>"+
            x+
            "</li>"
        )
        .join("")+

        "</ul>";


    document
        .getElementById(
            "runningFields"
        )
        .style.display =

        training.category === "run"
        ? "block"
        : "none";


    document
        .getElementById(
            "gymFields"
        )
        .style.display =

        training.category === "gym"
        ? "block"
        : "none";


    if (
        training.category === "gym"
    ) {

        renderGymFields(
            training,
            existing
        );

    }


    document
        .getElementById("distance")
        .value =
        existing?.distance || "";


    document
        .getElementById("duration")
        .value =
        existing?.duration || "";


    document
        .getElementById("effort")
        .value =
        existing?.effort ?? 5;


    document
        .getElementById("painDuring")
        .value =
        existing?.painDuring ?? 0;


    document
        .getElementById("painAfter")
        .value =
        existing?.painAfter ?? 0;


    document
        .getElementById("notes")
        .value =
        existing?.notes || "";


    updateRanges();

    calculatePace();


    document
        .getElementById(
            "trainingModal"
        )
        .classList.add(
            "active"
        );

}


// =====================================================
// GYM FELDER
// =====================================================

function renderGymFields(
    training,
    existing
) {

    const container =
        document.getElementById(
            "gymFields"
        );


    container.innerHTML =
        "<h3>Trainingswerte</h3>";


    training.gymExercises
    .forEach(
        (exercise,index) => {


        const saved =
            existing?.gym?.[index]
            || {};


        const last =
            getLastGymPerformance(
                exercise.name,
                currentWeek
            );


        const div =
            document.createElement(
                "div"
            );


        div.className =
            "exercise-log";


        let lastText =
            "Noch keine vorherigen Werte";


        if (last) {

            lastText =
                "Letztes Training · Woche "+
                last.week+
                ": "+
                (
                    last.weight
                    ? last.weight+" kg"
                    : "–"
                )+
                " · "+
                (
                    last.reps
                    || "–"
                );

        }


        div.innerHTML = `

            <h4>

                ${exercise.name}

                <small>
                    (${exercise.sets})
                </small>

            </h4>


            <div class="last-performance">

                ${lastText}

            </div>


            <div class="exercise-row">

                <input
                    class="gym-weight"
                    data-index="${index}"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="Gewicht kg"
                    value="${saved.weight || ""}"
                >


                <input
                    class="gym-reps"
                    data-index="${index}"
                    type="text"
                    placeholder="Wdh. z. B. 8 / 8 / 7"
                    value="${saved.reps || ""}"
                >

            </div>

        `;


        container.appendChild(
            div
        );

    });

}


// =====================================================
// MODAL SCHLIESSEN
// =====================================================

function closeModal() {

    document
        .getElementById(
            "trainingModal"
        )
        .classList.remove(
            "active"
        );

}


// =====================================================
// TRAINING SPEICHERN
// =====================================================

document
.getElementById(
    "trainingForm"
)
.addEventListener(
    "submit",
    function(event) {


    event.preventDefault();


    const training =
        getTrainings(
            currentWeek
        )[activeTrainingIndex];


    const oldLog =
        getTrainingLog(
            currentWeek,
            activeTrainingIndex
        );


    const data = {

        week:
            currentWeek,

        title:
            training.title,

        type:
            training.type,

        category:
            training.category,

        date:
            oldLog?.date ||
            new Date()
            .toLocaleDateString(
                "de-DE"
            ),

        timestamp:
            oldLog?.timestamp ||
            Date.now(),

        effort:
            Number(
                document
                .getElementById(
                    "effort"
                )
                .value
            ),

        painDuring:
            Number(
                document
                .getElementById(
                    "painDuring"
                )
                .value
            ),

        painAfter:
            Number(
                document
                .getElementById(
                    "painAfter"
                )
                .value
            ),

        notes:
            document
            .getElementById(
                "notes"
            )
            .value

    };


    if (
        training.category === "run"
    ) {

        data.distance =
            document
            .getElementById(
                "distance"
            )
            .value;


        data.duration =
            document
            .getElementById(
                "duration"
            )
            .value;


        data.pace =
            calculatePace();

    }


    if (
        training.category === "gym"
    ) {

        data.gym = [];


        document
        .querySelectorAll(
            ".gym-weight"
        )
        .forEach(
            (input,index) => {


            const reps =
                document
                .querySelector(
                    `.gym-reps[data-index="${index}"]`
                );


            data.gym.push({

                exercise:
                    training
                    .gymExercises[index]
                    .name,

                weight:
                    input.value,

                reps:
                    reps.value

            });

        });

    }


    saveTrainingLog(

        currentWeek,

        activeTrainingIndex,

        data

    );


    closeModal();

    renderWeek();

});


// =====================================================
// PACE
// =====================================================

function calculatePace() {

    const distance =
        parseFloat(
            document
            .getElementById(
                "distance"
            )
            .value
        );


    const time =
        document
        .getElementById(
            "duration"
        )
        .value
        .trim();


    if (
        !distance ||
        !time.includes(":")
    ) {

        document
        .getElementById(
            "paceBox"
        )
        .textContent =
        "Ø Pace: –";

        return "";

    }


    const parts =
        time.split(":");


    if (
        parts.length !== 2
    ) {

        return "";

    }


    const minutes =

        Number(parts[0]) +

        Number(parts[1]) / 60;


    if (
        !Number.isFinite(minutes) ||
        minutes <= 0
    ) {

        return "";

    }


    const pace =
        minutes / distance;


    let paceMinutes =
        Math.floor(pace);


    let paceSeconds =
        Math.round(
            (
                pace -
                paceMinutes
            ) * 60
        );


    if (
        paceSeconds === 60
    ) {

        paceMinutes++;

        paceSeconds = 0;

    }


    const result =

        paceMinutes+
        ":"+
        String(
            paceSeconds
        )
        .padStart(
            2,
            "0"
        )+
        " min/km";


    document
        .getElementById(
            "paceBox"
        )
        .textContent =
        "Ø Pace: "+
        result;


    return result;

}


// =====================================================
// SLIDER
// =====================================================

function updateRanges() {

    document
    .getElementById(
        "effortValue"
    )
    .textContent =

    document
    .getElementById(
        "effort"
    )
    .value+
    "/10";


    document
    .getElementById(
        "painDuringValue"
    )
    .textContent =

    document
    .getElementById(
        "painDuring"
    )
    .value+
    "/10";


    document
    .getElementById(
        "painAfterValue"
    )
    .textContent =

    document
    .getElementById(
        "painAfter"
    )
    .value+
    "/10";

}


[
    "effort",
    "painDuring",
    "painAfter"
]
.forEach(id => {

    document
    .getElementById(id)
    .addEventListener(
        "input",
        updateRanges
    );

});


document
.getElementById(
    "distance"
)
.addEventListener(
    "input",
    calculatePace
);


document
.getElementById(
    "duration"
)
.addEventListener(
    "input",
    calculatePace
);


// =====================================================
// WOCHENFORTSCHRITT
// =====================================================

function updateProgress() {

    const trainings =
        getTrainings(
            currentWeek
        );


    let completed = 0;


    trainings.forEach(
        (training,index) => {

        if (
            getTrainingLog(
                currentWeek,
                index
            )
        ) {

            completed++;

        }

    });


    const percentage =

        completed /
        trainings.length *
        100;


    document
    .getElementById(
        "progressFill"
    )
    .style.width =

    percentage+
    "%";


    document
    .getElementById(
        "progressText"
    )
    .textContent =

    completed+
    " / "+
    trainings.length+
    " Einheiten";

}


// =====================================================
// DASHBOARD
// =====================================================

function renderDashboard() {

    const logs =
        getAllLogs();


    renderStatistics(logs);

    renderPaceChart(logs);

    renderPainChart(logs);

    renderStrengthSelector(logs);


    document
    .getElementById(
        "dashboardStatus"
    )
    .textContent =

    getPhase(currentWeek)
    .name;

}


// =====================================================
// DASHBOARD KPIs
// =====================================================

function renderStatistics(logs) {

    const runs =
        logs.filter(
            log =>
            log.category === "run"
        );


    const distance =
        runs.reduce(
            (sum,log) =>
            sum +
            (
                parseFloat(
                    log.distance
                ) || 0
            ),
            0
        );


    const effortLogs =
        logs.filter(
            log =>
            Number.isFinite(
                Number(log.effort)
            )
        );


    const painLogs =
        logs.filter(
            log =>
            Number.isFinite(
                Number(log.painAfter)
            )
        );


    const avgEffort =
        effortLogs.length
        ?
        effortLogs.reduce(
            (sum,log) =>
            sum +
            Number(log.effort),
            0
        ) /
        effortLogs.length
        :
        null;


    const avgPain =
        painLogs.length
        ?
        painLogs.reduce(
            (sum,log) =>
            sum +
            Number(log.painAfter),
            0
        ) /
        painLogs.length
        :
        null;


    document
    .getElementById(
        "statTrainings"
    )
    .textContent =
        logs.length;


    document
    .getElementById(
        "statDistance"
    )
    .textContent =
        distance.toFixed(1)+
        " km";


    document
    .getElementById(
        "statEffort"
    )
    .textContent =
        avgEffort !== null
        ?
        avgEffort.toFixed(1)
        :
        "–";


    document
    .getElementById(
        "statPain"
    )
    .textContent =
        avgPain !== null
        ?
        avgPain.toFixed(1)
        :
        "–";

}


// =====================================================
// PACE IN SEKUNDEN
// =====================================================

function paceToSeconds(
    paceString
) {

    if (!paceString) {

        return null;

    }


    const match =
        paceString.match(
            /(\d+):(\d+)/
        );


    if (!match) {

        return null;

    }


    return (
        Number(match[1]) *
        60
    ) +
    Number(match[2]);

}


// =====================================================
// GENERISCHES DIAGRAMM
// =====================================================

function createLineChart(
    container,
    data,
    options
) {

    if (
        !data ||
        data.length === 0
    ) {

        container.innerHTML = `

            <div class="chart-empty">

                Noch nicht genügend
                Trainingsdaten vorhanden.

            </div>

        `;

        return;

    }


    const width = 800;

    const height = 220;

    const padding = 45;


    const values =
        data.map(
            point =>
            point.value
        );


    let min =
        Math.min(...values);

    let max =
        Math.max(...values);


    if (
        min === max
    ) {

        min -= 1;

        max += 1;

    }


    const range =
        max-min;


    min -= range*.15;

    max += range*.15;


    function x(index) {

        if (
            data.length === 1
        ) {

            return width/2;

        }


        return (
            padding +
            index *
            (
                (
                    width -
                    2*padding
                ) /
                (
                    data.length-1
                )
            )
        );

    }


    function y(value) {

        return (

            height -
            padding -

            (
                (
                    value-min
                ) /
                (
                    max-min
                )
            ) *

            (
                height -
                2*padding
            )

        );

    }


    const points =
        data
        .map(
            (point,index) =>
            x(index)+
            ","+
            y(point.value)
        )
        .join(" ");


    let circles = "";

    let labels = "";


    data.forEach(
        (point,index) => {


        circles += `

            <circle

                cx="${x(index)}"

                cy="${y(point.value)}"

                r="5"

                fill="#2563eb">

                <title>

                    ${point.label}
                    ·
                    ${options.format(point.value)}

                </title>

            </circle>

        `;


        labels += `

            <text

                x="${x(index)}"

                y="${height-12}"

                text-anchor="middle"

                class="chart-label">

                ${point.shortLabel}

            </text>

        `;

    });


    container.innerHTML = `

        <svg
            viewBox="0 0 ${width} ${height}"
            preserveAspectRatio="none"
        >

            <line

                x1="${padding}"

                y1="${height-padding}"

                x2="${width-padding}"

                y2="${height-padding}"

                stroke="#cbd5e1"

            />


            <polyline

                points="${points}"

                fill="none"

                stroke="#2563eb"

                stroke-width="3"

                vector-effect="non-scaling-stroke"

            />


            ${circles}

            ${labels}

        </svg>

    `;

}


// =====================================================
// PACE CHART
// =====================================================

function renderPaceChart(logs) {

    const runs =
        logs

        .filter(
            log =>
            log.category === "run" &&
            paceToSeconds(
                log.pace
            ) !== null
        )

        .sort(
            (a,b) =>
            a.week-b.week ||
            a.index-b.index
        );


    const data =
        runs.map(
            log => ({

                value:
                    paceToSeconds(
                        log.pace
                    ),

                label:
                    "Woche "+
                    log.week+
                    " · "+
                    log.title,

                shortLabel:
                    "W"+log.week

            })
        );


    createLineChart(

        document
        .getElementById(
            "paceChart"
        ),

        data,

        {

            format:
                seconds => {

                    const min =
                        Math.floor(
                            seconds/60
                        );

                    const sec =
                        Math.round(
                            seconds%60
                        );

                    return (
                        min+
                        ":"+
                        String(sec)
                        .padStart(
                            2,
                            "0"
                        )+
                        " min/km"
                    );

                }

        }

    );

}


// =====================================================
// KNIE CHART
// =====================================================

function renderPainChart(logs) {

    const sorted =
        [...logs]
        .sort(
            (a,b) =>
            a.week-b.week ||
            a.index-b.index
        );


    const data =
        sorted.map(
            log => ({

                value:
                    Number(
                        log.painAfter
                    ),

                label:
                    "Woche "+
                    log.week+
                    " · "+
                    log.title,

                shortLabel:
                    "W"+log.week

            })
        );


    createLineChart(

        document
        .getElementById(
            "painChart"
        ),

        data,

        {

            format:
                value =>
                value+
                "/10"

        }

    );

}


// =====================================================
// KRAFT ÜBUNGEN
// =====================================================

function renderStrengthSelector(
    logs
) {

    const select =
        document
        .getElementById(
            "strengthExerciseSelect"
        );


    const exercises =
        new Set();


    logs.forEach(log => {

    if (
        log.category === "gym" &&
        log.gym
    ) {

        log.gym.forEach(exercise => {

            if (exercise.weight) {
                exercises.add(exercise.exercise);
            }

        });

    }

});


    const previous =
        select.value;


    select.innerHTML = "";


    if (
        exercises.size === 0
    ) {

        const option =
            document
            .createElement(
                "option"
            );


        option.textContent =
            "Noch keine Kraftdaten";


        select.appendChild(
            option
        );


        document
        .getElementById(
            "strengthChart"
        )
        .innerHTML = `

            <div class="chart-empty">

                Trage beim Krafttraining
                Gewichte ein, um deine
                Entwicklung zu sehen.

            </div>

        `;


        return;

    }


    [...exercises]
    .forEach(
        exercise => {

        const option =
            document
            .createElement(
                "option"
            );


        option.value =
            exercise;


        option.textContent =
            exercise;


        select.appendChild(
            option
        );

    });


    if (
        [...exercises]
        .includes(previous)
    ) {

        select.value =
            previous;

    }


    renderStrengthChart(
        logs,
        select.value
    );

}


// =====================================================
// KRAFT CHART
// =====================================================

function renderStrengthChart(
    logs,
    exerciseName
) {

    const data = [];


    logs
    .filter(
        log =>
        log.category === "gym" &&
        log.gym
    )
    .sort(
        (a,b) =>
        a.week-b.week ||
        a.index-b.index
    )
    .forEach(log => {


        const exercise =
            log.gym.find(
                item =>
                item.exercise ===
                exerciseName
            );


        if (
            exercise &&
            parseFloat(
                exercise.weight
            )
        ) {

            data.push({

                value:
                    parseFloat(
                        exercise.weight
                    ),

                label:
                    "Woche "+
                    log.week,

                shortLabel:
                    "W"+log.week

            });

        }

    });


    createLineChart(

        document
        .getElementById(
            "strengthChart"
        ),

        data,

        {

            format:
                value =>
                value+
                " kg"

        }

    );

}


// =====================================================
// VERLAUF
// =====================================================

function renderHistory() {

    const container =
        document
        .getElementById(
            "historyContainer"
        );


    const logs =
        getAllLogs();


    if (
        logs.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-state">

                Noch keine Trainings
                dokumentiert.

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    logs

    .sort(
        (a,b) =>
        b.week-a.week ||
        b.index-a.index
    )

    .forEach(log => {


        const card =
            document
            .createElement(
                "div"
            );


        card.className =
            "history-card";


        let details = "";


        if (
            log.category === "run"
        ) {

            details = `

                <strong>
                    Distanz:
                </strong>

                ${log.distance || "–"} km

                <br>

                <strong>
                    Zeit:
                </strong>

                ${log.duration || "–"}

                <br>

                <strong>
                    Pace:
                </strong>

                ${log.pace || "–"}

            `;

        }


        else {

            details =

                (log.gym || [])

                .filter(
                    x =>
                    x.weight ||
                    x.reps
                )

                .map(
                    x => `

                        <strong>
                            ${x.exercise}:
                        </strong>

                        ${x.weight || "–"} kg

                        ·

                        ${x.reps || "–"}

                    `
                )

                .join("<br>");

        }


        card.innerHTML = `

            <h3>
                ${log.title}
            </h3>

            <div class="history-meta">

                Woche ${log.week}

                ·

                ${log.date}

            </div>


            <div class="history-details">

                ${details}

                <br><br>

                <strong>
                    Belastung:
                </strong>

                ${log.effort}/10

                <br>

                <strong>
                    Knieschmerz während:
                </strong>

                ${log.painDuring}/10

                <br>

                <strong>
                    Knieschmerz danach:
                </strong>

                ${log.painAfter}/10


                ${
                    log.notes

                    ?

                    "<br><br><strong>Notiz:</strong> "+
                    log.notes

                    :

                    ""
                }

            </div>

        `;


        container.appendChild(
            card
        );

    });

}


// =====================================================
// WOCHENNAVIGATION
// =====================================================

document
.getElementById(
    "previousWeek"
)
.addEventListener(
    "click",
    () => {

        if (
            currentWeek > 1
        ) {

            currentWeek--;

            renderWeek();

        }

    }
);


document
.getElementById(
    "nextWeek"
)
.addEventListener(
    "click",
    () => {

        if (
            currentWeek < 12
        ) {

            currentWeek++;

            renderWeek();

        }

    }
);


function updateNavigationButtons() {

    document
    .getElementById(
        "previousWeek"
    )
    .style.opacity =

    currentWeek === 1
    ?
    ".3"
    :
    "1";


    document
    .getElementById(
        "nextWeek"
    )
    .style.opacity =

    currentWeek === 12
    ?
    ".3"
    :
    "1";

}


// =====================================================
// HAUPTNAVIGATION
// =====================================================

document
.querySelectorAll(
    ".nav-button"
)
.forEach(button => {


    button.addEventListener(
        "click",
        () => {


        document
        .querySelectorAll(
            ".nav-button"
        )
        .forEach(
            item =>
            item.classList.remove(
                "active"
            )
        );


        document
        .querySelectorAll(
            ".page"
        )
        .forEach(
            item =>
            item.classList.remove(
                "active"
            )
        );


        button.classList.add(
            "active"
        );


        document
        .getElementById(
            button.dataset.page
        )
        .classList.add(
            "active"
        );


        if (
            button.dataset.page ===
            "dashboardPage"
        ) {

            renderDashboard();

        }


        if (
            button.dataset.page ===
            "historyPage"
        ) {

            renderHistory();

        }

    });

});


// =====================================================
// KRAFTAUSWAHL
// =====================================================

document
.getElementById(
    "strengthExerciseSelect"
)
.addEventListener(
    "change",
    function() {

        renderStrengthChart(
            getAllLogs(),
            this.value
        );

    }
);


// =====================================================
// MODAL
// =====================================================

document
.getElementById(
    "closeModal"
)
.addEventListener(
    "click",
    closeModal
);


document
.getElementById(
    "trainingModal"
)
.addEventListener(
    "click",
    function(event) {

        if (
            event.target === this
        ) {

            closeModal();

        }

    }
);

// =====================================================
// TRAINING LÖSCHEN
// =====================================================

document
.getElementById("deleteTrainingButton")
.addEventListener("click", function() {

    if (activeTrainingIndex === null) {
        return;
    }

    const training =
        getTrainings(currentWeek)[activeTrainingIndex];

    const confirmed =
        confirm(
            training.title +
            " aus Woche " +
            currentWeek +
            " wirklich löschen?"
        );

    if (!confirmed) {
        return;
    }

    localStorage.removeItem(
        getLogID(
            currentWeek,
            activeTrainingIndex
        )
    );

    closeModal();

    renderWeek();
});

// =====================================================
// START
// =====================================================

renderWeek();

// =====================================================
// PWA / SERVICE WORKER
// =====================================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => {
                console.log(
                    "Return to Sport: Service Worker aktiv"
                );
            })
            .catch(error => {
                console.error(
                    "Service Worker konnte nicht registriert werden:",
                    error
                );
            });

    });

}