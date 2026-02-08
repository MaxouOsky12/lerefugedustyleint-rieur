const translations = {
  fr: {
    title:"Signalix",
    subtitle:"Nous transformons les signaux complexes en actions concrètes et exploitables.",
    btn_call:"Prendre un RDV",
    btn_email:"Envoyer un email",
    services_title:"Ce que nous faisons",
    service1_title:"Analyse des données",
    service1_text:"Nous détectons les opportunités cachées et priorisons les actions.",
    service2_title:"Plans d’action",
    service2_text:"Nous livrons des stratégies prêtes à exécuter pour votre entreprise.",
    service3_title:"Suivi et impact",
    service3_text:"Nous suivons l’impact et adaptons en continu pour maximiser le ROI.",
    process_title:"Comment ça marche",
    step1:"1. Appel stratégique de 30 min",
    step2:"2. Analyse ciblée",
    step3:"3. Actions concrètes livrées",
    step4:"4. Mesure de l’impact",
    impact_title:"Pourquoi c’est important",
    stat1:"Croissance potentielle du CA",
    stat2:"Temps de décision réduit",
    stat3:"Clarté dans les actions",
    cta_final:"Prêt à accélérer vos décisions ?",
    btn_call_final:"Prendre un RDV",
    btn_email_final:"Envoyer un email"
  },
  en: {
    title:"Signalix",
    subtitle:"We turn complex business signals into actionable strategies.",
    btn_call:"Book a call",
    btn_email:"Send an email",
    services_title:"What we do",
    service1_title:"Data Analysis",
    service1_text:"We detect hidden opportunities and prioritize actions.",
    service2_title:"Action Plans",
    service2_text:"We deliver ready-to-execute strategies tailored to your business.",
    service3_title:"Monitoring & Impact",
    service3_text:"We track results and adjust continuously for maximum ROI.",
    process_title:"How it works",
    step1:"1. 30-min strategic call",
    step2:"2. Targeted analysis",
    step3:"3. Clear actions delivered",
    step4:"4. Measure impact",
    impact_title:"Why it matters",
    stat1:"+30% Revenue growth potential",
    stat2:"-50% Decision time reduced",
    stat3:"100% Clarity in actions",
    cta_final:"Ready to accelerate your decisions?",
    btn_call_final:"Book a call",
    btn_email_final:"Send an email"
  },
  es:{ /* similaire */ },
  ar:{ /* similaire */ },
  zh:{ /* similaire */ }
};

const langSelect = document.getElementById("lang");
function setLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(translations[lang][key]) el.innerText=translations[lang][key];
  });
}
langSelect.addEventListener("change",e=>setLang(e.target.value));
const browserLang=navigator.language.slice(0,2);
setLang(translations[browserLang]?browserLang:"fr");

// Scroll animations
const faders=document.querySelectorAll('section,.card,.step,.stat');
const appearOptions={threshold:0.3};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));
