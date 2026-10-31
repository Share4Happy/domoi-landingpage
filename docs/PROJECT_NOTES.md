# GHI CHÚ DỰ ÁN & KIẾN TRÚC KỸ THUẬT: ĐỐM ƠI LANDING PAGE

> **Tên dự án:** Landing Page Phim Hoạt Hình Ngắn 2D "Đốm Ơi"  
> **Tác giả:** Lương Gia Hân & Vũ Hoàng Thủy · GVHD: ThS. Phan Thị Hường · Đại học Lạc Hồng (2026)  
> **Tài liệu tham chiếu:** `DomOi_landing_page_layout.md`

---

## 1. TỔNG QUAN THIẾT KẾ & TÍNH NĂNG TƯƠNG TÁC ĐÃ TRIỂN KHAI

Landing page được thiết kế bám sát 100% tài liệu [DomOi_landing_page_layout.md](file:///d:/Projects/landing-page/dom/DomOi_landing_page_layout.md) với phong cách vẽ tay màu nước 2D ấm áp, hoài niệm và chữa lành:

1. **Ý tưởng chủ đạo: "Trang web đổi màu theo cảm xúc của phim" (Section 03):**
   - 4 chặng cảm xúc tương ứng 4 gam màu:
     - **Chặng 1 (Gắn bó):** Ánh sáng ấm vàng kem `#F3D082` (Jasmine)
     - **Chặng 2 (Biến cố):** Sắc lam xám lạnh Delft Blue `#34425C`
     - **Chặng 3 (Giấc mơ):** Tím xanh mờ ảo `#6469A8` (góc nhìn chú chó Đốm)
     - **Chặng 4 (Chữa lành):** Gradient hoàng hôn ấm `#EFCA9E` $\rightarrow$ `#D7685A` $\rightarrow$ `#34425C`
   - Thanh điều hướng 4 nút cho phép nhảy nhanh đến từng chặng cảm xúc.

2. **Thanh trượt tuổi nhân vật Hà Linh (14 tuổi ⇄ 21 tuổi) (Section 04):**
   - Nút chuyển tương tác tức thời giữa hình tượng cô bé 14 tuổi tinh nghịch (áo trắng tay cam, quần short xanh lục) và cô gái 21 tuổi làm việc tại trạm cứu hộ (gile len xanh rêu, quần be, tóc buông xõa).
   - Tích hợp bảng mã màu (Model Sheet Palette Swatches) của nhân vật và chú cún Đốm.

3. **Thanh trượt so sánh Trước / Sau (Before / After Comparison Slider) (Section 06):**
   - Hỗ trợ kéo chuột và vuốt chạm (Touch) trên di động.
   - So sánh trực quan giữa bản phác chì Storyboard (quy ước nét vẽ: Hà Linh màu xanh tím, Đốm màu hồng cam) và khung hình dựng màu nước hoàn chỉnh.

4. **Thế giới hình ảnh & Dải Color Script (Section 05):**
   - Dải ruy băng Color Script trực quan 5 cung bậc màu sắc.
   - Bộ lọc phân loại bối cảnh (Ánh sáng ấm, Biến cố, Giấc mơ, Hoàng hôn).
   - Tích hợp Lightbox Modal xem ảnh toàn màn hình khi click vào bất kỳ bối cảnh nào.

5. **Thông điệp xã hội & Số liệu thực trạng (Section 07):**
   - 4 ô số liệu thống kê lớn: 6.081 cá thể chó, 3.695 cá thể mèo, 1.549 vụ việc (FOUR PAWS 2024), 91% người dân ủng hộ (VOH).
   - 4 hành động thiết thực của mỗi cá nhân vì quyền lợi thú cưng.

6. **Tường kỷ niệm "Đốm của bạn là ai?" (Section 11):**
   - Form gửi lời nhắn tương tác cho người bạn nhỏ bốn chân.
   - Lưu trữ tự động bằng `localStorage`, tự cập nhật danh sách thẻ kỷ niệm phong cách Sticky Notes.
   - Nút thả tim (❤️) tương tác tăng lượt yêu thích cho từng mẩu kỷ niệm.

7. **Điểm chạm cảm xúc: Tiếng gọi "Đốm ơi...!" (Section 13):**
   - Nút âm thanh tích hợp Web Audio API phát chuỗi hợp âm nhẹ nhàng C5-E5-G5-C6 mô phỏng tiếng chuông gió ký ức, kèm hiệu ứng sóng âm nhấp nháy sinh động (mặc định không tự phát, hoàn toàn hoạt động offline).

8. **Trình phát Video Modal & FAQ Accordion (Section 12 & Footer):**
   - Modal xem phim ngắn responsive chuẩn tỉ lệ 16:9, đóng mở mượt mà bằng phím `ESC` hoặc click overlay.
   - Accordion giải đáp thắc mắc về phân loại độ tuổi 13+, cảnh phim nhân văn nhẹ nhàng, nguồn gốc đồ án.

---

## 2. DANH MỤC ASSETS VECTOR NGHỆ THUẬT ĐÃ TẠO

Toàn bộ đồ họa minh họa được tạo dưới dạng vector SVG nhẹ, sắc nét trên mọi độ phân giải màn hình (Retina / 4K):
- `public/images/hero-key-visual.svg`: Khung cảnh Hà Linh & Đốm trên đồng cỏ vàng, dưới bóng cây cổ thụ.
- `public/images/halinh-14.svg`: Model Sheet Hà Linh 14 tuổi.
- `public/images/halinh-21.svg`: Model Sheet Hà Linh 21 tuổi.
- `public/images/dom-character.svg`: Model Sheet chú chó Đốm lông tơ xù.
- `public/images/storyboard-sketch.svg`: Bản phác nét Storyboard cảnh 1 cut 3.
- `public/images/storyboard-colored.svg`: Bản dựng phim hoàn thiện cảnh 1 cut 3.
- `public/images/scenery-warm.svg`: Bối cảnh đồng cỏ & thùng giấy.
- `public/images/scenery-cold.svg`: Bối cảnh căn phòng giam & song sắt.
- `public/images/scenery-dream.svg`: Bối cảnh con đường huyền ảo trong mơ.
- `public/images/scenery-sunset.svg`: Bối cảnh hoàng hôn trạm cứu hộ.
- `public/og-image.svg`: Ảnh Open Graph kích thước chuẩn 1200×630px.
- `public/favicon.svg`: Icon dấu chân cún Đốm.

---

## 3. LIÊN KẾT PV & HỒ SƠ CHÍNH THỨC TRÊN BEHANCE

Đường link chính thức chứa Promotional Video (PV) và toàn bộ hồ sơ đồ án của nhóm tác giả:
- **Behance Portfolio URL:** [https://www.behance.net/gallery/256184407/Dm-Oi-Animated-Short-Film](https://www.behance.net/gallery/256184407/Dm-Oi-Animated-Short-Film)
- **Official Embed URL:** `https://www.behance.net/embed/project/256184407?ilo0=1`
- **Các vị trí tích hợp:**
  1. Navbar CTA: Nút "Xem PV Phim ↗".
  2. Hero Header: Nút CTA chính "▶ Xem PV Dự Án (Behance) ↗" kèm status chip nổi "Xem PV Dự Án ↗".
  3. Giới thiệu (Intro): Card callout hướng dẫn khán giả xem PV.
  4. Video Modal: Nhúng trực tiếp iframe Behance tương tác và nút mở ngoài toàn màn hình.
  5. CTA cuối (Final CTA) & Chân trang (Footer): Nút xem trọn vẹn tác phẩm trên Behance.

---

## 4. LỆNH VẬN HÀNH

```bash
# Cài đặt thư viện (nếu mới clone)
npm install

# Khởi chạy server phát triển (HMR tức thì)
npm run dev

# Đóng gói sản phẩm (Production build)
npm run build

# Xem trước bản đóng gói
npm run preview
```
Build hoàn tất chỉ trong ~400ms và sẵn sàng triển khai lên GitHub Pages, Vercel hoặc hosting bất kỳ!
