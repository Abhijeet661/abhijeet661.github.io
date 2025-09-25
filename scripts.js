// Mobile nav toggle(s)
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const open = nav.getAttribute('aria-hidden') === 'false';
      nav.setAttribute('aria-hidden', String(!open));
      nav.style.display = open ? 'none' : 'block';
    });
  }
  const btn2 = document.getElementById('mobile-menu-btn-2');
  const nav2 = document.getElementById('mobile-nav-2');
  if(btn2 && nav2){
    btn2.addEventListener('click', ()=>{
      const open = nav2.getAttribute('aria-hidden') === 'false';
      nav2.setAttribute('aria-hidden', String(!open));
      nav2.style.display = open ? 'none' : 'block';
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // reveal on scroll
  const panels = document.querySelectorAll('.panel, .card');
  const obs = new IntersectionObserver((entries, o)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.style.transform = 'translateY(0)';
        en.target.style.opacity = '1';
        o.unobserve(en.target);
      }
    });
  }, {threshold: 0.12});
  panels.forEach(p=>{
    p.style.opacity = '0';
    p.style.transform = 'translateY(12px)';
    obs.observe(p);
  });
});

// contact submit -> opens mail client with prefilled content (no backend)
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  const email = encodeURIComponent(form.email.value.trim());
  const message = encodeURIComponent(form.message.value.trim());
  const subject = encodeURIComponent(`Website inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:abhiwankhede661@gmail.com?subject=${subject}&body=${body}`;
}