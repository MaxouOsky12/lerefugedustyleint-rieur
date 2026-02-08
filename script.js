// Canvas fond particles + vague
const canvas=document.getElementById("hero-bg");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const particles=[];
for(let i=0;i<120;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.6,dy:(Math.random()-0.5)*0.6});
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.dx; p.y+=p.dy;
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

// Fade-in scroll & animations
const faders=document.querySelectorAll('.hero-subtitle,.cta-container,section,.step,.card,.cta-final h2');
const appearOptions={threshold:0.3};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Hero title letters animation (orange)
const heroTitle=document.getElementById("hero-title");
const text=heroTitle.innerText;
heroTitle.innerText="";
let i=0;
function animateHero(){
  if(i<text.length){
    heroTitle.innerHTML+=`<span>${text[i]}</span>`;
    i++;
    setTimeout(animateHero,120);
  } else {
    document.querySelectorAll('#hero-title span').forEach((span,index)=>{
      setTimeout(()=>{
        span.style.opacity='1';
        span.style.transform='translateY(0) scale(1) rotate(0deg)';
        span.style.transition='all 0.6s ease';
      },index*150);
    });
    setTimeout(()=>{
      document.querySelector(".hero-subtitle").classList.add("appear");
      document.querySelector(".cta-container").classList.add("appear");
    }, text.length*150);
  }
}
animateHero();

// Resize canvas
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
