// Canvas fond particles derrière Signalix
const canvas = document.getElementById("hero-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<200;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx:(Math.random()-0.5)*0.9,
    dy:(Math.random()-0.5)*0.9
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;
    if(p.x>canvas.width)p.x=0;
    if(p.x<0)p.x=canvas.width;
    if(p.y>canvas.height)p.y=0;
    if(p.y<0)p.y=canvas.height;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,0.06)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Hero Signalix animation
const heroTitle = document.getElementById("hero-title");
const subtitle = document.querySelector(".hero-subtitle");
const ctas = document.querySelector(".cta-container");

function animateHero(){
  heroTitle.style.opacity = "1";
  heroTitle.style.transform = "scale(1)";
  heroTitle.style.transition = "all 1s ease-out";

  setTimeout(()=>{
    heroTitle.style.transform = "scale(1.05)";
    setTimeout(()=>heroTitle.style.transform = "scale(1)", 300);
  }, 1000);

  setTimeout(()=>{
    subtitle.style.opacity = "1";
    subtitle.style.transform = "translateY(0)";
    subtitle.style.transition = "all 0.8s ease-out";
    ctas.style.opacity = "1";
    ctas.style.transition = "all 0.8s ease-out";
  }, 1500);
}

window.onload = animateHero;

// Fade-in scroll sections
const faders = document.querySelectorAll('section,.step,.card,.expert-card,.cta-final h2');
const appearOptions = {threshold:0.3};
const appearOnScroll = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Resize canvas
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
