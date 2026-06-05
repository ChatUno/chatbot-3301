// ========== RED DE NODOS ==========
const canvasRed = document.getElementById('canvasRed');
if (canvasRed) {
  const ctx = canvasRed.getContext('2d');
  let nodos = [];
  const maxNodos = 40;
  const distanciaMax = 180;

  function resizeRed() {
    canvasRed.width = canvasRed.parentElement.offsetWidth;
    canvasRed.height = canvasRed.parentElement.offsetHeight;
  }
  resizeRed();
  window.addEventListener('resize', () => { resizeRed(); crearNodos(); });

  class Nodo {
    constructor() { this.x = Math.random() * canvasRed.width; this.y = Math.random() * canvasRed.height; this.vx = (Math.random() - 0.5) * 0.6; this.vy = (Math.random() - 0.5) * 0.6; this.radius = 2; }
    update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvasRed.width) this.vx *= -1; if (this.y < 0 || this.y > canvasRed.height) this.vy *= -1; }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = '#0ea5e9'; ctx.globalAlpha = 0.6; ctx.fill(); ctx.globalAlpha = 1; }
  }

  class Pulso {
    constructor(nodoA, nodoB) { this.x = nodoA.x; this.y = nodoA.y; this.destX = nodoB.x; this.destY = nodoB.y; this.progress = 0; this.speed = 0.008 + Math.random() * 0.02; }
    update() { this.progress += this.speed; }
    draw() {
      if (this.progress > 1) return;
      const x = this.x + (this.destX - this.x) * this.progress;
      const y = this.y + (this.destY - this.y) * this.progress;
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 12);
      grad.addColorStop(0, 'rgba(14,165,233,0.9)'); grad.addColorStop(1, 'rgba(14,165,233,0)');
      ctx.fillStyle = grad; ctx.fill();
    }
    finished() { return this.progress > 1; }
  }

  let pulsos = [];
  function crearNodos() { nodos = []; for (let i = 0; i < maxNodos; i++) nodos.push(new Nodo()); }
  crearNodos();

  function animarRed() {
    ctx.clearRect(0, 0, canvasRed.width, canvasRed.height);
    nodos.forEach(n => { n.update(); n.draw(); });
    for (let i = 0; i < nodos.length; i++) {
      for (let j = i + 1; j < nodos.length; j++) {
        const dist = Math.hypot(nodos[i].x - nodos[j].x, nodos[i].y - nodos[j].y);
        if (dist < distanciaMax) {
          ctx.beginPath(); ctx.moveTo(nodos[i].x, nodos[i].y); ctx.lineTo(nodos[j].x, nodos[j].y);
          ctx.strokeStyle = `rgba(14,165,233,${0.08 + (1 - dist / distanciaMax) * 0.12})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    if (Math.random() < 0.03 && nodos.length >= 2) {
      const a = nodos[Math.floor(Math.random() * nodos.length)], b = nodos[Math.floor(Math.random() * nodos.length)];
      if (a !== b) pulsos.push(new Pulso(a, b));
    }
    pulsos.forEach(p => { p.update(); p.draw(); });
    pulsos = pulsos.filter(p => !p.finished());
    requestAnimationFrame(animarRed);
  }
  animarRed();
}

// ========== GLITCH PALABRAS ==========
const glitchElements = document.querySelectorAll('[data-glitch]');
function glitchPalabras() {
  glitchElements.forEach(el => {
    const original = el.textContent;
    const duracion = 400 + Math.random() * 300;
    const intervalo = 50;
    let frames = duracion / intervalo;
    const glitchInterval = setInterval(() => {
      let nuevo = '';
      for (let i = 0; i < original.length; i++) nuevo += Math.random() > 0.5 ? Math.floor(Math.random() * 2) : original[i];
      el.textContent = nuevo;
      frames--;
      if (frames <= 0) { clearInterval(glitchInterval); el.textContent = original; }
    }, intervalo);
  });
  const siguiente = 3000 + Math.random() * 7000;
  setTimeout(glitchPalabras, siguiente);
}
setTimeout(glitchPalabras, 2000);

// ========== REVEAL AL SCROLL ==========
const revealElements = document.querySelectorAll('.anim-reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// ========== FAQ ACORDEÓN ==========
document.querySelectorAll('.faq-pregunta').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('activo');
    document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('activo'));
    if (!isActive) item.classList.add('activo');
  });
});

// ========== MENÚ MÓVIL ==========
const hamburguesa = document.getElementById('hamburguesa');
const navLinks = document.getElementById('navLinks');
if (hamburguesa && navLinks) {
  hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('activo');
    navLinks.classList.toggle('activo');
  });
}

// ========== SCROLL SNAPPING SUAVE (QUITAR FRICCIÓN) ==========
let isScrolling = false;
let scrollTimeout;

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;

  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const direction = e.deltaY > 0 ? 1 : -1;

  let currentIndex = 0;
  for (let i = sections.length - 1; i >= 0; i--) {
    const sectionTop = sections[i].offsetTop - 100;
    if (scrollY >= sectionTop) {
      currentIndex = i;
      break;
    }
  }

  const targetIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
  const targetSection = sections[targetIndex];
  const targetPosition = targetSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });

  const nav = document.getElementById('nav');
  if (targetPosition > 50) nav.style.background = 'rgba(10,10,15,0.95)';
  else nav.style.background = 'rgba(10,10,15,0.85)';

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isScrolling = false;
  }, 800);
}, { passive: false });

// Actualizar nav también con scroll normal
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) nav.style.background = 'rgba(10,10,15,0.95)';
  else nav.style.background = 'rgba(10,10,15,0.85)';
});

// ========== DEMO CHATBOT ==========
const chatDemo = document.getElementById('chatDemo');
const chatDemoInput = document.getElementById('chatDemoInput');
const chatDemoEnviar = document.getElementById('chatDemoEnviar');

const respuestasDemo = [
  { claves: ['hola', 'buenas', 'hey', 'saludos'], respuesta: '¡Hola! Soy el asistente de <strong>Chatbot3301</strong>. ¿Qué quieres saber?' },
  { claves: ['que es', 'qué es', 'como funciona', 'cómo funciona', 'explica'], respuesta: 'Chatbot3301 genera chatbots <strong>sin IA</strong> para negocios. Rellenas un formulario con preguntas frecuentes, generas un script y lo pegas en tu web. En 2 minutos tienes un chatbot 100% fiable.' },
  { claves: ['precio', 'cuesta', 'gratis', 'planes', 'plan'], respuesta: 'Plan <strong>Gratuito</strong> (0€/mes), <strong>Pro</strong> (20€/mes, ilimitado) y <strong>Agencia</strong> (100€/mes, hasta 20 chatbots).' },
  { claves: ['ia', 'inteligencia artificial', 'alucina', 'openai', 'chatgpt'], respuesta: 'Chatbot3301 <strong>NO usa IA</strong>. Funciona con lógica pura: patrones y palabras clave. No alucina, no depende de APIs externas.' },
  { claves: ['crear', 'configurar', 'hacer', 'montar', 'generar'], respuesta: 'Entras en la plataforma, escribes tus preguntas y respuestas, eliges el color y pulsas <strong>Generar</strong>. Copias el script y lo pegas en tu web. ¡Listo!' },
  { claves: ['widget', 'web', 'pegar', 'script', 'instalar', 'poner'], respuesta: 'El widget se instala con <strong>UNA sola línea</strong> de código. Aparece una burbuja flotante abajo a la derecha de tu web.' },
  { claves: ['contacto', 'hablar', 'persona', 'humano', 'email'], respuesta: 'Puedes escribir a <strong>hola@chatbot3301.com</strong> o contactar desde la plataforma.' }
];

function responderDemo(mensaje) {
  const msg = mensaje.toLowerCase();
  const coincidencias = [];
  for (const item of respuestasDemo) {
    for (const clave of item.claves) {
      if (msg.includes(clave)) { coincidencias.push(item.respuesta); break; }
    }
  }
  if (coincidencias.length === 0) return 'No tengo esa info aún. Pregúntame <strong>"¿qué es?"</strong> o <strong>"¿cómo se crea?"</strong> y te cuento.';
  return coincidencias.join(' Además: ');
}

function enviarMensajeDemo() {
  const texto = chatDemoInput.value.trim();
  if (!texto) return;
  chatDemo.innerHTML += `<div class="chat-mensaje usuario"><div class="chat-burbuja">${texto}</div></div>`;
  chatDemoInput.value = '';
  setTimeout(() => {
    const respuesta = responderDemo(texto);
    chatDemo.innerHTML += `<div class="chat-mensaje bot"><span class="chat-avatar">🤖</span><div class="chat-burbuja">${respuesta}</div></div>`;
    chatDemo.scrollTop = chatDemo.scrollHeight;
  }, 400 + Math.random() * 300);
  chatDemo.scrollTop = chatDemo.scrollHeight;
}

chatDemoEnviar.addEventListener('click', enviarMensajeDemo);
chatDemoInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') enviarMensajeDemo(); });
