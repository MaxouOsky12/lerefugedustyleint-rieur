// Hero background particles
const canvas=document.getElementById("hero-bg");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const particles=[];
for(let i=0;i<100;i++){
  particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*1,dy:(Math.random()-0.5)*1});
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
    ctx.fillStyle='rgba(255,103,0,0.5)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Fade-in scroll
const faders=document.querySelectorAll('.hero h1,.hero p,.cta-container,section,.step,.card,.cta-final h2');
const appearOptions={threshold:0.3};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Hero title letters animation
const heroTitle=document.getElementById("hero-title");
const text=heroTitle.innerText;
heroTitle.innerText="";
let i=0;
function animateHero(){
  if(i<text.length){
    heroTitle.innerHTML+=`<span style="display:inline-block;opacity:0;transform:translateY(30px)">${text[i]}</span>`;
    i++;
    setTimeout(animateHero,100);
  } else {
    document.querySelectorAll('#hero-title span').forEach((span,index)=>{
      setTimeout(()=>{
        span.style.opacity='1';
        span.style.transform='translateY(0)';
        span.style.transition='all 0.5s ease';
      },index*100);
    });
    document.querySelector(".hero p").classList.add("appear");
    document.querySelector(".cta-container").classList.add("appear");
  }
}
animateHero();
