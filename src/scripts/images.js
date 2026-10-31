/**
 * IMAGES.JS — ĐỐM ƠI LANDING PAGE
 * Khai báo danh mục hình ảnh, key visual, posters và helper load asset
 * Cấu trúc phân loại theo thư mục: branding, characters, posters, sceneries, production, merch, mockups
 */

export const ASSETS = {
  // Brand & Logos
  branding: {
    primary: '/images/branding/logo-dom-oi.png',
    white: '/images/branding/logo-dom-oi-white.png',
    university: '/images/branding/lhu-logo-trans.png',
    chibi: '/images/characters/chibi-dom-halinh.png',
    pawIcon: '/src/assets/icons/paw.svg'
  },

  // Key visuals & Posters
  posters: [
    {
      id: 'key-visual-bathing',
      title: 'Tắm mát dưới nắng mai (Key Visual)',
      src: '/images/posters/key-visual-tam-dom.png',
      alt: 'Hà Linh tắm cho Đốm trong bồn nước dưới ánh nắng vàng'
    },
    {
      id: 'poster-1',
      title: 'Hà Linh & Đốm trên thảm cỏ hoa vàng (Poster 1)',
      src: '/images/posters/poster-co-vang.png',
      alt: 'Hà Linh nằm trên thảm cỏ hoa vàng bên chú chó Đốm'
    },
    {
      id: 'poster-2',
      title: 'Khoảng trời trong trẻo (Poster 2)',
      src: '/images/posters/poster-dong-co.png',
      alt: 'Hà Linh và Đốm ngồi bên nhau dưới bầu trời xanh ngắt'
    }
  ],

  // Tuyến nhân vật (Single cutouts & Turnaround sheets)
  characters: {
    haLinh14: {
      name: 'Hà Linh (14 tuổi)',
      single: '/images/characters/halinh-14-single.png',
      turnaround: '/images/characters/halinh-14-turnaround.png',
      palette: ['#FFFFFF', '#E57335', '#467448', '#FFD4B2', '#37281D']
    },
    haLinh21: {
      name: 'Hà Linh (21 tuổi)',
      single: '/images/characters/halinh-21-single.png',
      turnaround: '/images/characters/halinh-21-turnaround.png',
      palette: ['#486047', '#C8B6A6', '#FAF0E6', '#3D2B1F']
    },
    dom: {
      name: 'Chú chó Đốm',
      single: '/images/characters/dom-single.png',
      turnaround: '/images/characters/dom-turnaround.png',
      palette: ['#FFFFFF', '#7D4F38', '#211815', '#D4776D']
    }
  },

  // Bối cảnh (Sceneries)
  sceneries: [
    { id: 'scenery-1', title: 'Cánh đồng cỏ & Thùng giấy', stage: 'warm', src: '/images/sceneries/scenery-warm.png' },
    { id: 'scenery-2', title: 'Căn phòng giam & Lồng sắt', stage: 'cold', src: '/images/sceneries/scenery-cold.png' },
    { id: 'scenery-3', title: 'Con đường về trong mơ', stage: 'dream', src: '/images/sceneries/scenery-master.png' },
    { id: 'scenery-4', title: 'Hoàng hôn trạm cứu hộ', stage: 'sunset', src: '/images/sceneries/scenery-sunset.png' },
    { id: 'scenery-5', title: 'Moodboard thiết kế bối cảnh', stage: 'warm', src: '/images/sceneries/scenery-moodboard.png' }
  ],

  // Storyboard & Color Script
  production: {
    colorScript: '/images/production/color-script.png',
    storyboard1: '/images/production/storyboard-sheet-1.png',
    storyboard2: '/images/production/storyboard-sheet-2.png'
  },

  // Mockups & POSM
  merch: {
    standee: '/images/merch/standee-trans.png',
    coaster: '/images/merch/coaster-round.png',
    stickers: '/images/merch/stickers.png',
    pins: '/images/merch/pin-badges-set.png',
    pinsSet: [
      '/images/merch/pin-badges-set.png'
    ],
    photoStandee: '/images/merch/photo-standee.png',
    photoStickers: '/images/merch/photo-stickers.png',
    photoKeychains: '/images/merch/photo-keychains.png',
    booth1: '/images/merch/booth-1.png',
    booth2: '/images/merch/booth-2.png'
  },

  mockups: {
    busStop: '/images/mockups/bus-stop.png',
    wall: '/images/mockups/wall-poster.png',
    curved: '/images/mockups/curved-poster.png'
  }
};
