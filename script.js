const translations = {
  en: {
    title: "Decisions that move revenue",
    subtitle: "We turn complex business signals into clear actions.",
    cta: "Book a call",
    problem_title: "The problem",
    problem_text: "Companies have data everywhere, but clarity nowhere.",
    solution_title: "Our solution",
    solution_text: "Signalix delivers prioritized, ready-to-execute actions.",
    how_title: "How it works",
    step1: "30 min strategic call",
    step2: "Targeted analysis",
    step3: "Clear actions delivered",
    step4: "Measurable impact"
  },
  fr: {
    title: "Des décisions qui font avancer le chiffre d’affaires",
    subtitle: "Nous transformons les signaux complexes en actions claires.",
    cta: "Planifier un échange",
    problem_title: "Le problème",
    problem_text: "Les entreprises ont trop de données et pas assez de clarté.",
    solution_title: "Notre solution",
    solution_text: "Signalix fournit des actions concrètes et prioritaires.",
    how_title: "Comment ça marche",
    step1: "Call stratégique de 30 minutes",
    step2: "Analyse ciblée",
    step3: "Actions livrées",
    step4: "Impact mesurable"
  },
  es: {
    title: "Decisiones que impulsan ingresos",
    subtitle: "Convertimos señales complejas en acciones claras.",
    cta: "Agendar llamada",
    problem_title: "El problema",
    problem_text: "Las empresas tienen datos, pero no claridad.",
    solution_title: "Nuestra solución",
    solution_text: "Signalix entrega acciones listas para ejecutar.",
    how_title: "Cómo funciona",
    step1: "Llamada estratégica de 30 min",
    step2: "Análisis dirigido",
    step3: "Acciones claras",
    step4: "Impacto medible"
  }
};

const langSelect = document.getElementById("lang");

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });
}

langSelect.addEventListener("change", e => {
  setLang(e.target.value);
});

// auto-detect language
const browserLang = navigator.language.slice(0,2);
setLang(translations[browserLang] ? browserLang : "en");
