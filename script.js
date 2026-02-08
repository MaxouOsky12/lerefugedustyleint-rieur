// Fade-in simple au scroll
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
