/**
 * POSTS.JS — ĐỐM ƠI LANDING PAGE
 * Quản lý tường chia sẻ kỷ niệm "Đốm của bạn là ai?" (User Generated Content)
 */

const STORAGE_KEY = 'dom_oi_memory_posts';

const INITIAL_MEMORIES = [
  {
    id: 'post-1',
    author: 'Minh Thảo',
    location: 'Đồng Nai',
    petName: 'Bông',
    message: 'Bông là chú cún gắn với tuổi thơ 10 năm của mình. Xem teaser nhớ những chiều tan học chạy về có tiếng sủa quen thuộc đón ở cổng...',
    hearts: 14,
    createdAt: '24/10/2026'
  },
  {
    id: 'post-2',
    author: 'Hoàng Nam',
    location: 'TP. Hồ Chí Minh',
    petName: 'Miu Miu',
    message: 'Từng trải qua cảm giác lạc mất bạn ấy mà bất lực không làm gì được... Xem câu chuyện của Hà Linh thấy như thấy lại chính vết thương lòng của mình.',
    hearts: 28,
    createdAt: '26/10/2026'
  },
  {
    id: 'post-3',
    author: 'Khánh Vy',
    location: 'Biên Hòa',
    petName: 'Lạc Lạc',
    message: 'Cảm ơn nhóm tác giả vì một câu chuyện thật dịu dàng. Có những bạn nhỏ chỉ bên mình một đoạn đường thôi nhưng ở lại trong tim mãi mãi.',
    hearts: 39,
    createdAt: '28/10/2026'
  },
  {
    id: 'post-4',
    author: 'Bảo Trâm',
    location: 'Đà Nẵng',
    petName: 'Cún Vàng',
    message: 'Ánh mắt của Đốm trong giấc mơ làm mình rơi nước mắt. Chắc chắn ở một nơi nào đó, các bạn nhỏ vẫn luôn nhớ về mái nhà xưa.',
    hearts: 21,
    createdAt: '30/10/2026'
  }
];

export function initMemoryWall() {
  const container = document.querySelector('#memoryCardsContainer');
  const form = document.querySelector('#memoryForm');

  if (!container) return;

  function getMemories() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MEMORIES));
      return INITIAL_MEMORIES;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return INITIAL_MEMORIES;
    }
  }

  function renderMemories() {
    const list = getMemories();
    container.innerHTML = list
      .map(
        (item) => `
        <article class="memory-card" data-post-id="${item.id}">
          <div class="memory-header">
            <span class="memory-paw-mark">🐾</span>
            <span class="memory-date">${item.createdAt || 'Mới đây'}</span>
          </div>
          <p class="memory-message">"${escapeHtml(item.message)}"</p>
          <div class="memory-footer">
            <div class="memory-author">
              ${escapeHtml(item.author || 'Bạn ẩn danh')}
              <small>gửi đến <strong>${escapeHtml(item.petName || 'người bạn nhỏ')}</strong> ${item.location ? `· ${escapeHtml(item.location)}` : ''}</small>
            </div>
            <button class="memory-heart-btn" data-action="like-post" data-post-id="${item.id}" aria-label="Thả tim lời nhắn">
              <span>❤️</span>
              <span class="heart-count">${item.hearts || 0}</span>
            </button>
          </div>
        </article>
      `
      )
      .join('');

    // Attach like button event listeners
    container.querySelectorAll('[data-action="like-post"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const postId = btn.getAttribute('data-post-id');
        const countSpan = btn.querySelector('.heart-count');
        const memories = getMemories();
        const target = memories.find((m) => m.id === postId);
        if (target) {
          target.hearts = (target.hearts || 0) + 1;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
          if (countSpan) countSpan.textContent = String(target.hearts);
          btn.style.transform = 'scale(1.2)';
          setTimeout(() => { btn.style.transform = ''; }, 200);
        }
      });
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m]));
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const authorInput = form.querySelector('[name="author"]');
    const petInput = form.querySelector('[name="petName"]');
    const messageInput = form.querySelector('[name="message"]');

    const message = messageInput?.value.trim();
    if (!message) return;

    const today = new Date();
    const dateFormatted = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    const newPost = {
      id: `post-${Date.now()}`,
      author: authorInput?.value.trim() || 'Người bạn giấu tên',
      petName: petInput?.value.trim() || 'Người bạn nhỏ',
      message,
      hearts: 1,
      createdAt: dateFormatted
    };

    const currentList = getMemories();
    const updated = [newPost, ...currentList];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    form.reset();
    renderMemories();

    // Scroll to the first card
    const firstCard = container.querySelector('.memory-card');
    firstCard?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  renderMemories();
}
