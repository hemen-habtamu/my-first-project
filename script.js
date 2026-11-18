const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('navigation');
  menuBtn.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(opened));
    menuBtn.textContent = opened ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.textContent = '☰';
  }));
  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent('Portfolio message from ' + data.get('name'));
    const body = encodeURIComponent('Name: ' + data.get('name') + '\\nEmail: ' + data.get('email') + '\\n\\n' + data.get('message'));
    window.location.href = 'mailto:gilila@gmail.com?subject=' + subject + '&body=' + body;
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...nav.querySelectorAll('a')];
  window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 150) current = section.id; });
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
  });
