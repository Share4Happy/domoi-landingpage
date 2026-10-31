/**
 * MENU.JS — ĐỐM ƠI LANDING PAGE
 * Điều hướng, Menu di động, Header dính (Sticky) & ScrollSpy
 */

export function initMenu() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle-btn');
  const nav = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1. Hiệu ứng đổi màu nền Header khi cuộn trang
  function handleScroll() {
    if (window.scrollY > 50) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Kích hoạt ban đầu

  // 2. Toggle menu trên thiết bị di động
  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav?.classList.toggle('is-open');
  });

  // 3. Đóng mobile menu khi bấm vào link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav?.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // 4. ScrollSpy với IntersectionObserver để active nav link theo section
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
}

