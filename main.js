function toggleMenu(){
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}
// Dışarı tıklayınca kapat
document.addEventListener('click', function(e){
  const nav = document.querySelector('nav');
  const menu = document.getElementById('mobileMenu');
  if(menu && menu.classList.contains('open') && !nav.contains(e.target) && !menu.contains(e.target)){
    closeMenu();
  }
});
let current = 0;
const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');
const total = 3;

function goSlide(n) {
  current = (n + total) % total;
  slides.style.transform = 'translateX(-' + current * 100 + 'vw)';
  dots.forEach((d,i) => d.classList.toggle('active', i === current));
}
function changeSlide(dir) { goSlide(current + dir); }
setInterval(() => changeSlide(1), 5000);

// AOS
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));