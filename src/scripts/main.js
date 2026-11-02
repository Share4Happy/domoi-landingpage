/**
 * MAIN.JS — ĐỐM ƠI LANDING PAGE ENTRY POINT
 */

// Import Stylesheets
import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/sections/index.css';

// Import Scripts & Configs
import { SITE_CONFIG } from './config.js';
import { initMenu } from './menu.js';
import { initMemoryWall } from './posts.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(`🐾 ${SITE_CONFIG.title} – Đồ án tốt nghiệp 2026`);
  console.log(`🎬 Tác giả: ${SITE_CONFIG.authors.map(a => a.name).join(' & ')}`);

  // 1. Menu & Sticky Navbar
  initMenu();

  // 2. Chuyển đổi Poster ở Hero
  initHeroPosterTabs();

  // 3. Tường kỷ niệm "Đốm của bạn là ai?"
  initMemoryWall();

  // 4. Chuyển đổi nhân vật Hà Linh (14 tuổi ⇄ 21 tuổi)
  initCharacterAgeToggle();

  // 5. Bộ lọc bối cảnh ánh sáng & Thư viện ảnh
  initVisualFilters();
  initGalleryFilters();

  // 6. Lightbox xem ảnh toàn màn hình
  initLightbox();

  // 7. FAQ Accordion
  initFaqAccordion();

  // 8. Video Modal xem phim
  initVideoModal();

  // 9. Nút âm thanh "Đốm ơi!" (Web Audio API synthesizes gentle melodic chime)
  initDomAudioCall();

  // 10. Điều hướng 4 chặng cảm xúc
  initJourneyNavigation();
});

/**
 * Chuyển đổi tab Poster ở Hero (Key Visual ⇄ Poster 1 ⇄ Poster 2)
 */
function initHeroPosterTabs() {
  const tabs = document.querySelectorAll('.hero-poster-tab');
  const frame = document.querySelector('#heroPosterFrame');
  const img = document.querySelector('#heroPosterImg');

  if (!tabs.length || !frame || !img) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const src = tab.getAttribute('data-poster-src');
      const title = tab.getAttribute('data-poster-title') || 'Poster Đốm Ơi';
      const isPortrait = src && (src.includes('poster-co-vang') || src.includes('poster-dong-co'));

      if (src) {
        img.style.opacity = '0';
        setTimeout(() => {
          img.src = src;
          frame.setAttribute('data-lightbox', src);
          frame.setAttribute('data-caption', title);
          if (isPortrait) {
            frame.classList.add('is-portrait');
            frame.classList.remove('is-landscape');
          } else {
            frame.classList.add('is-landscape');
            frame.classList.remove('is-portrait');
          }
          img.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/**
 * Điều khiển slider/toggle Hà Linh 14 tuổi ⇄ 21 tuổi
 */
function initCharacterAgeToggle() {
  const btn14 = document.querySelector('[data-age="14"]');
  const btn21 = document.querySelector('[data-age="21"]');
  const haLinhView = document.querySelector('#haLinhCharacterView');
  const haLinhImg = document.querySelector('#haLinhImage');
  const haLinhFrame = document.querySelector('#haLinhFrame');
  const haLinhSheetBtn = document.querySelector('#haLinhModelSheetBtn');
  const info14 = document.querySelector('#haLinhInfo14');
  const info21 = document.querySelector('#haLinhInfo21');

  if (!btn14 || !btn21 || !haLinhImg) return;

  btn14.addEventListener('click', () => {
    btn14.classList.add('is-active');
    btn21.classList.remove('is-active');
    haLinhView?.setAttribute('data-current-age', '14');
    haLinhImg.src = '/images/characters/halinh-14-model-sheet.png';
    haLinhImg.alt = 'Hà Linh tuổi 14 - Tinh nghịch, năng động';
    if (haLinhFrame) {
      haLinhFrame.setAttribute('data-lightbox', '/images/characters/halinh-14-model-sheet.png');
      haLinhFrame.setAttribute('data-caption', 'Bản vẽ Model Sheet nhân vật Hà Linh (14 tuổi)');
    }
    if (haLinhSheetBtn) {
      haLinhSheetBtn.setAttribute('data-lightbox', '/images/characters/halinh-14-model-sheet.png');
      haLinhSheetBtn.setAttribute('data-caption', 'Bản vẽ Model Sheet nhân vật Hà Linh (14 tuổi)');
    }
    if (info14 && info21) {
      info14.style.display = 'block';
      info21.style.display = 'none';
    }
  });

  btn21.addEventListener('click', () => {
    btn21.classList.add('is-active');
    btn14.classList.remove('is-active');
    haLinhView?.setAttribute('data-current-age', '21');
    haLinhImg.src = '/images/characters/halinh-21-model-sheet.png';
    haLinhImg.alt = 'Hà Linh tuổi 21 - Trưởng thành, dịu dàng';
    if (haLinhFrame) {
      haLinhFrame.setAttribute('data-lightbox', '/images/characters/halinh-21-model-sheet.png');
      haLinhFrame.setAttribute('data-caption', 'Bản vẽ Model Sheet nhân vật Hà Linh (21 tuổi)');
    }
    if (haLinhSheetBtn) {
      haLinhSheetBtn.setAttribute('data-lightbox', '/images/characters/halinh-21-model-sheet.png');
      haLinhSheetBtn.setAttribute('data-caption', 'Bản vẽ Model Sheet nhân vật Hà Linh (21 tuổi)');
    }
    if (info14 && info21) {
      info14.style.display = 'none';
      info21.style.display = 'block';
    }
  });
}

/**
 * Lọc bối cảnh trong Thế giới hình ảnh (Section 05)
 */
function initVisualFilters() {
  const filterButtons = document.querySelectorAll('.visual-filter-bar .filter-btn');
  const sceneryItems = document.querySelectorAll('.scenery-grid .scenery-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');
      sceneryItems.forEach((item) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Lọc ảnh trong Gallery (Section 09)
 */
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('.gallery-tabs .gallery-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-gallery-filter');
      galleryItems.forEach((item) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Lightbox xem ảnh toàn màn hình
 */
function initLightbox() {
  const lightboxModal = document.querySelector('#lightboxModal');
  const lightboxImg = document.querySelector('#lightboxImage');
  const lightboxCaption = document.querySelector('#lightboxCaption');
  const closeBtn = document.querySelector('#closeLightboxModal');

  if (!lightboxModal || !lightboxImg) return;

  document.querySelectorAll('[data-lightbox]').forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-lightbox');
      const caption = el.getAttribute('data-caption') || '';
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      lightboxModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightboxModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('is-active')) {
      closeLightbox();
    }
  });
}

/**
 * Accordion cho FAQ
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach((other) => other.classList.remove('is-open'));
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });
}

/**
 * Video Modal xem phim
 */
function initVideoModal() {
  const openButtons = document.querySelectorAll('[data-action="open-video-modal"]');
  const modal = document.querySelector('#videoModal');
  const closeBtn = document.querySelector('#closeVideoModal');

  if (!modal) return;

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/**
 * Âm thanh gọi "Đốm ơi...!" sử dụng Web Audio API
 * Phát chuỗi nốt nhạc ấm áp, dịu êm như tiếng chuông gió ký ức
 */
function initDomAudioCall() {
  const callBtn = document.querySelector('#soundCallBtn');
  if (!callBtn) return;

  callBtn.addEventListener('click', () => {
    callBtn.classList.add('is-playing');

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Nốt nhạc ấm áp gợi ký ức: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), C6 (1046.5Hz)
      const notes = [
        { freq: 523.25, time: 0, dur: 0.5 },
        { freq: 659.25, time: 0.25, dur: 0.6 },
        { freq: 783.99, time: 0.5, dur: 0.8 },
        { freq: 1046.5, time: 0.8, dur: 1.2 }
      ];

      notes.forEach(({ freq, time, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + time);

        gain.gain.setValueAtTime(0, ctx.currentTime + time);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + time + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + time);
        osc.stop(ctx.currentTime + time + dur);
      });
    } catch (err) {
      console.warn('Web Audio không khả dụng:', err);
    }

    setTimeout(() => {
      callBtn.classList.remove('is-playing');
    }, 1800);
  });
}

/**
 * Điều hướng nhanh qua 4 chặng cảm xúc
 */
function initJourneyNavigation() {
  const buttons = document.querySelectorAll('.journey-nav-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetStage = btn.getAttribute('data-target-stage');
      const targetElement = document.querySelector(`#stage-${targetStage}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
}
