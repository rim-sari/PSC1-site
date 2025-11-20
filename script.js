// ===============================
// 🌍 1) TRADUCTIONS FR / EN
// ===============================
const translations = {
    fr: {
        title: "Révision PSC1",
        subtitle: "Protéger • Alerter • Secourir",

        nav_home: "Accueil",
        nav_sheets: "Fiches",
        nav_quiz: "Quiz",
        nav_resources: "Ressources",

        welcome_title: "Bienvenue 🎓",
        welcome_text: "Ce site t'aide à réviser les notions clés du PSC1.",
        warning: "⚠️ Ce site ne remplace pas une formation officielle. En cas d'urgence, appelle les secours (15, 18, 112).",

        btn_memo: "Voir les fiches mémo",
        btn_quiz: "Lancer un quiz",
        btn_details: "Voir le détail",
        btn_validate: "Valider",
        btn_next: "Suivant",
        btn_restart: "Recommencer",

        fiches_title: "Fiches mémo PSC1",
        sheet_protect: "1. Protéger",
        sheet_alert: "2. Alerter",
        sheet_unconscious: "3. Inconscience",
        sheet_bleeding: "4. Hémorragies",
        sheet_malaise: "5. Malaise",
        sheet_wounds: "6. Plaies & brûlures",

        quiz_title: "Quiz PSC1 🧠",

        resources_title: "Ressources & conseils 📚",
        resource1: "Inscris-toi à une session PSC1 auprès d'une association officielle (Croix-Rouge, Protection Civile, pompiers).",
        resource2: "Relis régulièrement les fiches et supports de ta formation.",
        resource3: "Teste-toi avec des quiz, des jeux de rôle et des mises en situation.",

        result_title: "Quiz terminé 🎉",
        result_label: "Score",
        result_perfect: "Excellent ! Tu maîtrises très bien les bases du PSC1.",
        result_good: "Très bien ! Tu es prête pour l'examen.",
        result_bad: "Continue à réviser, tu peux améliorer ton score !",

        quiz_q1: "Quel est le numéro d'urgence unique en Europe ?",
        quiz_q1_c1: "15",
        quiz_q1_c2: "18",
        quiz_q1_c3: "112",
        quiz_q1_c4: "114",
        quiz_q1_exp: "Le 112 est le numéro d’appel d’urgence valable dans l’ensemble de l’Union européenne.",

        quiz_q2: "Dans quel ordre agit-on en premiers secours ?",
        quiz_q2_c1: "Secourir → Protéger → Alerter",
        quiz_q2_c2: "Protéger → Alerter → Secourir",
        quiz_q2_c3: "Alerter → Secourir → Protéger",
        quiz_q2_c4: "Protéger → Secourir → Alerter",
        quiz_q2_exp: "On commence par protéger, puis alerter, puis secourir.",

        quiz_q3: "Une hémorragie externe se reconnaît par :",
        quiz_q3_c1: "Un saignement léger qui s'arrête rapidement.",
        quiz_q3_c2: "Un saignement abondant et continu.",
        quiz_q3_c3: "Une rougeur de la peau.",
        quiz_q3_c4: "Une douleur sans saignement.",
        quiz_q3_exp: "Une hémorragie externe est un saignement important qui ne s’arrête pas spontanément.",

        quiz_q4: "Que fais-tu si une victime est inconsciente mais respire ?",
        quiz_q4_c1: "Tu la laisses sur le dos.",
        quiz_q4_c2: "Tu lui donnes à boire.",
        quiz_q4_c3: "Tu la mets en position latérale de sécurité (PLS).",
        quiz_q4_c4: "Tu la fais marcher.",
        quiz_q4_exp: "On met la victime en PLS pour garder les voies aériennes dégagées et éviter l'étouffement.",

        quiz_q5: "En cas de brûlure thermique récente (peau rouge) :",
        quiz_q5_c1: "Tu appliques de l'huile ou du beurre.",
        quiz_q5_c2: "Tu refroidis avec de l'eau tempérée plusieurs minutes.",
        quiz_q5_c3: "Tu perces les cloques.",
        quiz_q5_c4: "Tu recouvres avec un tissu sale.",
        quiz_q5_exp: "On refroidit la brûlure avec de l’eau tempérée pendant au moins 10 minutes, sans corps gras.",

        feedback_good: "Bonne réponse ✅",
        feedback_bad: "Mauvaise réponse ❌"
    },

    en: {
        title: "PSC1 Revision",
        subtitle: "Protect • Alert • Rescue",

        nav_home: "Home",
        nav_sheets: "Sheets",
        nav_quiz: "Quiz",
        nav_resources: "Resources",

        welcome_title: "Welcome 🎓",
        welcome_text: "This site helps you review the key PSC1 first aid concepts.",
        warning: "⚠️ This site does not replace official training. In an emergency, call 112 (or your local emergency number).",

        btn_memo: "View summary sheets",
        btn_quiz: "Start a quiz",
        btn_details: "View details",
        btn_validate: "Validate",
        btn_next: "Next",
        btn_restart: "Restart",

        fiches_title: "PSC1 Summary Sheets",
        sheet_protect: "1. Protect",
        sheet_alert: "2. Alert",
        sheet_unconscious: "3. Unconscious casualty",
        sheet_bleeding: "4. Severe bleeding",
        sheet_malaise: "5. Malaise",
        sheet_wounds: "6. Wounds & burns",

        quiz_title: "PSC1 Quiz 🧠",

        resources_title: "Resources & advice 📚",
        resource1: "Register for a PSC1 training session with an official organisation.",
        resource2: "Regularly review your training material and summary sheets.",
        resource3: "Test yourself with quizzes, role plays and scenarios.",

        result_title: "Quiz finished 🎉",
        result_label: "Score",
        result_perfect: "Excellent! You master the PSC1 basics.",
        result_good: "Very good! You're ready for the exam.",
        result_bad: "Keep practising, you can still improve!",

        quiz_q1: "What is the single European emergency number?",
        quiz_q1_c1: "15",
        quiz_q1_c2: "18",
        quiz_q1_c3: "112",
        quiz_q1_c4: "114",
        quiz_q1_exp: "112 is the emergency number available throughout the European Union.",

        quiz_q2: "In which order do we act in first aid?",
        quiz_q2_c1: "Rescue → Protect → Alert",
        quiz_q2_c2: "Protect → Alert → Rescue",
        quiz_q2_c3: "Alert → Rescue → Protect",
        quiz_q2_c4: "Protect → Rescue → Alert",
        quiz_q2_exp: "We first protect, then alert the emergency services, then rescue.",

        quiz_q3: "How do you recognise severe external bleeding?",
        quiz_q3_c1: "Light bleeding that stops quickly.",
        quiz_q3_c2: "Heavy and continuous bleeding.",
        quiz_q3_c3: "A simple redness of the skin.",
        quiz_q3_c4: "Pain without bleeding.",
        quiz_q3_exp: "Severe bleeding is a heavy bleed that doesn’t stop on its own.",

        quiz_q4: "What do you do if a casualty is unconscious but breathing?",
        quiz_q4_c1: "Leave them lying on their back.",
        quiz_q4_c2: "Give them something to drink.",
        quiz_q4_c3: "Place them in the recovery position.",
        quiz_q4_c4: "Make them walk to wake up.",
        quiz_q4_exp: "We place them in the recovery position to keep the airway clear and avoid choking.",

        quiz_q5: "For a recent thermal burn (red skin):",
        quiz_q5_c1: "Apply oil or butter.",
        quiz_q5_c2: "Cool under lukewarm water for several minutes.",
        quiz_q5_c3: "Pierce the blisters.",
        quiz_q5_c4: "Cover with a dirty cloth.",
        quiz_q5_exp: "Cool the burn under running water for at least 10 minutes. Do not apply greasy products.",

        feedback_good: "Correct ✅",
        feedback_bad: "Wrong answer ❌"
    }
};

// langue actuelle
let currentLang = localStorage.getItem("psc1_lang") || "fr";

// ===============================
// 🌙 2) THEME SOMBRE / CLAIR
// ===============================
let currentTheme = localStorage.getItem("psc1_theme") || "light";
if (currentTheme === "dark") {
    document.body.classList.add("dark");
}

// ===============================
// 📋 3) FICHES PSC1 (FR + EN)
// ===============================
const fichesData = {
    fr: {
        protection: {
            title: "1. Protéger",
            points: [
                "Analyser rapidement la situation et repérer les dangers (circulation, feu, électricité, etc.).",
                "Se protéger soi-même en priorité avant de s'approcher de la victime.",
                "Éloigner ou signaler les dangers si possible (triangle, couper l'alimentation, éloigner les témoins).",
                "Ne jamais se mettre en danger : on ne sert à rien si on devient une seconde victime."
            ]
        },
        alerte: {
            title: "2. Alerter",
            points: [
                "Composer le 15 (SAMU), 18 (pompiers) ou 112 (numéro d'urgence européen).",
                "Donner calmement : le lieu précis, le nombre de victimes, l’état des victimes, le type d’accident.",
                "Répondre aux questions et ne jamais raccrocher le premier.",
                "Si possible, envoyer quelqu’un accueillir les secours pour les guider."
            ]
        },
        inconscience: {
            title: "3. Victime inconsciente qui respire",
            points: [
                "Vérifier si la victime répond et réagit quand on lui parle ou la stimule.",
                "Vérifier la respiration (mouvements thoraciques, air senti près de la bouche).",
                "Si elle respire mais ne répond pas, la mettre en position latérale de sécurité (PLS).",
                "Alerter les secours et surveiller régulièrement la respiration."
            ]
        },
        hemorragie: {
            title: "4. Hémorragies externes",
            points: [
                "Une hémorragie est un saignement abondant et continu.",
                "Comprimer fortement la plaie avec la main (gantée si possible) et un tissu propre.",
                "Allonger la victime si possible et la rassurer.",
                "Maintenir la compression jusqu’à la prise en charge par les secours."
            ]
        },
        malaise: {
            title: "5. Malaise",
            points: [
                "Un malaise est une sensation de malaise soudain ressentie par la victime (douleur, vertiges, gêne, etc.).",
                "Installer la personne dans une position confortable (souvent assise ou demi-assise).",
                "Poser des questions simples : ce qu’elle ressent, ses antécédents (diabète, cœur…).",
                "Alerter les secours si le malaise est intense, inhabituel ou ne passe pas."
            ]
        },
        plaies: {
            title: "6. Plaies & brûlures",
            points: [
                "Pour une plaie simple : laver à l’eau, protéger avec un pansement propre.",
                "Ne pas retirer un objet planté dans la plaie, stabiliser autour.",
                "Pour une brûlure thermique : refroidir longuement à l’eau tempérée (au moins 10 minutes).",
                "Ne jamais percer les cloques, ni appliquer de corps gras (beurre, huile, etc.)."
            ]
        }
    },

    en: {
        protection: {
            title: "1. Protect",
            points: [
                "Quickly assess the situation and identify any dangers (traffic, fire, electricity, etc.).",
                "Protect yourself first before approaching the casualty.",
                "Remove or signal the danger if possible (warning triangle, switch off power, keep people away).",
                "Never put yourself at risk: you are no help if you become a second casualty."
            ]
        },
        alerte: {
            title: "2. Alert",
            points: [
                "Call the emergency services (112 in Europe, or your local number).",
                "Calmly give: the exact location, number of casualties, their condition, and what happened.",
                "Answer all questions and never hang up first.",
                "If possible, send someone to meet and guide the emergency services."
            ]
        },
        inconscience: {
            title: "3. Unconscious but breathing",
            points: [
                "Check if the casualty responds when you talk to or gently shake them.",
                "Check breathing (chest movement, air felt near the mouth).",
                "If breathing but unresponsive, place them in the recovery position.",
                "Alert the emergency services and regularly check breathing."
            ]
        },
        hemorragie: {
            title: "4. Severe bleeding",
            points: [
                "Severe bleeding is heavy and continuous.",
                "Apply firm direct pressure on the wound with a clean cloth or dressing.",
                "Lay the casualty down if possible and reassure them.",
                "Maintain pressure until the emergency services take over."
            ]
        },
        malaise: {
            title: "5. Malaise",
            points: [
                "A malaise is a sudden feeling of discomfort (pain, dizziness, unusual sensations).",
                "Place the person in a comfortable position (often seated or half-seated).",
                "Ask simple questions: what they feel, their medical history (diabetes, heart disease, etc.).",
                "Call the emergency services if the malaise is intense, unusual or persists."
            ]
        },
        plaies: {
            title: "6. Wounds & burns",
            points: [
                "For a simple wound: rinse with water and cover with a clean dressing.",
                "Do not remove any object stuck in the wound. Stabilise it around.",
                "For a thermal burn: cool the area under running water for at least 10 minutes.",
                "Do not pierce blisters or apply greasy products (oil, butter, etc.)."
            ]
        }
    }
};

// ===============================
// 🧠 4) QUIZ PSC1 (FR + EN)
// ===============================
const quizQuestionsData = {
    fr: [
        {
            questionKey: "quiz_q1",
            choiceKeys: ["quiz_q1_c1", "quiz_q1_c2", "quiz_q1_c3", "quiz_q1_c4"],
            correctIndex: 2,
            explanationKey: "quiz_q1_exp"
        },
        {
            questionKey: "quiz_q2",
            choiceKeys: ["quiz_q2_c1", "quiz_q2_c2", "quiz_q2_c3", "quiz_q2_c4"],
            correctIndex: 1,
            explanationKey: "quiz_q2_exp"
        },
        {
            questionKey: "quiz_q3",
            choiceKeys: ["quiz_q3_c1", "quiz_q3_c2", "quiz_q3_c3", "quiz_q3_c4"],
            correctIndex: 1,
            explanationKey: "quiz_q3_exp"
        },
        {
            questionKey: "quiz_q4",
            choiceKeys: ["quiz_q4_c1", "quiz_q4_c2", "quiz_q4_c3", "quiz_q4_c4"],
            correctIndex: 2,
            explanationKey: "quiz_q4_exp"
        },
        {
            questionKey: "quiz_q5",
            choiceKeys: ["quiz_q5_c1", "quiz_q5_c2", "quiz_q5_c3", "quiz_q5_c4"],
            correctIndex: 1,
            explanationKey: "quiz_q5_exp"
        }
    ],

    en: [
        {
            questionKey: "quiz_q1",
            choiceKeys: ["quiz_q1_c1", "quiz_q1_c2", "quiz_q1_c3", "quiz_q1_c4"],
            correctIndex: 2,
            explanationKey: "quiz_q1_exp"
        },
        {
            questionKey: "quiz_q2",
            choiceKeys: ["quiz_q2_c1", "quiz_q2_c2", "quiz_q2_c3", "quiz_q2_c4"],
            correctIndex: 1,
            explanationKey: "quiz_q2_exp"
        },
        {
            questionKey: "quiz_q3",
            choiceKeys: ["quiz_q3_c1", "quiz_q3_c2", "quiz_q3_c3", "quiz_q3_c4"],
            correctIndex: 1,
            explanationKey: "quiz_q3_exp"
        },
        {
            questionKey: "quiz_q4",
            choiceKeys: ["quiz_q4_c1", "quiz_q4_c2", "quiz_q4_c3", "quiz_q4_c4"],
            correctIndex: 2,
            explanationKey: "quiz_q4_exp"
        },
        {
            questionKey: "quiz_q5",
            choiceKeys: ["quiz_q5_c1", "quiz_q5_c2", "quiz_q5_c3", "quiz_q5_c4"],
            correctIndex: 1,
            explanationKey: "quiz_q5_exp"
        }
    ]
};

// ===============================
// 🔤 5) APPLICATION DES TRADUCTIONS
// ===============================
function applyTranslations() {
    const dict = translations[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

// ===============================
// 📋 6) GESTION DES FICHES MEMO
// ===============================
const ficheCards = document.querySelectorAll(".fiche");
const ficheDetail = document.getElementById("fiche-detail");
const ficheTitle = document.getElementById("fiche-title");
const ficheContent = document.getElementById("fiche-content");

function clearFicheDetail() {
    ficheDetail.classList.add("hidden");
    ficheTitle.textContent = "";
    ficheContent.innerHTML = "";
}

ficheCards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.fiche;
        const data = fichesData[currentLang][key];
        if (!data) return;

        ficheTitle.textContent = data.title;
        ficheContent.innerHTML = "";
        data.points.forEach(p => {
            const li = document.createElement("li");
            li.textContent = p;
            ficheContent.appendChild(li);
        });
        ficheDetail.classList.remove("hidden");
        ficheDetail.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// ===============================
// 🧠 7) GESTION DU QUIZ
// ===============================
const quizQuestionEl = document.getElementById("quiz-question");
const quizChoicesEl = document.getElementById("quiz-choices");
const quizValidateBtn = document.getElementById("quiz-validate");
const quizNextBtn = document.getElementById("quiz-next");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const quizScoreEl = document.getElementById("quiz-score");
const quizRestartBtn = document.getElementById("quiz-restart");

let currentQuestionIndex = 0;
let selectedChoiceIndex = null;
let score = 0;

function getCurrentQuizArray() {
    return quizQuestionsData[currentLang];
}

function showQuestion() {
    const dict = translations[currentLang];
    const questions = getCurrentQuizArray();
    const q = questions[currentQuestionIndex];

    quizQuestionEl.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length} : ${dict[q.questionKey]}`;

    quizChoicesEl.innerHTML = "";
    selectedChoiceIndex = null;
    quizValidateBtn.disabled = true;
    quizNextBtn.classList.add("hidden");
    quizFeedbackEl.textContent = "";
    quizFeedbackEl.className = "";
    quizScoreEl.textContent = "";

    q.choiceKeys.forEach((ckey, index) => {
        const div = document.createElement("div");
        div.className = "quiz-choice";
        div.textContent = dict[ckey];

        div.addEventListener("click", () => {
            document.querySelectorAll(".quiz-choice").forEach(c => c.classList.remove("selected"));
            div.classList.add("selected");
            selectedChoiceIndex = index;
            quizValidateBtn.disabled = false;
        });

        quizChoicesEl.appendChild(div);
    });
}

quizValidateBtn.addEventListener("click", () => {
    if (selectedChoiceIndex === null) return;

    const dict = translations[currentLang];
    const questions = getCurrentQuizArray();
    const q = questions[currentQuestionIndex];

    // Désactiver les choix
    document.querySelectorAll(".quiz-choice").forEach(c => c.style.pointerEvents = "none");

    if (selectedChoiceIndex === q.correctIndex) {
        score++;
        quizFeedbackEl.textContent = dict.feedback_good;
        quizFeedbackEl.className = "correct";
    } else {
        quizFeedbackEl.textContent = `${dict.feedback_bad}\n→ ${dict[q.explanationKey]}`;
        quizFeedbackEl.className = "incorrect";
    }

    quizValidateBtn.disabled = true;
    quizNextBtn.classList.remove("hidden");
});

quizNextBtn.addEventListener("click", () => {
    const questions = getCurrentQuizArray();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    const dict = translations[currentLang];
    const questions = getCurrentQuizArray();
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    let message;
    if (percentage === 100) {
        message = dict.result_perfect;
    } else if (percentage >= 70) {
        message = dict.result_good;
    } else {
        message = dict.result_bad;
    }

    quizQuestionEl.textContent = dict.result_title;
    quizChoicesEl.innerHTML = "";
    quizFeedbackEl.textContent = "";
    quizNextBtn.classList.add("hidden");
    quizValidateBtn.disabled = true;

    quizScoreEl.textContent = `${dict.result_label} : ${score}/${total} (${percentage}%)\n${message}`;
    quizRestartBtn.classList.remove("hidden");
}

quizRestartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    selectedChoiceIndex = null;
    quizRestartBtn.classList.add("hidden");
    quizValidateBtn.disabled = true;
    quizNextBtn.classList.add("hidden");
    quizFeedbackEl.textContent = "";
    quizScoreEl.textContent = "";
    showQuestion();
});

// ===============================
// 🌍 8) BOUTONS LANGUE
// ===============================
const langFrBtn = document.getElementById("lang-fr");
const langEnBtn = document.getElementById("lang-en");

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("psc1_lang", lang);
    applyTranslations();
    clearFicheDetail();

    // reset quiz quand on change de langue
    currentQuestionIndex = 0;
    score = 0;
    selectedChoiceIndex = null;
    quizRestartBtn.classList.add("hidden");
    quizFeedbackEl.textContent = "";
    quizScoreEl.textContent = "";
    quizValidateBtn.disabled = true;
    quizNextBtn.classList.add("hidden");
    showQuestion();
}

langFrBtn.addEventListener("click", () => setLanguage("fr"));
langEnBtn.addEventListener("click", () => setLanguage("en"));

// ===============================
// 🌙 9) BOUTON MODE SOMBRE
// ===============================
const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("psc1_theme", currentTheme);
});

// ===============================
// 🚀 10) INITIALISATION
// ===============================
applyTranslations();
showQuestion();
