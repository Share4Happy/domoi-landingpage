# DANH MỤC TÀI NGUYÊN HÌNH ẢNH & DỮ LIỆU CẦN THU THẬP (ASSETS TODO)

> Trích xuất từ phân tích đồ án: **Mục 9 (Danh mục tài nguyên cần chuẩn bị)** và **Mục 10 (Nội dung còn thiếu / Chưa thống nhất)** trong tài liệu `DomOi_landing_page_layout.md`.

---

## 1. HÌNH ẢNH & THIẾT KẾ ĐỒ HỌA (ĐÃ TỔ CHỨC THEO THƯ MỤC)

| STT | Tài nguyên | Định dạng | Kích thước | Vị trí đặt file | Trạng thái hiện tại |
|:---:|:---|:---:|:---:|:---|:---:|
| 1 | **Logo Lettering "Đốm Ơi"** (bản nét tay, nền trong suốt) | PNG RGBA | 881 × 569 px | `public/images/branding/logo-dom-oi.png` | ✅ Đã trích xuất & khử nền trong |
| 2 | **Logo Đại học Lạc Hồng (LHU)** (nền trong suốt) | PNG RGBA | 432 × 193 px | `public/images/branding/lhu-logo-trans.png` | ✅ Đã trích xuất & khử nền trong |
| 3 | **Key Visual: Tắm Đốm dưới nắng mai** | PNG | 1344 × 756 px | `public/images/posters/key-visual-tam-dom.png` | ✅ Đã tích hợp Hero switcher |
| 4 | **Poster 1: Nằm trên thảm cỏ hoa vàng** | PNG | 744 × 1053 px | `public/images/posters/poster-co-vang.png` | ✅ Đã tích hợp Hero & Intro |
| 5 | **Poster 2: Ngồi bên nhau dưới trời xanh** | PNG | 645 × 911 px | `public/images/posters/poster-dong-co.png` | ✅ Đã tích hợp Hero switcher & Gallery |
| 6 | **Model Sheet Hà Linh 14 tuổi** (dáng đứng & 3 góc) | PNG RGBA | 2095 × 1167 px | `public/images/characters/halinh-14-*.png` | ✅ Đã khử nền trắng trong suốt |
| 7 | **Model Sheet Hà Linh 21 tuổi** (dáng đứng & 3 góc) | PNG RGBA | 1042 × 957 px | `public/images/characters/halinh-21-*.png` | ✅ Đã khử nền trắng trong suốt |
| 8 | **Model Sheet Chú chó Đốm** (dáng đứng & 3 góc) | PNG RGBA | 2027 × 1018 px | `public/images/characters/dom-*.png` | ✅ Đã khử nền trắng bảo toàn lông |
| 9 | **Linh vật Chibi Hà Linh ôm Đốm** (nền trong suốt) | PNG RGBA | 1118 × 1094 px | `public/images/characters/chibi-dom-halinh.png` | ✅ Đã khử nền trong suốt |
| 10 | **Dải Color Script toàn phim** | PNG | 2048 × 579 px | `public/images/production/color-script.png` | ✅ Đã tích hợp kèm Lightbox |
| 11 | **Storyboard phân cảnh tập 1 & 2** | PNG | 1856 × 2048 px | `public/images/production/storyboard-sheet-*.png`| ✅ Đã tích hợp hậu trường |
| 12 | **Hệ ấn phẩm & Quà tặng** (Standee, Lót ly, Huy hiệu, Sticker) | PNG RGBA | Nhiều kích thước | `public/images/merch/*` | ✅ Đã khử nền trong suốt |
| 13 | **Ảnh chụp thực tế bàn triển lãm & sản phẩm** | PNG | 1024 × 1024 px | `public/images/merch/photo-*` & `booth-*` | ✅ Đã tích hợp showcase thực tế |
| 14 | **Mockup quảng bá** (Hộp đèn xe buýt, Tường triển lãm, Áp phích uốn) | PNG | 2400 × 1800 px | `public/images/mockups/*` | ✅ Đã tích hợp Gallery lọc mockup |

---

## 2. VIDEO & ÂM THANH

| STT | Hạng mục | Định dạng | Mục đích | Trạng thái hiện tại |
|:---:|:---|:---:|:---|:---:|
| 1 | **Bản phim chính thức hoàn chỉnh** (Link YouTube / Drive) | URL Embed / MP4 | Gắn vào Modal "Xem phim" | ⚠️ Sẵn sàng nhúng khi có link chính thức từ nhóm |
| 2 | **Trailer ngắn (15–30 giây)** | MP4 / WebM | Trình chiếu teaser | ⚠️ Chờ bản dựng từ nhóm |
| 3 | **Hiệu ứng tiếng gọi "Đốm ơi...!"** | Web Audio API / MP3 | Nút tương tác tại Section 13 | ✅ Đã tích hợp bộ tổng hợp âm thanh Web Audio API hoạt động tức thì |

---

## 3. CHECKLIST THỐNG NHẤT VỚI NHÓM ĐỒ ÁN

- [x] Thiết kế hoàn chỉnh 14 section theo đúng bố cục [DomOi_landing_page_layout.md](file:///d:/Projects/landing-page/dom/DomOi_landing_page_layout.md)
- [x] Tích hợp bảng màu Design Tokens chuẩn (Jasmine `#F3D082`, Delft Blue `#34425C`, Tím mơ `#6469A8`, Flame `#D7685A`, Kobicha `#604826`)
- [x] Tích hợp thanh trượt so sánh Before/After Storyboard vs Phim
- [x] Tích hợp chuyển đổi tuổi Hà Linh 14 ⇄ 21 tuổi
- [x] Tích hợp Tường kỷ niệm "Đốm của bạn là ai?" có thả tim và lưu trữ LocalStorage
- [ ] Thay link YouTube chính thức của phim vào file [footer.html](file:///d:/Projects/landing-page/dom/src/partials/footer.html) khi phim công chiếu
- [ ] Bổ sung ảnh chụp thực tế bộ ấn phẩm trưng bày tại triển lãm (nếu có)
