/* ═══════════════════════════════════════════════════════
   MetaPashu – Main JavaScript
   Scroll Animations, Parallax, Canvas Particles, 
   Cattle Motion, Counter Animations, Navbar
   ═══════════════════════════════════════════════════════ */

// ──── Navbar Scroll Effect ────
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const sections = document.querySelectorAll('section[id]');

let lastScroll = 0;

function handleNavScroll() {
  const scrollY = window.scrollY;
  
  if (scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = scrollY;
}

// Mobile nav toggle
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Active nav link on scroll
function updateActiveNav() {
  const scrollY = window.scrollY + 200;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollY >= top && scrollY < top + height) {
      navLinks?.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}


// ──── Scroll Reveal Animations ────
const fadeElements = document.querySelectorAll('.fade-up');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));


// ──── Counter Animation ────
const counters = document.querySelectorAll('.stat-number[data-count]');
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  
  const heroStats = document.querySelector('.hero-stats');
  if (!heroStats) return;
  
  const rect = heroStats.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    countersAnimated = true;
    
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count);
      const duration = 2000;
      const start = performance.now();
      
      function updateCounter(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        
        counter.textContent = current.toLocaleString();
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }
      
      requestAnimationFrame(updateCounter);
    });
  }
}


// ──── Hero Canvas Particles ────
const canvas = document.getElementById('hero-canvas');
const ctx = canvas?.getContext('2d');
let particles = [];
let animFrame;

function initCanvas() {
  if (!canvas || !ctx) return;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  particles = [];
  const count = Math.min(Math.floor(window.innerWidth / 15), 80);
  
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.3 + 0.1
    });
  }
}

function drawParticles() {
  if (!ctx || !canvas) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach((p, i) => {
    // Update position
    p.x += p.vx;
    p.y += p.vy;
    
    // Wrap around
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
    
    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(45, 212, 191, ${p.opacity})`;
    ctx.fill();
    
    // Draw connections
    for (let j = i + 1; j < particles.length; j++) {
      const dx = p.x - particles[j].x;
      const dy = p.y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(45, 212, 191, ${0.06 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });
  
  animFrame = requestAnimationFrame(drawParticles);
}

initCanvas();
drawParticles();

window.addEventListener('resize', () => {
  cancelAnimationFrame(animFrame);
  initCanvas();
  drawParticles();
});


// ──── Cattle Scroll Motion ────
const cattleRunner = document.getElementById('cattle-runner');
const cattleGlider = document.getElementById('cattle-glider');
const cattleTransition = document.getElementById('cattle-transition');

function animateCattle() {
  if (!cattleTransition) return;
  
  const rect = cattleTransition.getBoundingClientRect();
  const windowH = window.innerHeight;
  
  // Only animate when section is in view
  if (rect.top < windowH && rect.bottom > 0) {
    const progress = 1 - (rect.top / windowH);
    const clamped = Math.max(0, Math.min(1, progress));
    
    // Runner moves from left to right
    if (cattleRunner) {
      const runX = clamped * (window.innerWidth + 200);
      cattleRunner.style.transform = `translateX(${runX}px)`;
    }
    
    // Glider moves from right to left
    if (cattleGlider) {
      const glideX = -(clamped * (window.innerWidth + 200));
      cattleGlider.style.transform = `translateX(${glideX}px)`;
    }
  }
}

// ──── Floating cattle in intro section ────
const cattleFloat1 = document.getElementById('cattle-float-1');

function animateFloatingCattle() {
  if (!cattleFloat1) return;
  
  const scrollY = window.scrollY;
  const parallaxY = scrollY * 0.15;
  cattleFloat1.style.transform = `translateY(${-parallaxY}px)`;
}


// ──── NIRAMM Flow Cards Stagger ────
const flowCards = document.querySelectorAll('.flow-card');

const flowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0) * 80;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      flowObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

flowCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  flowObserver.observe(card);
});


// ──── Feature Cards Stagger ────
const featureCards = document.querySelectorAll('.feature-card');

const featureObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      featureObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

featureCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
  featureObserver.observe(card);
});


// ──── Smooth Scroll for Anchor Links ────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  });
});


// ──── Parallax Glow + Hero Video 3D Depth ────
const heroGlow = document.querySelector('.hero-glow');
const heroBg = document.querySelector('.hero-bg');
const heroVideo = document.getElementById('hero-video');

function parallaxGlow() {
  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;
  
  if (heroGlow) {
    heroGlow.style.transform = `translateX(-50%) translateY(${scrollY * 0.3}px)`;
  }
  
  // 3D parallax on the video background as user scrolls
  if (heroBg && scrollY < heroHeight * 1.5) {
    const progress = scrollY / heroHeight;
    const scaleVal = 1 + progress * 0.08;
    const rotateX = progress * 3;
    const translateZ = progress * -40;
    const opacity = 1 - progress * 0.4;
    
    heroBg.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      translateZ(${translateZ}px)
      scale(${scaleVal})
    `;
    heroBg.style.opacity = Math.max(0.3, opacity);
  }
}


// ──── Cattle Custom Scrollbar ────
const cattleScrollImg = document.getElementById('cattle-scroll-img');
let lastScrollY = window.scrollY;

function animateCattleScrollbar() {
  if (!cattleScrollImg) return;
  
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return;
  
  const progress = scrollY / maxScroll;
  const trackHeight = window.innerHeight - 140;
  const cattleHeight = 60;
  
  // Inverted scroll: top of page = bottom of track, bottom of page = top of track
  const invertedTopPos = 100 + (1 - progress) * (trackHeight - cattleHeight);
  
  let rot = cattleScrollImg.dataset.rot ? parseInt(cattleScrollImg.dataset.rot) : -90;
  
  if (scrollY > lastScrollY) {
    // Scrolling down -> runs up
    rot = -90; 
  } else if (scrollY < lastScrollY) {
    // Scrolling up -> runs down
    rot = 90; 
  }
  
  cattleScrollImg.dataset.rot = rot;
  cattleScrollImg.style.transform = `translateY(${invertedTopPos}px) rotate(${rot}deg)`;
  
  lastScrollY = scrollY;
}

// ──── Main Scroll Handler ────
function onScroll() {
  handleNavScroll();
  updateActiveNav();
  animateCounters();
  animateCattle();
  animateFloatingCattle();
  parallaxGlow();
  animateCattleScrollbar();
}

// Throttled scroll
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// Initial call
onScroll();

// ──── Feature Card Tilt Effect ────
featureCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;
    
    card.style.transform = `perspective(800px) translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});


// ──── Highlight items hover stagger ────
const highlights = document.querySelectorAll('.highlight-item');
highlights.forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.05}s`;
});


// ──── Loading Animation ────
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
  
  // Trigger hero animations
  setTimeout(() => {
    document.querySelectorAll('.hero-content .fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }, 300);
});
