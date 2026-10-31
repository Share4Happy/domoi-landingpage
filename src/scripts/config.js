/**
 * CONFIG.JS — ĐỐM ƠI LANDING PAGE
 * Cấu hình chung, thông tin đồ án & siêu dữ liệu
 */

export const SITE_CONFIG = {
  title: 'Đốm Ơi – Phim hoạt hình ngắn 2D',
  tagline: 'Có những người bạn chỉ ở bên ta một đoạn đường, nhưng ở lại trong tim rất lâu.',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://domoi.vn',
  behanceUrl: import.meta.env.VITE_BEHANCE_URL || 'https://www.behance.net/gallery/256184407/Dm-Oi-Animated-Short-Film',
  pvUrl: 'https://www.behance.net/gallery/256184407/Dm-Oi-Animated-Short-Film',
  behanceEmbedUrl: 'https://www.behance.net/embed/project/256184407?ilo0=1',
  filmVideoUrl: import.meta.env.VITE_FILM_URL || 'https://www.behance.net/gallery/256184407/Dm-Oi-Animated-Short-Film',
  trailerVideoUrl: import.meta.env.VITE_TRAILER_URL || 'https://www.behance.net/gallery/256184407/Dm-Oi-Animated-Short-Film',
  releaseDate: '2026-10-24',
  authors: [
    { name: 'Lương Gia Hân', mssv: '725000589' },
    { name: 'Vũ Hoàng Thủy', mssv: '725000590' }
  ],
  advisor: 'ThS. Phan Thị Hường',
  university: 'Trường Đại học Lạc Hồng',
  major: 'Truyền thông Đa phương tiện',
  classId: '25AG712'
};

export const EMOTION_STAGES = [
  {
    id: 1,
    key: 'gan-bo',
    title: 'Gắn bó',
    colorHex: '#F3D082',
    quote: 'Một cô bé, một chú chó lang thang và những ngày bình dị nhất.',
    summary: 'Hà Linh gặp Đốm, hai bạn gắn kết qua những ngày bình yên.'
  },
  {
    id: 2,
    key: 'bien-co',
    title: 'Biến cố',
    colorHex: '#34425C',
    quote: 'Có một ngày, tiếng gọi quen thuộc không còn ai đáp lại.',
    summary: 'Đốm bị bắt đi, để lại sự hụt hẫng và trống vắng.'
  },
  {
    id: 3,
    key: 'giac-mo',
    title: 'Giấc mơ',
    colorHex: '#6469A8',
    quote: 'Ở một nơi rất xa, có một chú chó vẫn đang chạy về phía ngôi nhà.',
    summary: 'Giấc mơ của Đốm – góc nhìn chủ quan ngây thơ và da diết.'
  },
  {
    id: 4,
    key: 'chua-lanh',
    title: 'Chữa lành',
    colorHex: '#EFCA9E',
    quote: 'Nhiều năm sau, có những ký ức không cần quên – chỉ cần học cách mang theo.',
    summary: 'Hà Linh trưởng thành, mỉm cười và tiếp tục bước đi cùng yêu thương.'
  }
];

