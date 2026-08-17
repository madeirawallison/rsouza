const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 30);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Counter animation
const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.counter || 0);
    let value = 0;
    const duration = 850;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
    counterObserver.unobserve(el);
  });
}, { threshold: .7 });

counters.forEach(el => counterObserver.observe(el));

// Resource center tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach(p => {
      p.classList.remove('active');
      p.hidden = true;
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const panel = document.getElementById(tab.dataset.tab);
    if (panel) {
      panel.hidden = false;
      panel.classList.add('active');
    }
  });
});

// IMPORTANT:
// Configure official links here once you decide which portals should open.
// Until then, the site prevents dead "#" navigation and shows a friendly notice.
const resourceLinks = {
  // "comprovante-inscricao": "https://...",
  // "cnae": "https://...",
  // "simples": "https://...",
  // "situacao-cadastral": "https://...",
  // "irpf-restituicao": "https://...",
  // "cpf": "https://...",
  // "cnd-pf": "https://...",
  // "carne-leao": "https://...",
  // "cnd-federal": "https://...",
  // "cnd-estadual": "https://...",
  // "cnd-municipal": "https://...",
  // "cnd-trabalhista": "https://...",
  // "fgts": "https://...",
  // "e-cac": "https://...",
  // "sefaz-mg": "https://..."
};

document.querySelectorAll('[data-resource]').forEach(link => {
  const key = link.dataset.resource;
  if (resourceLinks[key]) {
    link.href = resourceLinks[key];
    link.target = '_blank';
    link.rel = 'noopener';
  } else {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('Este atalho está pronto no layout, mas o endereço oficial ainda precisa ser configurado no arquivo js/main.js.');
    });
  }
});

// FAQ accordion
document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const open = item.classList.toggle('open');

    button.setAttribute('aria-expanded', open);
    answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0px';
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
